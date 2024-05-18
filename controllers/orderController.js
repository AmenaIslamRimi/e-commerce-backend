const Order = require("../models/Order");

// get all order
const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate({
        path: "user",
        select: "name",
      })
      .populate({
        path: "product",
        select: "productName",
      });
    //   get count of all orders
    const count = orders.length;
    res.status(200).json({
      status: "success",
      data: orders,
      count,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get single order
const getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create order
const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({
      status: "success",
      data: order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update order by id
const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete order by id
const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export all functions
module.exports = {
  getAllOrder,
  getSingleOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
