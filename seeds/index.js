const seedUsers = require("./seedUsers");
//ADD OTHER SEED REQUIRE CONSTS
const seedBlogs = require("./seedBlogs");
const seedComments = require("./seedComments");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  //ADD OTHER SEED FUNCTIONS
  await seedBlogs();
  console.log("\n----- BLOGS SEEDED -----\n");

  await seedComments();
  console.log("\n----- COMMENTS SEEDED -----\n");

  process.exit(0);
};

seedAll();
