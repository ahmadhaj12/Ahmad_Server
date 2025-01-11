const { Router } = require("express");
const { createProduct, findProduct, deletProduct, UpdateProduct, findAllProduct } = require("../controllers/product.controller");

const productRouter = Router();


productRouter.post("/createProduct",createProduct);
productRouter.post("findProduct/",findProduct);
productRouter.post("/deletProduct",deletProduct);
productRouter.post("/UpdateProduct",UpdateProduct);
productRouter.post("/findAllProduct",findAllProduct);
module.exports = productRouter
