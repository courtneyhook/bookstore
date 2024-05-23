const { User, Book, Order } = require("../models");
const { populate } = require("../models/User");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
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
  Mutation: {
    addBook: async (
      parent,
      { image, title, author, genre, price, quantity }
    ) => {
      return await Book.create({
        image,
        title,
        author,
        genre,
        price,
        quantity,
      });
    },

    addUser: async (parent, { first_name, last_name, username, email }) => {
      return await User.create({ first_name, last_name, username, email });
    },
  },
};

module.exports = resolvers;
