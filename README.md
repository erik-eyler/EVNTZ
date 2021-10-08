# Project Overview

## Project Name

EVNTZ


## Project Description

EVNTZ is a web app for community events in the fictional town of Newcastle, NJ. Users are able to create their own account which is stored with industry standard JWT authentication methods. Users are then able to log in at any time and view the list of events, and also view full event details which include date and time, location, cost, age group and event specific directions and requirements. Users are also able to edit existing events, delete events and add their own to expand the opportunties for our fictional community to come together and connect. 

## Schema

Events Schema
```javascript
{
  date: {type: String, required: true},
  startTime: {type: String, required: true},
  endTime: {type: String, required: true},
  location: {type: String, required: true},
  title: {type: String, required: true},
  cost: {type: Integer, required: false},
  details: {type: String, required: true},
  ageGroup: {type: String, enum: ["All Ages", "18 and over", "16 and over"], required: true}
}
```

User Schema
```javascript
{
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}
}
```

## Wireframes

![Home](https://github.com/erik-eyler/EVNTZ/blob/kbg-dev/Images/Home%20(1).png)
![Event Details](https://github.com/erik-eyler/EVNTZ/blob/kbg-dev/Images/Event%20Details.png)
![Create Event](https://github.com/erik-eyler/EVNTZ/blob/kbg-dev/Images/Create%20Event%20(1).png)
![Login](https://github.com/erik-eyler/EVNTZ/blob/kbg-dev/Images/Log%20in.png)


## Component Hierarchy
![Component Hierarchy](https://github.com/erik-eyler/EVNTZ/blob/kbg-dev/Images/EVNTZ%20-%20Component%20Hierarchy.png)

### Team Expectations

[Team Expectations](https://docs.google.com/document/d/1yet1_8v38YgrfXC9uqyPF_FOblKqw2sE8zhobY-SUG8/edit)

#### MVP

[GitHub Projects](https://github.com/erik-eyler/EVNTZ/projects/1)

