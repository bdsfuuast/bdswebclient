import React, { Component } from "react";
import "./App.css";
import { AppRouter } from "./_AppRouter";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Message",
      message: "",
      showNotification: false
    };
  }
  render() {
    return (
      <React.Fragment>
        <AppRouter />
      </React.Fragment>
    );
  }
}

export default App;
