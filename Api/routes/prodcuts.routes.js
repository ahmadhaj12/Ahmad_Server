const { Router } = require("express");
const { createProduct, findProduct, deletProduct, UpdateProduct } = require("../controllers/product.controller");

const productRouter = Router();


productRouter.post("/createProduct",createProduct);
productRouter.post("findProduct/",findProduct);
productRouter.post("/deletProduct",deletProduct);
productRouter.post("/UpdateProduct",UpdateProduct);

module.exports = productRouter
