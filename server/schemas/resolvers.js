const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    books: async () => {
      return await Book.find({});
    },
    orders: async () => {
      return await Order.find({});
    },
  },
};

module.exports = resolvers;
