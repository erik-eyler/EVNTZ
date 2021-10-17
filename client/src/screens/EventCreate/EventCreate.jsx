import { createEvent } from "../../services/events";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import EventForm from "../../components/EventForm/EventForm";
import Layout from "../../components/Layout/Layout";
import "./EventCreate.css";

const EventCreate = (props) => {
  const [imageUrl, setImageUrl] = useState("");

  const [event, setEvent] = useState({
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    title: "",
    cost: "",
    details: "",
    ageGroup: "",
    imgUrl: "",
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
      setEvent({ ...event, [`imgUrl`]: `${imageUrl}`});
      const created = await createEvent(event);
      setIsCreated({ created });
      console.log(event);
  };

  if (isCreated) return <Redirect to={`/events`} />;

  return (
    <Layout user={props.user}>
      <div className="event-create-container">
        <EventForm
          header={"SUBMIT YOUR EVENT"}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          event={event}
          setImageUrl={setImageUrl}
          imageUrl={imageUrl}
        />
      </div>
    </Layout>
  );
};

export default EventCreate;
