import db from "../db/connection.js";
import User from "../models/user.js";
import faker from "faker";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // create an array of 40 objects
  // use faker package to generate fake data
  const users = [...Array(10)].map((item) => {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password_digest: faker.internet.password(),
    };
  });
  await User.insertMany(users);
  console.log("Created users!");

  // close database connection. done.
  db.close();
};

insertData();
