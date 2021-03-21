import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Nav, Booking, About, Contact, Error } from "./components";

const FooterContainer = styled.div`
  background-color: #101820;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  p {
    color: #fff;
  }
`;
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
        <FooterContainer>
          <p>{"© Rajat Gupta 2021. All rights reserved."}</p>
        </FooterContainer>
      </Fragment>
    </Provider>
  );
};

export default App;
