const Product = require("../models/Product");

const slugify = require("slugify");
const { generateSKU } = require("../utils");

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
    res.status(500).json({ message: error.message });
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
    res.status(500).json({ message: error.message });
  }
};

//create product
const createProduct = async (req, res) => {
  try {
    // generate sku
    const sku = generateSKU(6);
    // generate slug
    const slug = slugify(req.body.productName, {
      lower: true,
      strict: true,
      replacement: "-",
    });

    const product = await Product.create({ ...req.body, sku, slug });
    if (!product) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid data",
      });
    }
    res.status(201).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export all functions
module.exports = {
  getAllProduct,
  getSingleProduct,
  createProduct,
};
