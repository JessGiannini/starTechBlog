const { User } = require("../models");

const userData = [
  {
    user: "Rick Sanchez",
    email: "email1@email.com",
    pw: "password1",
  },
  {
    user: "Morty Smith",
    email: "email2@email.com",
    pw: "password2",
  },
  {
    user: "Beth Smith",
    email: "email3@email.com",
    pw: "password3",
  },
  {
    user: "Jerry Smith",
    email: "email4@email.com",
    pw: "password4",
  },
  {
    user: "Summer Smith",
    email: "email5@email.com",
    pw: "password5",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
