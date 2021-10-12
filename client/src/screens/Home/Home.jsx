import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import EventCard from "../../components/EventCard/EventCard";
import { getEvents } from "../../services/events";

const Home = (props) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      setEvents(events);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  const branding = [
    { title: "Sights", description: "Lights, Camera, Action! Enjoy family friendly films in the park during the spring and summer months. Love activities? We have plenty of those as well! Join your neighbors for crafts, scavenger hunts and seasonal pumpkin carving."},
    { title: "Sounds", description: "Music brings people together, and we have plenty of it! Check out our music events from summer concert series to the Newcastle Favorite Holiday Stroll featuring our own Newcastle Schools Music Department musicians from grade 4 - 12."},
    { title: "Service", description: "Love Newcastle? Volunteer! We regularly post community volunteer opportunties in partnership with beloved Newcastle organziations such as the Newcastle Pantry as well as school groups and individual organizers."}
  ]

  const displayBranding =  branding.map((item, index) => {
    return (
      <div key={index}>
        <h3 className="heading">{item.title}</h3>
        <p className="description">{item.description}</p>
      </div>
    )
  })

  const cards = events.map((event, index) => index < 4 ? 
    <EventCard
      key={index}
      id={event._id}
      title={event.title}
      date={event.date}
      startTime={event.startTime}
      endTime={event.endTime}
      img={event.imgUrl}
    /> : null)

  if (loading) <div>Loading...</div>;

  return (
    <Layout user={props.user}>
      <div>
        <div>
          <div className="hero-text">
            <h1>Connection, Community</h1>
            <p>
              Join neighbors, family and friends at one of our fun and engaging
              events for the residents of Newcastle, NJ.
            </p>
            <Link to="/events">
              <button className="view-events">View Events</button>
            </Link>
          </div>
          <div className="hero-img">
            <img
              src="https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
              alt="90s Dance Party by Samantha Gades on Unsplash"
            />
          </div>
        </div>
        <hr />
        <div>{displayBranding}</div>
        <hr />
        <h4>Upcoming Events</h4>
        <div>{cards}</div>
      </div>
    </Layout>
  );
};

export default Home;
