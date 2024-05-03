const mongoose = require('mongoose')

const {
  MONGO_DB_HOST,
  MONGO_DB_NAME,
  MONGO_DB_PASSWORD,
  MONGO_DB_USER,
} = require('../envSetup')

const MONGO_DB_URL = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOST}.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`

//db connection
const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_DB_URL)
    console.log('db connected successfully.')
  } catch (error) {
    console.error(`mongodb connection error: ${error}`)
  }
}

module.exports = dbConnect
