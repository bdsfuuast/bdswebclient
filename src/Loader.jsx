import React, { Component } from "react";
import "./App.css";

class Loader extends Component {
  render() {
    return (
      <div id="loading" className={"d-" + this.props.ShowLoader}>
        <img id="loading-image" src="./loader.gif" alt="Loading..." />
      </div>
    );
  }
}

export default Loader;
