import Layout from '../Layout/Layout';
import '../EventForm/EventForm.css';

const EventForm = (props) => {
  return (
    <Layout>
    <div className='form'>
      <form onSubmit={props.handleSubmit}>

        <div className='title'>
        <label>TITLE</label>
            <input
            className='title-input'
            placeholder='title'
            name='title'
            value={props.event.title}
            onChange={props.handleChange} />
        </div>
        <br />

        <div className='date-time'>
        <label>DATE</label>
          <input
            type='date'
            min='2021-10-10'
            placeholder='MM/DD/YYYY'
            name='date'
            value={props.event.date}
            onChange={props.handleChange} />
        
        <label>START TME</label>
          <input
            type='time'
            placeholder='--'
            name='startTime'
            value={props.event.startTime}
            onChange={props.handleChange} />
        
        <label>END TIME</label>
          <input
            type='time'
            placeholder='--'
            name='endTime'
            value={props.event.endTime}
            onChange={props.handleChange} />
        </div>
        <br/>
        
        <div className='age-cost'>
        <label>AGE GROUP</label>
        <select
            placeholder='Select Age Group'
            name='ageGroup'
            value={props.event.ageGroup}
            onChange={props.handleChange}>
          <option value='All Ages'>All Ages</option>
          <option value='16 and over'>16 and Over</option>
          <option value='18 and over'>18 and Over</option>
        </select>
        
        <label>COST</label>
          <input
            placeholder='$-'
            name='cost'
            value={props.event.cost}
            onChange={props.handleChange} />
        </div>
        <br/>
        
        <div className='location'>
        <label>LOCATION: </label>
          <input
            className='location-input'
            placeholder='location'
            name='location'
            value={props.event.location}
            onChange={props.handleChange} />
        </div>
        <br/>
        
        <div className='details'>
        <label>DETAILS: </label>
          <input
            className='details-input'
            placeholder='event details'
            name='details'
            value={props.event.details}
            onChange={props.handleChange} />
        </div>
        <br/>

        <button className='button' type='submit'>Submit</button>
      </form>
      </div>
      </Layout>
  )
}

export default EventForm
