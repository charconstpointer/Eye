import React from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Entry from "../Feed/Chat/EntryPanel/Entry";
import Login from "../Login/Login";

import "./Navigation.css";

export default props => {
  return (
    <Router>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Entry} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};
