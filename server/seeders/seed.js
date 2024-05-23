const db = require("../config/connection");
const { User, Book } = require("../models");
const userSeeds = require("./userSeeds");
const bookSeeds = require("./bookSeeds");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("User", "users");
    await cleanDB("Book", "books");

    await User.insertMany(userSeeds);

    await Book.insertMany(bookSeeds);

    process.exit(0);
  } catch (error) {
    throw error;
  }
});
