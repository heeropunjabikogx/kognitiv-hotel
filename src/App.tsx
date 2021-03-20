import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Nav, Booking, About, Contact, Error } from "./components";

const App = () => {
  return (
    <Fragment>
      <Router>
        <div>
          <Nav />
        </div>
        <div>
          <Switch>
            <Route path="/" exact component={Booking} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/error" exact component={Error} />
            <Redirect to="/error" />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
};

export default App;
