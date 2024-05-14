const Catagory = require("../models/Catagory");

// get all catagory
const getAllCatagory = async (req, res) => {
  try {
    const catagories = await Catagory.find();
    //   get count of all catagories
    const count = catagories.length;
    res.status(200).json({
      status: "success",
      data: catagories,
      count,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get single catagory
const getSingleCatagory = async (req, res) => {
  try {
    const catagory = await Catagory.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: catagory,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create catagory
const createCatagory = async (req, res) => {
  try {
    const catagory = await Catagory.create(req.body);
    res.status(201).json({
      status: "success",
      data: catagory,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update catagory by id
const updateCatagory = async (req, res) => {
  try {
    const catagory = await Catagory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: catagory,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete catagory by id
const deleteCatagory = async (req, res) => {
  try {
    await Catagory.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCatagory,
  getSingleCatagory,
  createCatagory,
  updateCatagory,
  deleteCatagory,
};
