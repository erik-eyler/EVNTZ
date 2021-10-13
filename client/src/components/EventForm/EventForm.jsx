import Layout from "../Layout/Layout";
import "../EventForm/EventForm.css";
import { useState } from "react";

const EventForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "testing");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dehiekpya/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <Layout>
      <div className="event-img">
        <h3>SUBMIT YOUR EVENT</h3>
        {loading ? <h2>Loading Image...</h2> : <img src={image} />}
      </div>
      <div className="form-container">
        <form onSubmit={props.handleSubmit}>
          <div className="form">
            <div className="title">
              <label>TITLE</label>
              <input
                className="title-input"
                placeholder="title"
                name="title"
                value={props.event.title}
                onChange={props.handleChange}
              />
            </div>
            <br />

            <div className="date-time">
              <label>DATE</label>
              <input
                className="date-input"
                type="date"
                min="2021-10-13"
                placeholder="MM/DD/YYYY"
                name="date"
                value={props.event.date}
                onChange={props.handleChange}
              />

              <label>START TME</label>
              <input
                className="start-input"
                type="time"
                placeholder="--"
                name="startTime"
                value={props.event.startTime}
                onChange={props.handleChange}
              />

              <label>END TIME</label>
              <input
                className="end-input"
                type="time"
                placeholder="--"
                name="endTime"
                value={props.event.endTime}
                onChange={props.handleChange}
              />
            </div>
            <br />

            <div className="age-cost">
              <label>AGE GROUP</label>
              <select
                className="age-input"
                placeholder="Select Age Group"
                name="ageGroup"
                value={props.event.ageGroup}
                onChange={props.handleChange}
              >
                <option value="All Ages">All Ages</option>
                <option value="16 and over">16 and Over</option>
                <option value="18 and over">18 and Over</option>
              </select>

              <label>COST</label>
              <input
                className="cost-input"
                placeholder="$-"
                name="cost"
                value={props.event.cost}
                onChange={props.handleChange}
              />
            </div>
            <br />

            <div className="location">
              <label>LOCATION: </label>
              <input
                className="location-input"
                placeholder="location"
                name="location"
                value={props.event.location}
                onChange={props.handleChange}
              />
            </div>
            <br />

            <div className="details">
              <label>DETAILS: </label>
              <input
                className="details-input"
                placeholder="event details"
                name="details"
                value={props.event.details}
                onChange={props.handleChange}
              />
            </div>
            <input
              className="file"
              type="file"
              accept="image/*"
              name="file"
              onChange={uploadImage}
            />
          </div>
          <br />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default EventForm;
