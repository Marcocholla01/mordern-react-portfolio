import { COOKIE_EXPIRES_IN } from "../config/config.js";

// crete jwt token and save that in cookies
const sendToken = (user, statusCode, res) => {
  const token = user.generateJwtToken();

  // Options for cookies
  const options = {
    expires: new Date(Date.now() + parseInt(COOKIE_EXPIRES_IN)),
    secure: true,
    httpOnly: true,
    sameSite: `none`,
    path: "/",
  };

  // console.log(options, new Date(Date.now()));
  // console.log(token);

  res.cookie(`accessToken`, token, options).status(statusCode).json({
    success: true,
    token,
    user,
  });
};

export default sendToken;
