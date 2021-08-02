const seedUsers = require("./user-seeds");
//ADD OTHER SEED REQUIRE CONSTS

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  //ADD OTHER SEED FUNCTIONS

  process.exit(0);
};

seedAll();
