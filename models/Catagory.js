const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    //category title
    title: {
      type: String,
      trim: true,
      required: true,
    },
    slug: {
        type: String,
      },
    //category is draft or not
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;