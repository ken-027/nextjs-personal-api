/** @format */

import {
  RAPIDAPI_EMAIL_HOST,
  RAPIDAPI_EMAIL_URL,
  RAPIDAPI_EMAIL_KEY,
  APP_EMAIL,
} from '@/config'
import axios from 'axios'

const emailer = (
  name: string,
  subject: string,
  message: string,
  fromEmail: string,
) => {
  const toEmail = APP_EMAIL
  const options = {
    method: 'POST',
    url: RAPIDAPI_EMAIL_URL,
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': RAPIDAPI_EMAIL_KEY,
      'X-RapidAPI-Host': RAPIDAPI_EMAIL_HOST,
    },
    data: `{"personalizations":[{"to":[{"email":"${toEmail}"}],"subject":"${subject.trim()}"}],"from":{"name":"Portfolio | ${name.trim()}","email":"${fromEmail.trim()}"},"content":[{"type":"text/plain","value":"${
      message.trim().replace(/(\r\n|\n|\r)/gm, ' ') || 'No content'
    }"}]}`,
  }

  return axios
    .request(options)
    .then((response) => response.data)
    .then((response) => console.log(response))
    .catch((err) => console.error(err))
}

export default emailer
