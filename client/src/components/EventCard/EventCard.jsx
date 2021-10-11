import './EventCard.css';
import { Link } from 'react-router-dom';


const EventCard = (props) => {
  return (
    <div className="event-card">
      <Link className="card" to={`/events/${props.id}`}>
        <p>{props.title}</p>
        <p>{props.date}</p>
        <p>{props.startTime} - {props.endTime}</p>
      </Link>
    </div>
  )
}

export default EventCard
