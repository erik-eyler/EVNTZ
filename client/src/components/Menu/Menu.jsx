import "./Menu.css"

const Menu = (props) => {
  const { alwaysOptions, authenticatedOptions, unauthenticatedOptions, user} =
    props;

  return (
    <div className="menu">
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
