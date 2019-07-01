import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBCardTitle,
  MDBCardImage,
  MDBListGroup,
  MDBListGroupItem,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

export class Profile1 extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modal: false
    };
  }
  toggleProfileUpdateModel = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    return (
      <React.Fragment>
        <MDBCard className="text-center">
          <MDBCardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>Syam Ahmad</MDBCardTitle>
            <div className="d-flex justify-content-center">
              <MDBCard>
                <MDBListGroup>
                  <MDBListGroupItem>BS - Computer Science</MDBListGroupItem>
                  <MDBListGroupItem>+92-300-5568299</MDBListGroupItem>
                  <MDBListGroupItem>Blood Group A+</MDBListGroupItem>
                </MDBListGroup>
              </MDBCard>
            </div>
            <MDBBtn
              outline
              onClick={this.toggleProfileUpdateModel}
              href="#"
              className="mt-3"
            >
              Update
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBModal
          isOpen={this.state.modal}
          toggle={this.toggleProfileUpdateModel}
        >
          <MDBModalHeader toggle={this.toggle}>Update Profile</MDBModalHeader>
          <MDBModalBody>(...)</MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggleProfileUpdateModel}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    );
  }
}
