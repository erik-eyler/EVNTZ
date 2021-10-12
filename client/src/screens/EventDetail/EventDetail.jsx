import { useState, useEffect } from 'react'
import { getEvent, deleteEvent } from '../../services/events'
import { useParams, Link } from 'react-router-dom'

const EventDetail = (props) => {
  const [event, setEvent] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchEvent = async () => {
      const event = await getEvent(id)
      setEvent(event)
      setLoaded(true)
    }
    fetchEvent()
  }, [id])
 
  console.log(event);
  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <img src={event?.imgUrl} alt={event?.title} />
      <div>{event?.title}</div>
      <div>{event?.date}</div>
      <div>{event?.startTime}</div>
      <div>{event?.endTime}</div>
      <div>{event?.ageGroup}</div>
      <div>{event?.cost}</div>
      <div>{event?.location}</div>
      <div>{event?.details}</div>
      <Link to={`/events/${event?._id}/edit`}>
        Edit
      </Link>
      <button onClick={() => deleteEvent(event?._id)}>
        Delete
      </button>
    </div>
  )
}

export default EventDetail
