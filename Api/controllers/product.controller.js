const PRODUCT_MODEL = require("../models/product.model");
const createProduct = async (req, res) => {
  const { name, price, Image, catagories, Quantity } = req.body;
  try {
    const product = await PRODUCT_MODEL.create({
      name,
      price,
      Image,
      catagories,
      Quantity,
    });
    res.status(200).json({
      success: true,
      message: "new product created",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.name,
      message: error.message,
    });
  }
};

const findProduct = async (req, res) => {
  const { name } = req.body;
  try {
    const users = await PRODUCT_MODEL.find({
      name,
    });
    res.status(200).json({
      success: true,
      message: "product found",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.name,
      message: error.message,
    });
  }
};
const deletProduct = async (req, res) => {
  const { name } = req.body;
  try {
    const users = await PRODUCT_MODEL.deleteOne({
      name: name,
    });
    res.status(200).json({
      success: true,
      message: "user created",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.name,
      message: error.message,
    });
  }
};
const UpdateProduct = async (req, res) => {
  const { name, price, Quantity, Image, catagories } = req.body;
  try {
    const user = await PRODUCT_MODEL.findOneAndUpdate(
      { name: name },
      { price: price },
      { Quantity: Quantity },
      { Image: Image },
      { catagories: catagories },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "new product created",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.name,
      message: error.message,
    });
  }
};
const findAllProduct = async (req,res) => {
  try {
    const products = await PRODUCT_MODEL.find({});
    res.status(200).json({
      success: true,
      message: "product found",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.name,
      message: error.message,
    });
  }
};



module.exports = {
  findProduct,
  deletProduct,
  createProduct,
  UpdateProduct,
  findAllProduct,
};
