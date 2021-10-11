import "./Footer.css"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div>
        <Link to="/contact">Contact us</Link>
      </div>
    </footer>
  )
}

export default Footer
