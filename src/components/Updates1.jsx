import React, { Component } from "react";
import { MDBBtn, MDBAlert } from "mdbreact";

export class Updates1 extends Component {
  render() {
    return (
      <React.Fragment>
        <MDBAlert color="warning">
          <div className="d-flex justify-content-between">
            <span>
              You have a new blood request please review it{" "}
              <a href="#!" className="alert-link">
                here
              </a>
              . thanks!
            </span>
            <MDBBtn outline color="danger" size="sm">
              Accept
            </MDBBtn>
            <small>3 days ago</small>
          </div>
        </MDBAlert>
        <MDBAlert color="warning">
          <div className="d-flex justify-content-between">
            <span>
              You have a new blood request please review it{" "}
              <a href="#!" className="alert-link">
                here
              </a>
              . thanks!
            </span>
            <small>3 days ago</small>
          </div>
        </MDBAlert>
        <MDBAlert color="warning">
          <div className="d-flex justify-content-between">
            <span>
              You have a new blood request please review it{" "}
              <a href="#!" className="alert-link">
                here
              </a>
              . thanks!
            </span>
            <small>3 days ago</small>
          </div>
        </MDBAlert>
        <MDBAlert color="light">
          <div className="d-flex justify-content-between">
            <span>
              You have a new blood request please review it{" "}
              <a href="#!" className="alert-link">
                here
              </a>
              . thanks!
            </span>
            <small>3 days ago</small>
          </div>
        </MDBAlert>
        <MDBAlert color="dark">
          <div className="d-flex justify-content-between">
            <span>
              You have a new blood request please review it{" "}
              <a href="#!" className="alert-link">
                here
              </a>
              . thanks!
            </span>
            <small>3 days ago</small>
          </div>
        </MDBAlert>
      </React.Fragment>
    );
  }
}
