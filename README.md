# Project Overview

## Project Name

EVNTZ

## Project Description

A web app for community events in the fictional town of Newcastle, NJ. Users can browse upcoming events which display key logistical information, including date, time, location, cost, and a short description of the event. Users can also create and edit their own events.

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
  ageGroup: {type: String, enum: ["All Ages", "18 and over", "16 and over"]
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

Link to the wireframe: <https://www.figma.com/file/wiRCNxKLVouK9VibK3z5ZU/EVNTZ>

## Component Hierarchy

Link to the component heirarchy: <https://whimsical.com/evntz-component-hierarchy-TGszLt3TnKHoNKrdniLCwW>

### Team Expectations

Link to the team expectations: <https://docs.google.com/document/d/1yet1_8v38YgrfXC9uqyPF_FOblKqw2sE8zhobY-SUG8/edit>

#### MVP

Link to the GitHub Projects board: <https://github.com/erik-eyler/EVNTZ/projects/1>
