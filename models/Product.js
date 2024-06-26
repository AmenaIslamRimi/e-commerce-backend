const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    sku: {
      type: String,
      trim: true,
      required: true,
    },
    slug: {
      type: String,
    },
    productName: {
      type: String,
      required: true,
    },
    purchasePrice: {
      type: Number,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
    },
    //variant is dynamic and quantity is depending on color
    variant: [
      {
        color: {
          type: String,
          required: true,
        },
        stock: {
          type: Number,
          required: true,
        },
        imgUrl: [
          {
            type: String,
          },
        ],
      },
    ],
    size: [{ type: String }],

    description: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
    },
  
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
