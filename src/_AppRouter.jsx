import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import { Home } from "./_PageHome";
import { Login } from "./_PageLogin";
import { NotFound } from "./NotFound";

export class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Login></Login>} />
          <Route path="/home" component={() => <Home></Home>} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
