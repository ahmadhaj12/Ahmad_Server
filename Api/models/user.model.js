const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    maxlength: 25,
    minlength: 5,
    split: " ",
  },

  email: {
    type: String,
    unique: true,
    split: " ",
  },

  phone: {
    type: String,
    required: true,
    unique: true,
    split: " ",
  },

  password: {
    type: String,
    required: true,
    maxlength: 12,
    minlength: 6,
    split: " ",
  },

  orderHistory: {
    type: Array,
    default: [],
  },
});

const USER_MODEL = model("user", userSchema);
module.exports = USER_MODEL;


