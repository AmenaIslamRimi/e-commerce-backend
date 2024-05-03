import mongoose from 'mongoose'
import {
  MONGO_DB_HOST,
  MONGO_DB_NAME,
  MONGO_DB_PASSWORD,
  MONGO_DB_USER,
} from '../envSetup'

const MONGO_DB_URL = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOST}.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`

//db connection
export const dbConnect = () => {
  const connUri = MONGO_DB_URL;

  mongoose
    .connect(connUri)
    .then(() => {
      console.log("db connected successfully.");
    })
    .catch((err) => console.error(`mongodb connection error: ${err}`));
};
