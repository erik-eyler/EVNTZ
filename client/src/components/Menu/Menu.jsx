// import { NavLink } from "react-router-dom";
import "./Menu.css"

const Menu = (props) => {
  const { alwaysOptions, authenticatedOptions, unauthenticatedOptions, user, open } =
    props;
  return (
      <div className={open ? "menu" : "menu-closed"}>
        {user && (
          <div className="link welcome">
            HELLO,
            <br /> {user.username}
          </div>
        )}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div> 
  );
};

export default Menu;
