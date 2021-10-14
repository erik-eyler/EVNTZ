import { createEvent } from "../../services/events";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import EventForm from "../../components/EventForm/EventForm";

const EventCreate = () => {
  const history = useHistory();
  // const [loading, setLoading] = useState(false);
  // const [image, setImage] = useState("");

  const [event, setEvent] = useState({
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    title: "",
    cost: "",
    details: "",
    ageGroup: "All Ages", //needs to be set to all ages by default(dropdown)
  });

  const [isCreated, setIsCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createEvent(event);
    setIsCreated({ created });
    history.push("/events");
  };

  // const uploadImage = async (e) => {
  //   const files = e.target.files;
  //   const data = new FormData();
  //   data.append("file", files[0]);
  //   data.append("upload_preset", "testing");
  //   setLoading(true);

  //   const res = await fetch(
  //     "https://api.cloudinary.com/v1_1/dehiekpya/image/upload",
  //     {
  //       method: "POST",
  //       body: data,
  //     }
  //   );

  //   const file = await res.json();
  //   setImage(file.secure_url);
  //   setLoading(false);
  // };

  return (
    <div>
      <EventForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        event={event}
        setEvent={setEvent}
      />
      {/* <div className="event-img">
        <div className="h3">SUBMIT YOUR EVENT</div>
        {loading ? (
          <h2>Loading Image...</h2>
        ) : (
          <img className="image-of-event" src={image} />
        )}
      </div> */}
    </div>
  );
};

export default EventCreate;
