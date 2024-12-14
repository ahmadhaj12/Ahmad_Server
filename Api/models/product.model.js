const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  Quantity: {
    type: Number,
    default: 1,
  },

  Image: {
    type: String,
    required: true,
  },
  catagories: {
    type: String,
    required: true,
  },
});

const PRODUCT_MODEL = model("product", productSchema);
module.exports = PRODUCT_MODEL;