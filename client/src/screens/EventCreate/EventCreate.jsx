import { createEvent } from '../../services/events';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import EventForm from '../../components/EventForm/EventForm';

const EventCreate = () => {
  const history = useHistory()

  const [event, setEvent] = useState({
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    title: '',
    cost: '',
    details: '',
    ageGroup: '', //needs to be set to all ages by default(dropdown)
  })

  const [isCreated, setIsCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setEvent({
      ...event,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createEvent(event)
    setIsCreated({created})
  }

  if (isCreated) {
    return history.push('/events')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input placeholder='title' name='title' value={event.title} onChange={handleChange} />
        
        <label>Date</label>
        <input placeholder='MM/DD/YYYY' name='date' value={event.date} onChange={handleChange} />
        
        <label>Start Time</label>
        <input placeholder='--' name='start time' value={event.startTime} onChange={handleChange} />
        
        <label>End Time</label>
        <input placeholder='--' name='end time' value={event.endTime} onChange={handleChange} />
        
        <label>Age Group</label>
        <select
          placeholder='Select Age Group' name='age group' value={event.ageGroup} onChange={handleChange}>
          <option value='All Ages'>All Ages</option>
          <option value='16 and over'>16 and Over</option>
          <option value='18 and over'>18 and Over</option>
        </select>
        
        <label>Cost</label>
        <input placeholder='$-' name='cost' value={event.cost} onChange={handleChange} />
        
        <label>Location</label>
        <input placeholder='location' name='location' value={event.location} onChange={handleChange} />
        
        <label>Details</label>
        <input placeholder='event details' name='details' value={event.details} onChange={handleChange} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default EventCreate
