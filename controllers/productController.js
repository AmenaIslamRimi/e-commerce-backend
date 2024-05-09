const Order = require("../models/Product");

// get all product
const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    //   get count of all products
    const count = products.length;
    res.status(200).json({
      status: "success",
      data: products,
      count,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// get single product
const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//create product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// export all functions
module.exports = {
  getAllProduct,
  getSingleProduct,
  createProduct,
};
