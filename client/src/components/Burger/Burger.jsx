import "./Burger.css";

// burger menu idea from: https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
const Burger = ({ open, setOpen }) => {

  const handleClick = (event) => {
    event.preventDefault();
    setOpen(!open);
  };


  return (
    <div className="burger" onClick={handleClick}>
      <span className={open? "patty rotate" : "patty"} />
      <span className={open? "patty rotate" : "patty"} />
      <span className={open? "patty rotate" : "patty"} />
    </div>
  );
};

export default Burger;
