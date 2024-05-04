const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubCategorySchema = new Schema(
  {
     //Sub category title
     title: {
        type: String,
        trim: true,
        required: true,
      },
      slug: {
          type: String,
        },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    //SubCategory is draft or not
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SubCategory = mongoose.model("SubCategory", SubCategorySchema);
module.exports = SubCategory;