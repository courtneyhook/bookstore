const { User } = require("../models");
const { populate } = require("../models/User");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("orders").populate({
        path: "orders",
        populate: "books",
      });
    },
    books: async () => {
      return await Book.find({});
    },
    orders: async () => {
      return await Order.find({}).populate("users").populate("books");
    },
    user: async (parent, args) => {
      return await User.findById(args.id).populate("orders").populate({
        path: "orders",
        populate: "books",
      });
    },
  },
};

module.exports = resolvers;
