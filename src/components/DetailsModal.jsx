import React, { Component } from "react";
import {
  MDBAlert,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBContainer,
  MDBInput
} from "mdbreact";
import { PostData } from "../services/PostData";
import { ToastsStore } from "react-toasts";
import timeDifference from "../services/TimeService";
import Loader from "../Loader";

export class DetailsModal extends Component {
  constructor(props) {
    super(props);

    this.state = { Data: null, Modal: false };
  }
  componentDidMount() {
    this.setState({ Data: this.props.Data, Modal: this.props.Modal });
  }
  render() {
    if (!this.props.Data) {
      return <div>No data to be shown...!</div>;
    }
    return (
      <React.Fragment>
        <MDBModal
          isOpen={this.state.Modal}
          toggle={this.toggleDonationConfirmModel}
        >
          <MDBModalHeader toggle={this.toggle}>Details</MDBModalHeader>
          <MDBModalBody></MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="primary" onClick={this.DonationConfirmed}>
              OK
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    );
  }
}
