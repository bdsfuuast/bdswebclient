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

export class TabProfile extends Component {
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
        <MDBCard className="text-center" style={{ minWidth: "380px" }}>
          <div className="profile-sidebar">
            <div className="profile-userpic">
              <img
                src={this.props.ProfilePhoto}
                alt=""
                width="170"
                height="170"
              />
            </div>
            {/* <div className="p-image">
              <i className="fa fa-camera upload-button"></i>
              <input className="file-upload" type="file" accept="image/*" />
            </div> */}
            <div className="profile-usertitle">
              <div className="profile-usertitle-name">
                {this.props.Profile.FullName}
              </div>
              <div className="profile-usertitle-job">Member</div>
            </div>
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
          </div>
        </MDBCard>
      </React.Fragment>
    );
  }
  model = () => {
    return (
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
    );
  };
}
/*
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
           
          </MDBCardBody>
*/
