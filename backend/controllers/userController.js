//const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler.js");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");
const sendToken = require("../utils/jwttoken.js");
const User = require("../models/userModel.js");

const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, username } = req.body;
  const user = await User.create({
    name,
    username,
  });

  sendToken(user, 201, res);
});

//USER LOGIN
const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { name, username } = req.body;
  //checking if user has give both email and password empty
  if (!name || !username) {
    return next(new ErrorHandler("Please Enter Name and Username", 400));
  }

  const user = await User.findOne({ username });

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  sendToken(user, 200, res);
});

const coinsUpdate = catchAsyncErrors(async (req, res) => {
  console.log("req.body: ", req.body);
  const newLeadCoins = {
    leadCoins: Number(req.body.leadcoins),
    netcoins: Number(req.user.netcoins),
    user: req.user.id,
    grosscoins: req.user.grosscoins,
  };
  newLeadCoins.leadCoins = newLeadCoins.netcoins;
  newLeadCoins.netcoins += 100;
  newLeadCoins.grosscoins += newLeadCoins.netcoins;

  console.log(newLeadCoins);
  const user = await User.findByIdAndUpdate(req.user._id, newLeadCoins, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  console.log("user:", user);

  if (!user) {
    return next(new ErrorHandler("No user found", 400));
  }

  return res.status(201).json({
    success: true,
    newLeadCoins,
    user,
  });
});

//USER LOGOUT
const logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

module.exports = {
  registerUser,
  loginUser,
  coinsUpdate,
  logoutUser,
};
