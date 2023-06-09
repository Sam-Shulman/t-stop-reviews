import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import StationIndex from "./StationsIndex";
import StationShow from "./StationShow";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import newStationForm from "./newStationForm";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" render={(props) => <StationIndex {...props} currentUser={currentUser} />}/>
        <Route exact path="/stations/new" component={newStationForm}/>
        <Redirect exact from="/" to="/stations"/>
        <Route exact path="/stations" component={StationIndex} />
        <Route exact path="/stations/:id" render={(props) => <StationShow {...props} user={currentUser}/>}/>
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />

      </Switch>
    </Router>
  );
};

export default hot(App);
