const db = require("../config/connection");
const { Profile } = require("../models");
const profileSeeds = require("./userSeeds");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Profile", "profiles");

    await Profile.create(profileSeeds);

    process.exit(0);
  } catch (error) {
    throw error;
  }
});
