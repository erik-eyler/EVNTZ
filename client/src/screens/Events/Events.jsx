import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import EventCard from "../../components/EventCard/EventCard";
import { getEvents } from "../../services/events";
import './Events.css'


const Events = (props) => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      setEvents(events);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  const cards = events.map((event, index) =>
  
    <EventCard
    row={""}
    key={index}
    id={event._id}
    title={event.title}
    date={event.date}
    startTime={event.startTime}
    endTime={event.endTime}
    img={event.imgUrl}
  />)

  if (loading) <div>Loading...</div>;

  return (
    <Layout user={props.user}>
      <div className="events-container">
        {cards}
      </div>
    </Layout>
  )
}

export default Events
