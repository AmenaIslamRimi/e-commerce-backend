const Order = require("../models/Order");

// get all order
const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find();
    //   get count of all orders
    const count = orders.length;
    res.status(200).json({
      status: "success",
      data: orders,
      count,
    });
  } catch (error) {
    res.status(500).json({ message: error });
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
    res.status(500).json({ message: error });
  }
};

// export all functions
module.exports = {
  getAllOrder,
  getSingleOrder,
};
