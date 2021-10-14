import "../EventForm/EventForm.css";
import { useState } from "react";
import Button from "../Button/Button";

const EventForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("https://images.unsplash.com/photo-1621112904887-419379ce6824?ixid=MnwxMjA3fDB8MHxwaG90[…]GVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80");

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
    <div className="div">
      
      <div className="event-img">
        <h2 className="event-header">{props.header}</h2>
        {loading ? (
          <h2>Loading Image...</h2>
        ) : (
          <img className="image-of-event" src={image} />
        )}
      </div>

      <div className="form-container">
        <form onSubmit={props.handleSubmit}>
          
            <div className="title">
              <div className="form-label">TITLE</div>
              <input
                className="title-input form-input"
                placeholder="title"
                name="title"
                value={props.event.title}
                onChange={props.handleChange}
              />
            </div>
        

            <div className="date-time">
              <div className="date">
                <label className="form-label">DATE</label>
                <input
                  className="date-input form-input"
                  type="date"
                  min="2021-10-13"
                  placeholder="MM/DD/YYYY"
                  name="date"
                  value={props.event.date}
                  onChange={props.handleChange}
                />
              </div>
            
              <div className="start-time">
                <label className="form-label">START TME</label>
                <input
                  className="start-input form-input"
                  type="time"
                  placeholder="--"
                  name="startTime"
                  value={props.event.startTime}
                  onChange={props.handleChange}
                />
              </div>

              <div className="end-time">
                <label className="form-label">END TIME</label>
                <input
                  className="end-input form-input"
                  type="time"
                  placeholder="--"
                  name="endTime"
                  value={props.event.endTime}
                  onChange={props.handleChange}
                />
              
              </div>
            </div>
        

            
              <div className="age-cost">
                <div className="age">
                  <label className="form-label">AGE GROUP</label>
                  <select
                    className="age-input form-input"
                    placeholder="Select Age Group"
                    name="ageGroup"
                    value={props.event.ageGroup}
                    onChange={props.handleChange}
                  >
                    <option value="All Ages">All Ages</option>
                    <option value="16 and over">16 and Over</option>
                    <option value="18 and over">18 and Over</option>
                  </select>
                </div>
        

                <div className="cost">
                  <label className="form-label">COST</label>
                  <input
                    className="cost-input form-input"
                    placeholder="-$-"
                    name="cost"
                    value={props.event.cost}
                    onChange={props.handleChange}
                  />
                </div>
              </div>
        
            

            <div className="location">
              <label className="form-label">LOCATION: </label>
              <input
                className="location-input form-input"
                placeholder="location"
                name="location"
                value={props.event.location}
                onChange={props.handleChange}
              />
            </div>
        

            <div className="details">
              <label className="form-label">DETAILS: </label>
              <input
                className="details-input form-input"
                placeholder="Event Details"
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
          <label 
            className="cloud-upload" 
          />
           <br /> 
        
          <Button className="submit-button" name="Submit" />
        </form>
      </div>
    </div>
  );
};

export default EventForm;
