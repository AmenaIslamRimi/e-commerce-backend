const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../envSetup");

// register user
const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user already exist
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        status: "fail",
        message: "User already exist",
      });
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // spread other properties from req.body and add hashedPassword to it
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    res.status(201).json({
      status: "success",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user exist
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "User not found",
      });
    }
    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid credentials",
      });
    }
    // generate token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "1d",
    });
    // update user token
    if (token) {
      user.token = token;
      await user.save();
    }
    res.status(200).json({
      status: "success",
      data: { user, token },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
};
