const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  total: {
    type: Number,
    required: true,
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Order = model("Order", orderSchema);

module.exports = Order;
