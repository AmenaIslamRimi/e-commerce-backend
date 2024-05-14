const User = require("../models/User");

// get all user
const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
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

// update user by id
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete user by id
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
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
  updateUser,
  deleteUser,
};
