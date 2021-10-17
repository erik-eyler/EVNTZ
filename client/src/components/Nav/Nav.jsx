import "./Nav.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Burger from "../Burger/Burger";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/events/create">
      Create Event
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);
const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);
const alwaysOptions = (
  <>
    <NavLink className="link" to="/events">
      Browse Events
    </NavLink>
  </>
);

const Nav = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 900;

  // window size listener code idea from: https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          EVNTZ
        </NavLink>
        {width < breakpoint ? (
          <Burger
            open={open}
            setOpen={setOpen}
            user={user}
            alwaysOptions={alwaysOptions}
            authenticatedOptions={authenticatedOptions}
            unauthenticatedOptions={unauthenticatedOptions}
          />
        ) : (
          <div className="nav-right">
            {user && (
              <div className="link welcome">
                HELLO,
                <br /> {user.username}
              </div>
            )}
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
