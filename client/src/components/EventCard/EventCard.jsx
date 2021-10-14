import './EventCard.css';
import { Link } from 'react-router-dom';


const EventCard = (props) => {
 
  return (
    <div className="event-card">
      <Link className="card" to={`/events/${props.id}`}>
        <img src={props.img} alt={props.title} className="event-card-image" />
        <div className="event-info-container">
          <p className="event-card-title">{props.title}</p>
          <p className="event-card-date">{props.date}</p>
          <p className="event-card-time">{props.startTime} - {props.endTime}</p>
        </div>
      </Link>
    </div>
  )
}

export default EventCard
