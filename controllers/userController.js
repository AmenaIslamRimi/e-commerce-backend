const user = require("../models/userModel");

// get all user
const getAllUser = async (req, res) => {
  try {
    const users = await user.find();
    //   get count of all users
    const count = users.length;
    res.status(200).json({
      status: "success",
      data: users,
      count,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get single user by id
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUser,
  getSingleUser,
};
