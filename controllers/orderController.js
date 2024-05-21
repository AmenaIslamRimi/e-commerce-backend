const Order = require("../models/Order");
// create transaction id for order

const createTransactionId = (length) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

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
    res.status(500).json({ message: error.message });
  }
};

// get single order
const getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate({
        path: "user",
        select: "fullName email phone imageUrl role",
      })
      .populate({
        path: "products.product",
        select:
          "productName purchasePrice salePrice variant size description category subCategory status",
      });
    const testData = order.products.map((product) => {
      return product.product.variant.map((variant) => {
        return variant.imgUrl.map((x) => {
          return x;
        });
      });
    })[0][0][1];

    res.status(200).json({
      status: "success",
      data: order,
      test: testData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create order
const createOrder = async (req, res) => {
  // update transaction id for order
  req.body.transactionId = createTransactionId(13);
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
