import db from "../db/connection.js"
import Product from "../models/event.js"
import User from "../models/user.js"
import bcrypt from "bcrypt"

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const user1 = new User({
    firstName: "Ashanti",
    lastName: "Goldberg",
    username: "AsGoodAsGold22",
    email: "ashanti@super.gmail.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssw0Rd55!", 11)
  })
  await user1.save()

  const user2 = new User({
    firstName: "Simu",
    lastName: "Zhao",
    username: "FlyGuy67",
    email: "s.zhao@super.gmail.com",
    password_digest: await bcrypt.hash("!$h0pp3R1", 11)
  })
  await user2.save()

  const user3 = new User({
    firstName: "Kent",
    lastName: "Walker",
    username: "Walkman8962",
    email: "walkmank@super.gmail.com",
    password_digest: await bcrypt.hash("!$eller4Lif3", 11)
  })
  await user3.save()

  const user4 = new User({
    firstName: "Sandra",
    lastName: "Juarez",
    username: "SuperSandyJ",
    email: "s.juarez@super.gmail.com",
    password_digest: await bcrypt.hash("L0v32!p4int", 11)
  })
  await user4.save()

  // products data that we want inserted into database
  const products = [
    {
      date: "10/21/2021",
      startTime: "6pm",
      endTime: "8pm",
      location: "Town Green",
      title: "Live Music on the Green",
      cost: "Free",
      details: "Join us for a night of live music on the green featuring the Lorem Ipsums with opening act Malicious Javascript. All ages welcome and the event is free. Refreshments will be available to purchase with proceeds going to the Newcastle Music Boosters",
      ageGroup: "All Ages",
      imgUrl: "https://images.unsplash.com/photo-1472653431158-6364773b2a56"
    },
    {
      date: "10/23/2021",
      startTime: "12pm",
      endTime: "1:30pm",
      location: "Edwin Walters Park",
      title: "Newcastle Pantry",
      cost: "Free",
      details: "Volunteer with the team from Newcastle Pantry to serve hot meals to those in need in the Newcastle community. Set-up begins at 11am with clean-up directly following the event at 1:30pm. Volunteers must be 16 and over and adhere to food safety standards while working",
      ageGroup: "16 and over",
      imgUrl: "https://images.unsplash.com/photo-1561394496-8c1d15076c5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
    },
    {
      date: "10/24/2021",
      startTime: "2pm",
      endTime: "3:30pm",
      location: "Limitless Park",
      title: "Movies in the Park",
      cost: "Free",
      details: "Join kids of all ages to celebrate the spooky halloween season with the animated Addams Family. We welcome you to bring your favorite movie snacks and refreshments and enjoy our final outdoor screening of the year.",
      ageGroup: "All Ages",
      imgUrl: "https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2409&q=80"
    },
    {
      date: "Pumpkin Carving",
      startTime: "3pm",
      endTime: "7pm",
      location: "Limitless Park",
      title: "Pumpkin Carving",
      cost: "$5",
      details: "Bring the family down to Limitless Park for our annual pumpkin carving! Pumpkins are provided for a donation of $5 each benefitting the Newcastle Pantry. Carving supplies and paints will be provided for kids of all ages.",
      ageGroup: "All Ages",
      imgUrl: "https://images.unsplash.com/photo-1541695474851-f12cb89442fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    },
    {
      date: "10/21/2021",
      startTime: "6pm",
      endTime: "8pm",
      location: "Town Green",
      title: "Live Music on the Green",
      cost: "Free",
      headline: "Featuring the Lorem Ipsums",
      details: "Join us for a night of live music on the green featuring the Lorem Ipsums with opening act Malicious Javascript. All ages welcome and the event is free. Refreshments will be available to purchase with proceeds going to the Newcastle Music Boosters",
      ageGroup: "All Ages",
      imgUrl: "https://images.unsplash.com/photo-1472653431158-6364773b2a56"
    },
    {
      date: "10/23/2021",
      startTime: "12pm",
      endTime: "1:30pm",
      location: "Edwin Walters Park",
      title: "Newcastle Pantry",
      cost: "Free",
      details: "Volunteer with the team from Newcastle Pantry to serve hot meals to those in need in the Newcastle community. Set-up begins at 11am with clean-up directly following the event at 1:30pm. Volunteers must be 16 and over and adhere to food safety standards while working",
      ageGroup: "16 and over",
      imgUrl: "https://images.unsplash.com/photo-1561394496-8c1d15076c5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
    },
    {
      date: "10/24/2021",
      startTime: "2pm",
      endTime: "3:30pm",
      location: "Limitless Park",
      title: "Movies in the Park",
      cost: "Free",
      details: "Join kids of all ages to celebrate the spooky halloween season with the animated Addams Family. We welcome you to bring your favorite movie snacks and refreshments and enjoy our final outdoor screening of the year.",
      ageGroup: "All Ages",
      imgUrl: "https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2409&q=80"
    },
    {
      date: "Pumpkin Carving",
      startTime: "3pm",
      endTime: "7pm",
      location: "Limitless Park",
      title: "Pumpkin Carving",
      cost: "$5",
      details: "Bring the family down to Limitless Park for our annual pumpkin carving! Pumpkins are provided for a donation of $5 each benefitting the Newcastle Pantry. Carving supplies and paints will be provided for kids of all ages.",
      ageGroup: "All Ages",
      imgUrl: "https://images.unsplash.com/photo-1541695474851-f12cb89442fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    },
    {
      date: "10/21/2021",
      startTime: "6pm",
      endTime: "8pm",
      location: "Town Green",
      title: "Live Music on the Green",
      cost: "Free",
      details: "Join us for a night of live music on the green featuring the Lorem Ipsums with opening act Malicious Javascript. All ages welcome and the event is free. Refreshments will be available to purchase with proceeds going to the Newcastle Music Boosters",
      ageGroup: "All Ages",
      imgUrl: "https://images.unsplash.com/photo-1472653431158-6364773b2a56"
    },
    {
      date: "10/23/2021",
      startTime: "12pm",
      endTime: "1:30pm",
      location: "Edwin Walters Park",
      title: "Newcastle Pantry",
      cost: "Free",
      details: "Volunteer with the team from Newcastle Pantry to serve hot meals to those in need in the Newcastle community. Set-up begins at 11am with clean-up directly following the event at 1:30pm. Volunteers must be 16 and over and adhere to food safety standards while working",
      ageGroup: "16 and over",
      imgUrl: "https://images.unsplash.com/photo-1561394496-8c1d15076c5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
    },
    {
      date: "10/24/2021",
      startTime: "2pm",
      endTime: "3:30pm",
      location: "Limitless Park",
      title: "Movies in the Park",
      cost: "Free",
      details: "Join kids of all ages to celebrate the spooky halloween season with the animated Addams Family. We welcome you to bring your favorite movie snacks and refreshments and enjoy our final outdoor screening of the year.",
      ageGroup: "All Ages",
      imgUrl: "https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2409&q=80"
    },
    {
      date: "Pumpkin Carving",
      startTime: "3pm",
      endTime: "7pm",
      location: "Limitless Park",
      title: "Pumpkin Carving",
      cost: "$5",
      details: "Bring the family down to Limitless Park for our annual pumpkin carving! Pumpkins are provided for a donation of $5 each benefitting the Newcastle Pantry. Carving supplies and paints will be provided for kids of all ages.",
      ageGroup: "All Ages",
      imgUrl: "https://images.unsplash.com/photo-1541695474851-f12cb89442fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    },
    {
      date: "10/21/2021",
      startTime: "6pm",
      endTime: "8pm",
      location: "Town Green",
      title: "Live Music on the Green",
      cost: "Free",
      details: "Join us for a night of live music on the green featuring the Lorem Ipsums with opening act Malicious Javascript. All ages welcome and the event is free. Refreshments will be available to purchase with proceeds going to the Newcastle Music Boosters",
      ageGroup: "All Ages",
      imgUrl: "https://images.unsplash.com/photo-1472653431158-6364773b2a56"
    },
    {
      date: "10/23/2021",
      startTime: "12pm",
      endTime: "1:30pm",
      location: "Edwin Walters Park",
      title: "Newcastle Pantry",
      cost: "Free",
      details: "Volunteer with the team from Newcastle Pantry to serve hot meals to those in need in the Newcastle community. Set-up begins at 11am with clean-up directly following the event at 1:30pm. Volunteers must be 16 and over and adhere to food safety standards while working",
      ageGroup: "16 and over",
      imgUrl: "https://images.unsplash.com/photo-1561394496-8c1d15076c5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
    },
    {
      date: "10/24/2021",
      startTime: "2pm",
      endTime: "3:30pm",
      location: "Limitless Park",
      title: "Movies in the Park",
      cost: "Free",
      details: "Join kids of all ages to celebrate the spooky halloween season with the animated Addams Family. We welcome you to bring your favorite movie snacks and refreshments and enjoy our final outdoor screening of the year.",
      ageGroup: "All Ages",
      imgUrl: "https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2409&q=80"
    },
    {
      date: "Pumpkin Carving",
      startTime: "3pm",
      endTime: "7pm",
      location: "Limitless Park",
      title: "Pumpkin Carving",
      cost: "$5",
      details: "Bring the family down to Limitless Park for our annual pumpkin carving! Pumpkins are provided for a donation of $5 each benefitting the Newcastle Pantry. Carving supplies and paints will be provided for kids of all ages.",
      ageGroup: "All Ages",
      imgUrl: "https://images.unsplash.com/photo-1541695474851-f12cb89442fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    },
  ]

    // insert products into database
    await Product.insertMany(products)
    console.log("Created users & products!")
  
    // close database connection. done.
    db.close()
  }
  
  insertData()
