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
import { FetchData } from "../services/FetchData";
import Loader from "../Loader";

export class ActiveRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RequestID: 0,
      modal: false,
      ShowLoader: "none",
      RequestDetail: "",
      Message: ""
    };
  }

  AcceptClick = e => {
    let id = e.target.name;
    FetchData("Requests/d?id=" + id)
      .then(resp => {
        var data = resp.Data;
        this.setState({
          RequestDetail: data.Detail,
          Message: data.Message,
          modal: !this.state.modal,
          RequestID: id
        });
      })
      .catch(errorMessage => {
        this.setState({ ShowLoader: "none" });
        ToastsStore.error(errorMessage);
      });
  };
  toggleAcceptConfirmModel = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  AcceptConfirmed = () => {
    this.setState({ ShowLoader: "block" });
    PostData("Accepts", this.state)
      .then(resp => {
        this.props.OnRequestAccept(this.state.RequestID);
        this.setState({ ShowLoader: "none" });
        ToastsStore.info(resp.Message);
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
                {single.Name} needs your help at {single.Location}
              </h5>
              <MDBBtn
                disabled={single.Accepted}
                name={single.ID}
                onClick={this.AcceptClick}
              >
                More
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
            <p>
              {this.state.RequestDetail}
              {this.state.Message.length > 0
                ? ' And saying "' + this.state.Message + '"'
                : ""}
            </p>

            <p>Are you willing to donate?</p>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggleAcceptConfirmModel}>
              No
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.AcceptConfirmed}>
              Yes, I'm
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        <Loader ShowLoader={this.state.ShowLoader}></Loader>
      </React.Fragment>
    );
  }
}
