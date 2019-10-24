import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import { ToastsStore } from "react-toasts";
import { PostData } from "../services/PostData";
import Loader from "../Loader";

export class ActiveRequests extends Component {
  constructor(props) {
    super(props);
    this.state = { RequestID: 0, modal: false, ShowLoader: "none" };
  }
  AcceptClick = e => {
    let id = e.target.name;
    this.setState({ RequestID: id, modal: !this.state.modal });
  };
  toggleAcceptConfirmModel = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  AcceptConfirmed = () => {
    this.setState({ ShowLoader: "block" });
    PostData("Accepts", this.state)
      .then(data => {
        this.props.OnRequestAccept(this.state.RequestID);
        this.setState({ ShowLoader: "none" });
        ToastsStore.info(data.message);
      })
      .catch(errorMessage => {
        this.setState({ ShowLoader: "none" });
        ToastsStore.error(errorMessage);
      });
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    if (!this.props.Requests) {
      return <div>No Active Requests to be shown...!</div>;
    }
    let Requests = this.props.Requests.map(single => {
      return (
        <MDBContainer key={single.ID}>
          <MDBCard className="mt-2">
            <MDBCardBody className="pb-0">
              <h5>
                {single.Name} need your help at {single.Location}
              </h5>
              Please click the button to proceed
              <MDBBtn
                disabled={single.Accepted}
                name={single.ID}
                onClick={this.AcceptClick}
              >
                Accept
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      );
    });
    return (
      <React.Fragment>
        {Requests}
        <MDBModal
          isOpen={this.state.modal}
          toggle={this.toggleAcceptConfirmModel}
        >
          <MDBModalHeader toggle={this.toggle}>Accept request</MDBModalHeader>
          <MDBModalBody>
            Are you sure you want to accept the request?
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggleAcceptConfirmModel}>
              No
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.AcceptConfirmed}>
              Yes, Sure
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        <Loader ShowLoader={this.state.ShowLoader}></Loader>
      </React.Fragment>
    );
  }
}
