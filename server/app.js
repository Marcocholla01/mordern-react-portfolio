import express from "express";
import cors from "cors";
import colors from "colors";
import cookiParser from "cookie-parser";
import path from "path";
import errorHandler from "./utils/errors.js";
colors.enable();

const app = express();

app.use(cors());
app.use(cookiParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import authRoutes from "./routes/auth.routes.js";

app.use("/api/v2/auth", authRoutes);

// Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, "public")));

// Define your routes here
app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "public", "index.html"));
  res.status(200).json({ message: `welcome` });
});

// route to handle 404 - Not Found or  wild card routes
// app.get("*", (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
// });

// errorHandling middlewares
app.use(errorHandler);

export default app;
