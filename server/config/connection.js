const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "momgodb://127.0.0.1:27017/bookstore"
);

module.exports = mongoose.connection;
