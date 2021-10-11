import "./Nav.css"
import { NavLink } from "react-router-dom";



const Nav = () => {
  return (
    <nav>
      <div className="nav">
          <NavLink to="/">EVNTZ</NavLink>
          <div>
            <NavLink to="/events">Browse </NavLink>
            <NavLink to="/events/create">Create Event</NavLink>
          </div>
      </div>
    </nav>
  )
}

export default Nav
