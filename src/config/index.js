require('dotenv').config()

const DB_URI = process.env.DB_URI ?? 'XXXX'

module.exports = {
  DB_URI,
}
