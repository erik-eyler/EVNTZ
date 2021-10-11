import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import EventCard from "../../components/EventCard/EventCard";
import { getEvents } from "../../services/events";



const Events = () => {
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
    <Layout>
      <div>
        {cards}
      </div>
    </Layout>
  )
}

export default Events
