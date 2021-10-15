import "./EventCard.css";
import { Link } from "react-router-dom";
import { reformatDate } from "../../utils/date";
import { reformatTime } from "../../utils/time"

const EventCard = (props) => {

  const formatDate = reformatDate(props.date);
  const startTime = reformatTime(props.startTime);
  const endTime = reformatTime(props.endTime);

  return (
    <div className="event-card">
      <Link className="card" to={`/events/${props.id}`}>
        <div className="event-card-image-container">
          <img src={props.img} alt={props.title} className="event-card-image" />
        </div>
        <div className="event-info-container">
          <p className="event-card-title">{props.title}</p>
          <p className="event-card-date">{formatDate}</p>
          <p className="event-card-time">
            {startTime} - {endTime}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
