import "./EventDetail.css"
import { useState, useEffect } from 'react'
import { getEvent, deleteEvent } from '../../services/events'
import { useParams, Link, useHistory } from 'react-router-dom'
import Layout from "../../components/Layout/Layout";

const EventDetail = (props) => {
  const [event, setEvent] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  const [deleted, setDeleted] = useState(false)
  const history = useHistory()

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

  const handleClick = async () => {
    const deleted = await deleteEvent(event?._id)
    setDeleted(deleted)
    history.push('/events')
  }

  return (
    <Layout>
      <div className="container-div">
        <img className="detail-img" src={event?.imgUrl} alt={event?.title} />
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
        <button onClick={() => handleClick()}>
          Delete
        </button>
      </div>
    </Layout>
  )
}

export default EventDetail
