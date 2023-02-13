// import { config } from "dotenv"
export const PORT: number = parseInt(process.env?.PORT as string) || 5000
export const APP_NAME: string = process.env?.APP_NAME || 'expressapp'
export const PRODUCTION: boolean =
  (process.env?.NODE_ENV || 'development') === 'production'
export const APP_KEY: string = process.env?.APP_KEY || `${APP_NAME}123`

export const JWT_SECRET: string = process.env?.JWT_SECRET || `${APP_NAME}123456`
export const JWT_REFRESH_SECRET: string =
  process.env?.JWT_REFRESH_SECRET || `${APP_NAME}123456789`

export const MONGO_URI: string =
  process.env?.MONGO_URI || `mongodb://localhost:27017/${APP_NAME}`

export const RAPIDAPI_EMAIL_URL: string = process.env?.RAPIDAPI_EMAIL_URL || ''
export const RAPIDAPI_EMAIL_HOST: string =
  process.env?.RAPIDAPI_EMAIL_HOST || ''
export const RAPIDAPI_EMAIL_KEY: string = process.env?.RAPIDAPI_EMAIL_KEY || ''

export const DB_HOST: string = process.env?.DB_HOST || '127.0.0.1'
export const DB_NAME: string = process.env?.DB_NAME || ''
export const DB_PORT: number = (process.env?.DB_PORT as unknown as number) || 0
export const DB_USERNAME: string = process.env?.DB_USERNAME || ''
export const DB_PASSWORD: string = process.env?.DB_PASSWORD || ''

export const BASE_PATH = `server[${PRODUCTION ? 'express' : 'typescript'}]`

export const APP_EMAIL: string =
  process.env?.APP_EMAIL || `${APP_NAME}@test.com`

export { connectDB } from './db'

export const validateOptions = {
  abortEarly: false,
  errors: {
    escapeHtml: true,
    wrap: {
      label: '',
    },
  },
}
