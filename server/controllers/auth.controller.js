import userModel from "../models/user.model.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.middleware.js";
import errorHandler from "../middlewares/errorHandler.middleware.js";
import sendToken from "../utils/jwtToken.js";

export const createUser = catchAsyncErrors(async function (req, res, next) {
  const { firstName, lastName, email, password, phoneNumber, userName } =
    req.body;
  const existingUser = await userModel
    .findOne({ userName })
    .select("-password");
  //   .select("-avatar");
  // console.log(existingUser);
  if (existingUser)
    return next(new errorHandler("user with username already exists", 409));

  const user = await userModel.create({
    firstName,
    lastName,
    userName,
    phoneNumber,
    email,
    password,
    avatar:
      "https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg",
  });
  sendToken(user, 201, res);
});

export const loginUser = catchAsyncErrors(async function (req, res, next) {
  const { identifier, password } = req.body;
  // console.log("reg.body", req.body);
  if (!identifier || !password)
    return next(new errorHandler(`All fields are required`, 400));

  const user =
    (await userModel.findOne({ email: identifier }).select(`+password`)) ||
    (await userModel.findOne({ userName: identifier }).select(`+password`));

  if (!user) return next(new errorHandler(`User does not exist`, 404));

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new errorHandler(`Invalid Credetials`, 401));
  }

  sendToken(user, 201, res);
});
