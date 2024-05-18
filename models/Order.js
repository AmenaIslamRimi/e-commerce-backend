const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    transactionId: { type: String },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    shippingMethod: {
      type: String,
      required: true,
    },
    shippingAddress: {
      street: { type: String, required: true, trim: true },
      city: { type: String, required: true, trim: true },
      state: { type: String, required: true, trim: true },
      country: { type: String, required: true, trim: true },
      zip: { type: String, required: true, trim: true },
      phoneNumber: {
        type: String,
        required: true,
        trim: true,
      },
    },
    remark: {
      type: String,
      trim: true,
    },
    subTotal: {
      type: Number,
      required: true,
    },
    shippingCharge: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    paymentStatus: {
      type: String,
      required: true,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    deliveryStatus: {
      type: String,
      required: true,
      enum: ["pending", "processing", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
