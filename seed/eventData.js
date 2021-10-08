import db from "../db/connection.js";
import Event from "../models/event.js";
import faker from "faker";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // create an array of 40 objects
  // use faker package to generate fake data
  const events = [...Array(40)].map((item) => {
    return {
      date: faker.date.soon(),
      startTime: faker.time.recent(),
      endTime: faker.time.recent(),
      location: faker.address.cityName(),
      title: faker.lorem.word(),
      cost: faker.datatype.float(),
      details: faker.lorem.paragraph(),
      // ageGroup: {
      //   type: String,
      //   enum: ["All Ages", "18 and over", "16 and over"],
      //   required: true,
      // },
    };
  });
  await Event.insertMany(events);
  console.log("Created events!");

  // close database connection. done.
  db.close();
};

insertData();
