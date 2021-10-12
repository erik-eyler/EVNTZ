import "./Nav.css"
import { NavLink } from "react-router-dom";



const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">EVNTZ</NavLink>
        <div className="nav-right">
          <NavLink to="/events">Browse </NavLink>
          <NavLink to="/events/create">Create Event</NavLink>
          {/* <NavLink to="/events/create">Log In</NavLink>
          <NavLink to="/events/create">Sign Up</NavLink> */}
        </div>
      </div>
    </nav>
  )
}

export default Nav
