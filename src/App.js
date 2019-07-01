import React, { Component } from "react";
import "./App.css";
import { MDBContainer } from "mdbreact";
import NavbarPage from "./components/NavbarPage";
import { ControlledTabs } from "./components/ControlledTabs";

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <NavbarPage />
        <ControlledTabs />
      </MDBContainer>
    );
  }
}

export default App;
