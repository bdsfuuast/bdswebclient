import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import NavbarPage from "./components/NavbarPage";
import { ControlledTabs } from "./components/ControlledTabs";

export class Home extends Component {
  render() {
    return (
      <MDBContainer>
        <NavbarPage />
        <ControlledTabs />
      </MDBContainer>
    );
  }
}
