import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./screens/Home/Home";
import EventDetail from "./screens/EventDetail/EventDetail";
import EventCreate from "./screens/EventCreate/EventCreate";
import EventEdit from "./screens/EventEdit/EventEdit";
import Events from "./screens/Events/Events";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import Contact from "./screens/Contact/Contact";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/events/create">
          <EventCreate />
        </Route>

        <Route exact path="/events">
          <Events />
        </Route>

        <Route exact path="/events/:id">
          <EventDetail />
        </Route>

        <Route exact path="/events/:id/edit">
          <EventEdit />
        </Route>

        <Route exact path="/sign-in">
          <SignIn />
        </Route>

        <Route exact path="/sign-up">
          <SignUp />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
