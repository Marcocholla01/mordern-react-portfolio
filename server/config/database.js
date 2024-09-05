import mongoose from "mongoose";
import { MONGOBD_URI } from "./config.js";

export default async function checkDbConnection() {
  try {
    const { connection } = await mongoose.connect(MONGOBD_URI);
    console.log(
      `mongodb connection established on DATABASE_HOST: ${connection.host}:${connection.port} and DATABASE_NAME: ${connection.name}`
        .cyan.italic
    );
  } catch (error) {
    console.log(`mongodb connection failed: ${error.message}`);
  }
}
