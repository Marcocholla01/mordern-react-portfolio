import dotenv from "dotenv";

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({
    path: "config/.env",
  });
}

export const PORT = process.env.PORT
export const MONGOBD_URI = process.env.MONGOBD_URI

export const ACTIVATION_SECRET_KEY= process.env.ACTIVATION_SECRET_KEY
export const ACTIVATION_EXPIRES_IN = process.env.ACTIVATION_EXPIRES_IN
export const COOKIE_EXPIRES_IN = process.env.COOKIE_EXPIRES_IN
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

