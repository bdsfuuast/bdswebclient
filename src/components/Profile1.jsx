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
  MDBModalFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
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
            <MDBCardTitle>{this.props.Profile.FullName}</MDBCardTitle>
            <div className="d-flex justify-content-center">
              <MDBCard>
                <MDBListGroup>
                  <MDBListGroupItem>
                    {this.props.Profile.Degree} -{" "}
                    {this.props.Profile.Department}
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    {this.props.Profile.Contact}
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    Blood Group {this.props.Profile.BloodGroup}
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCard>
            </div>
            {/* <MDBBtn
              outline
              onClick={this.toggleProfileUpdateModel}
              href="#"
              className="mt-3"
            >
              Update
            </MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
        <MDBModal
          isOpen={this.state.modal}
          toggle={this.toggleProfileUpdateModel}
        >
          <MDBModalHeader toggle={this.toggle}>Update Profile</MDBModalHeader>
          <MDBModalBody>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                  <form>
                    <div className="grey-text">
                      <MDBInput
                        label="Your Name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Your Department"
                        icon="university"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Your Phone Number"
                        icon="mobile-alt"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Your Blood Group"
                        icon="tint"
                        group
                        type="password"
                        validate
                      />
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBModalBody>
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
