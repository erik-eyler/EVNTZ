import { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./screens/Home/Home";
import EventDetail from "./screens/EventDetail/EventDetail";
import EventCreate from "./screens/EventCreate/EventCreate";
import EventEdit from "./screens/EventEdit/EventEdit";
import Events from "./screens/Events/Events";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import SignOut from "./screens/SignOut/SignOut";
import Contact from "./screens/Contact/Contact";
import { verifyUser } from "./services/users";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>

        <Route exact path="/events/create">
          {user ? <EventCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>

        <Route exact path="/events">
          <Events user={user} />
        </Route>

        <Route exact path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>

        <Route exact path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>

        <Route exact path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/events/:id/edit">
          {/* {user ? <EventEdit user={user} /> : <Redirect to="/" />} */}
          <EventEdit />
        </Route>

        <Route exact path="/events/:id">
          <EventDetail user={user} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
