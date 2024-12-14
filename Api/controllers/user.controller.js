const USER_MODEL = require("../models/user.model");

const createUser = async (req, res) => {
  const { userName, email, phone, password, orderHistory } = req.body;
  try {
    const user = await USER_MODEL.create({
      userName: userName,
      email: email,
      phone: phone,
      password: password,
      orderHistory: orderHistory,
    });

    res.status(200).json({
      success: true,
      message: "user created",
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

const findUser = async (req, res) => {
  const { userName } = req.body;
  try {
    const users = await USER_MODEL.find({
      userName: userName,
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
const deletUser = async (req, res) => {
  const { userName } = req.body;
  try {
    const users = await USER_MODEL.deleteOne({
      userName: userName,
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
const login = async (req, res) => {
  const { password, userName, phone } = req.body;
  try {
    const user = await USER_MODEL.findOne({
      phone,
    });
  } catch (err) {
    res.status(500).json({
      success: true,
      error: err,
      message: error.message,
    });
  }
};
const UpdateUser = async (req, res) => {
  const { phone, password } = req.body;
  try {
    const user = await USER_MODEL.findOneAndUpdate(
      { phone: phone },
      { password: password },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "user created",
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

module.exports = {
  findUser,
  login,
  deletUser,
  createUser,
  UpdateUser,
};
