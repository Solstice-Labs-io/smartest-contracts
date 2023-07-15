const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  code: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  publisher: {
    type: String,
  },
  review: {
    type: [],
  },
});

module.exports = mongoose.model("UserData", userSchema);
