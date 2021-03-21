import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Nav, Booking, About, Contact, Error } from "./components";

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
