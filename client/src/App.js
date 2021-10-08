import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./screens/Home/Home";
import EventDetail from "./screens/EventDetail/EventDetail";
import EventCreate from "./screens/EventCreate/EventCreate";
import EventEdit from "./screens/EventEdit/EventEdit";
import Events from "./screens/Events/Events";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/events/:id">
          <EventDetail />
        </Route>

        <Route path="/events/create">
          <EventCreate />
        </Route>

        <Route path="/events/:id/edit">
          <EventEdit />
        </Route>

        <Route exact path="/events">
          <Events />
        </Route>

        <Route path="/sign-in">
          <SignIn />
        </Route>

        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
