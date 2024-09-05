import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRES_IN, JWT_SECRET_KEY } from "../config/config.js";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      default: `demo`,
    },
  },
  { timestamps: true }
);

// Hash password
userSchema.pre(`save`, async function (next) {
  if (!this.isModified(`password`)) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare password
userSchema.methods.comparePassword = async function (enteredPassowrd) {
  return await bcrypt.compare(enteredPassowrd, this.password);
};

// Generate JWT token for Auth
userSchema.methods.generateJwtToken = function () {
  return jwt.sign({ userId: this._id }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

const userModel = mongoose.model(`User`, userSchema);
export default userModel;
