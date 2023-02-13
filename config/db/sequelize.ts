import { Sequelize } from 'sequelize'
import { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT } from '..'

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
})

export default sequelize
