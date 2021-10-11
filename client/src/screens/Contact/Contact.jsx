import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <Layout>
      <div>
        <div>
          <h1>Meet the Team</h1>
          <p>The EVNTZ APP ETC</p>
        </div>
        <div>
          <div>
            <p>Breck</p>
            <div>
              <button>LinkedIn</button>
              <button>Github</button>
            </div>
          </div>
          <div>
            <p>Erik</p>
            <div>
              <button>LinkedIn</button>
              <button>Github</button>
            </div>
          </div>
          <div>
          <p>Grecia</p>
            <div>
              <button>LinkedIn</button>
              <button>Github</button>
            </div>
          </div>
          <div>
          <p>Katie</p>
            <div>
              <button>LinkedIn</button>
              <button>Github</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
