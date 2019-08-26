import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBContainer, MDBBtn } from "mdbreact";
export class Requests extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MDBContainer>
        <MDBCard>
          <MDBCardBody>
            This is some text within a panel body.
            <MDBBtn />
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
}
