// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Joi from 'joi'
import { validateOptions } from '@/config'
import mailer from '@/helpers/mailer'

type Data = {
  message: string
}

type ErrorResponse = {
  errors: string[]
}

const schema = Joi.object({
  name: Joi.string().required(),
  subject: Joi.string().required(),
  fromEmail: Joi.string().email().required(),
  message: Joi.string().required(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>,
) {
  if (req.method !== 'POST')
    res.status(404).json({ message: 'invalid method!' })

  const { error, value } = schema.validate(req.body, validateOptions)

  if (error) {
    res.status(400).json({
      errors: error.details.map((err: { message: string }) => err.message),
    })
    return
  }

  const { name, subject, fromEmail, message } = value

  await mailer(name, subject, message, fromEmail)
  res.status(200).send({ message: 'email successfully send' })
}
