import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import { Home } from "./Home";
import { Login } from "./Login";
import { NotFound } from "./NotFound";

export class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
