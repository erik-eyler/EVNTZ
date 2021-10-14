import { createEvent } from "../../services/events";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import EventForm from "../../components/EventForm/EventForm";
import Layout from "../../components/Layout/Layout";

const EventCreate = () => {
  const history = useHistory();

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

  return (
    <Layout>
      <EventForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        event={event}
        setEvent={setEvent}
      />
    </Layout>
  );
};

export default EventCreate;
