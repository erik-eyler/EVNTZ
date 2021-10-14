import { useParams, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import EventForm from "../../components/EventForm/EventForm";
import { getEvent, updateEvent } from "../../services/events";
import Layout from "../../components/Layout/Layout";

const EventEdit = (props) => {
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

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      const event = await getEvent(id);
      setEvent(event);
    };
    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await updateEvent(id, event);
    setUpdated(updated);
  };
  if (isUpdated) {
    return <Redirect to={`/events/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div>
        <EventForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          event={event}
          setEvent={setEvent}
        />
      </div>
    </Layout>
  );
};

export default EventEdit;
