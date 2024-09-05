import errorHandler from "../middlewares/errorHandler.middleware.js";

export default (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.message =
    error.message || `something went wrong please try again later`;

  // Mongo Db errors
  //Mongodb id error
  if (error.name === `CastError` || error.kind === "ObjectId") {
    const message = `Resource not found with this id. Invalid ${error.path}`;
    error = new errorHandler(message, 400);
  }

  // Mongodb Duplicate record
  if (error.code === 11000) {
    const message = `${Object.keys(
      error.keyValue
    )} already exists please use a diffrent one`;
    error = new errorHandler(message, 409);
  }

  // jwt errors
  // Wrong JWT Token
  if (error.name === `JsonWebTokenError`) {
    const message = `Your Token is invalid...Please try again later`;
    error = new errorHandler(message, 400);
  }

  // Expired JWT token
  if (error.name === `TokenExpiredError`) {
    const message = `Your Token has expired... Please try again latter`;
    error = new errorHandler(message, 403);
  }

  // Accessing JWT before time
  if (error.name === `NotBeforeError`) {
    const message = `Link will be active as from ${error.date}`;
    error = new errorHandler(message, 401);
  }

  // Nodemailer
  // SMTP Adress not found
  if (error.syscall === `getaddrinfo`) {
    const message = `Email server server mulfunction... Please try again later`;
    error = new errorHandler(message, 404);
  }

  // Connection TimeOut error
  if (error.syscall === ``) {
  }

  // TLS error
  if (error.syscall === ``) {
  }

  // Ensure JSON response for errors
  console.log(error.stack.red.italic);
  res.status(error.statusCode).json({
    success: false,
    statusCode: error.statusCode,
    message: error.message,
  });
};
