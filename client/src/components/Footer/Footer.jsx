import "./Footer.css"
import { Link } from "react-router-dom";
import gitHubBug from "../../assets/GitHub-Mark-120px-plus.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p>Connection. Community.</p>
        <a href="https://github.com/erik-eyler/EVNTZ" className="gitHub-footer" rel="noreferrer noopener">
          <img className="social-bug-footer" src={gitHubBug} alt="EVNTZ GitHub" />
        </a>
        <Link to="/contact" className="contact-us">Contact us</Link>
      </div>
      
    </footer>
  )
}

export default Footer
