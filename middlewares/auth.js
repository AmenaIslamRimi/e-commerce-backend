const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../envSetup");

// protect middleware to check if user is logged in or not using jwt token in headers and verify it using jwt.verify
// jwt.verify will throw an error if token is invalid
// if token is valid, it will decode the token and get user id
// const, let and var are used to declare variables in javascript
// const is block scoped and cannot be reassigned
// let is block scoped and can be reassigned
// var is function scoped and can be reassigned
// block scope is the area within if, switch conditions or for and while loops
// function scope is the area within the function
const auth = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      throw new Error("You are not authorized to access this route");
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      throw new Error("No user found with this id");
    }

    req.user = user;
    next();

  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

module.exports = auth;
