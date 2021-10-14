import Layout from "../../components/Layout/Layout";
import "./Contact.css";
import linkedInBug from "../../assets/LI-In-Bug.png";
import gitHubBug from "../../assets/GitHub-Mark-120px-plus.png"

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <div className="contact-header">
          <h1>Meet the Team</h1>
          <p className="project-description">The EVNTZ application was built during a seven day design sprint by the team members listed below.<br/>
          The technologies used for this application include: React, Express, Node.js, MongoDB, Mongoose, CSS, bcrypt, and JWT</p>
        </div>
        <div className="contact-section">
          <div className="contact-card">
            <p className="team-name">Breck Zeyer</p>
            <div>
              <a href="https://www.linkedin.com/in/breck-zeyer-ab71ab34/" rel="noreferrer noopener">
                <img className="social-bug" src={linkedInBug} alt="Breck Zeyer linkedIn" />
              </a>
              <a href="https://github.com/BreckZ" rel="noreferrer noopener">
                <img className="social-bug" src={gitHubBug} alt="Breck Zeyer GitHub" />
              </a>
            </div>
          </div>
          <div className="contact-card">
            <p className="team-name">Katherine Boates-Goudreau</p>
            <div>
              <a href="https://www.linkedin.com/in/katherine-boates-goudreau/" rel="noreferrer noopener">
                <img className="social-bug" src={linkedInBug} alt="Katherine Boates-Goudreau linkedIn" />
              </a>
              <a href="https://github.com/ktbg" rel="noreferrer noopener">
                <img className="social-bug" src={gitHubBug} alt="Katherine Boates-Goudreau GitHub" />
              </a>
            </div>
          </div>
          <div className="contact-card">
            <p className="team-name">Grecia Castillo</p>
            <div>
              <a href="" rel="noreferrer noopener">
                <img className="social-bug" src={linkedInBug} alt="Grecia Castillo linkedIn" />
              </a>
              <a href="https://github.com/greciacas" rel="noreferrer noopener">
                <img className="social-bug" src={gitHubBug} alt="Grecia Castillo GitHub" />
              </a>
            </div>
          </div>
          <div className="contact-card">
            <p className="team-name">Erik Eyler</p>
            <div>
              <a href="https://www.linkedin.com/in/erik-eyler/" rel="noreferrer noopener">
                <img className="social-bug" src={linkedInBug} alt="Erik Eyler linkedIn" />
              </a>
              <a href="https://github.com/erik-eyler" rel="noreferrer noopener">
                <img className="social-bug" src={gitHubBug} alt="Erik Eyler GitHub" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
