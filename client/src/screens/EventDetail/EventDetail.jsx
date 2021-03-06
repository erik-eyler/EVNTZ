import "./EventDetail.css";
import { useState, useEffect } from "react";
import { getEvent, deleteEvent } from "../../services/events";
import { useParams, Link, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import { reformatDate } from "../../utils/date";
import { reformatTime } from "../../utils/time"


const EventDetail = (props) => {
  const [event, setEvent] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const [deleted, setDeleted] = useState(false);
  const [formatDate, setFormatDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // const startTime = reformatTime(event?.startTime);
  // const endTime = reformatTime(event?.endTime);

  useEffect(() => {
    const fetchEvent = async () => {
      const event = await getEvent(id);
      setEvent(event);
      setFormatDate(reformatDate(`${event?.date}`))
      setStartTime(reformatTime(`${event?.startTime}`))
      setEndTime(reformatTime(`${event?.endTime}`))
      setLoaded(true);
    };
    fetchEvent();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const handleClick = async () => {
    const deleted = await deleteEvent(event._id);
    setDeleted({ deleted });
  };

  if (deleted) return <Redirect to={`/events`} />;

  return (
    <Layout user={props.user}>
      <div className="event-detail-wrapper">
        <div className="event-detail-container">
          <div className="image-container">
            <img
              className="event-detail-img"
              src={event?.imgUrl}
              alt={event?.title}
            />
          </div>

          <div className="event-detail-content">
            <h1 className="content-title">{event?.title}</h1>
            <div className="sub-container">
              <h4 className="content-bold">
                WHEN: <span className="content-regular">{formatDate}</span>
              </h4>
              <h4 className="content-bold">
                TIME:{" "}
                <span className="content-regular">{startTime}</span> -{" "}
                <span className="content-regular">{endTime}</span>
              </h4>
            </div>
            <div className="sub-container">
              <div className="content-bold">
                AGE GROUP:{" "}
                <span className="content-regular">{event?.ageGroup}</span>
              </div>
              <div className="content-bold">
                COST: <span className="content-regular">{event?.cost}</span>
              </div>
            </div>
            <div className="content-bold">
              LOCATION:{" "}
              <span className="content-regular">{event?.location}</span>
            </div>
            <div className="content-bold">
              DETAILS: <span className="content-regular">{event?.details}</span>
            </div>
            <div className="button-container">
              <Link to={`/events/${event?._id}/edit`}>
                <Button name={"Edit Event"} className="update-button"></Button>
              </Link>
              <div className="event-detail-button">
              <Button
                name={"Delete Event"}
                className="update-button"
                handleClick={handleClick}
              ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
