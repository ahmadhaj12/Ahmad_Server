// const express = require("express");
const { Router } = require("express");
const { createUser, findUser, deletUser, UpdateUser, login } = require("../controllers/user.controller");
const userRouter = Router();

userRouter.post("/createUser", createUser);
userRouter.post("/findUser" , findUser);
userRouter.post("/deletUser" , deletUser);
userRouter.post("/UpdateUser" , UpdateUser);
userRouter.post("/login" , login);


module.exports = userRouter;
