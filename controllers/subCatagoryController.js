const SubCatagory = require("../models/SubCatagory");

// get all subCatagory
const getAllSubCatagory = async (req, res) => {
  try {
    const subCatagories = await SubCatagory.find();
    //   get count of all subCatagories
    const count = subCatagories.length;
    res.status(200).json({
      status: "success",
      data: subCatagories,
      count,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get single subCatagory
const getSingleSubCatagory = async (req, res) => {
  try {
    const subCatagory = await SubCatagory.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: subCatagory,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create subCatagory
const createSubCatagory = async (req, res) => {
  try {
    const subCatagory = await SubCatagory.create(req.body);
    res.status(201).json({
      status: "success",
      data: subCatagory,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update subCatagory by id
const updateSubCatagory = async (req, res) => {
  try {
    const subCatagory = await SubCatagory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: subCatagory,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete subCatagory by id
const deleteSubCatagory = async (req, res) => {
  try {
    await SubCatagory.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllSubCatagory,
  getSingleSubCatagory,
  createSubCatagory,
  updateSubCatagory,
  deleteSubCatagory,
};
