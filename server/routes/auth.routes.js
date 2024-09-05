import express from "express";
import { createUser, loginUser } from "../controllers/auth.controller.js";

const router = express.Router();
router.post("/login", loginUser);
router.post("/create", createUser);

export default router;
