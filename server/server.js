import app from "./app.js";
import { PORT } from "./config/config.js";
import checkDbConnection from "./config/database.js";

// Handle Uncaught Exception
process.on(`uncaughtException`, function (error) {
  console.log(`ERROR: ${error.stack}`.red.italic);
  console.log(`shutting down the server for handling uncaught exception`);
});

// deleting unverified User
// deleteUnverifiedUser.start();

// Database Connection
checkDbConnection();

// create server
const server = app.listen(PORT, function () {
  console.log(`server is running on http://localhost:${PORT}`.magenta.italic);
  //   console.log(`Project home page: https://auth-it.onrender.com`.magenta.italic);
});

// unhandled promise rejection
process.on(`unhandledRejection`, function (error) {
  console.log(`shutting down the server for ${error.stack}`.red.italic);
  console.log(`shutting down the server for unhandled promise rejection`);

  // then close the server
  server.close(function () {
    process.exit(1);
  });
});
