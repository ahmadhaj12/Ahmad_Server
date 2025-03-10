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
      success: !!users,
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
  const { password, phone } = req.body;
  console.log(password);

  try {
    const user = await USER_MODEL.findOne({
      password,
      phone,
    });
    res.status(200).json({
      success: user ? true : false,
      user: user,
      message: user ? "success" : "not found",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
      message: err.message,
    });
  }
};
const UpdateUser = async (req, res) => {
  const { phone, password, userName } = req.body;
  try {
    const user = await USER_MODEL.findOneAndUpdate(
      { phone: phone },
      { password: password, userName },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "user updted!",
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
