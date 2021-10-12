import "./Layout.css"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"


const Layout = (props) => {
  return (
    <div className="layout">
      <Nav user={props.user}/>
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
