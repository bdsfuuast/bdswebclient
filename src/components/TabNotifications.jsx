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
//import { relative } from "path";

export class TabNotifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Location: "PIMS, Islamabad",
      notificationType: {
        1: "danger",
        2: "warning",
        3: "secondary"
      },
      iconClass: {
        1: " fa-question",
        2: " fa-check",
        3: " fa-check-double"
      },
      modal: false,
      ShowLoader: "none"
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  ShowDetails = id => {
    console.log(id);
  };
  toggleDonationConfirmModel = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  ConfirmClick = e => {
    let id = e.target.name;
    this.setState({ NotificationID: id, modal: !this.state.modal });
  };
  DonationConfirmed = event => {
    this.setState({ ShowLoader: "block" });
    event.preventDefault();
    PostData("Transfusions", {
      NotificationID: this.state.NotificationID,
      Location: this.state.Location
    })
      .then(resp => {
        this.props.OnDonationConfirmed(this.state.NotificationID);
        this.setState({ ShowLoader: "none" });
        ToastsStore.info(resp.Message);
      })
      .catch(errorMessage => {
        this.setState({ ShowLoader: "none" });
        ToastsStore.error(errorMessage);
      });
    this.toggleDonationConfirmModel();
  };
  render() {
    if (!this.props.Notifications) {
      return <React.Fragment />;
    }
    let Notifications = this.props.Notifications.map(single => {
      return (
        <a
          key={this.props.Notifications.indexOf(single)}
          onClick={() => this.ShowDetails(single.ID)}
        >
          <MDBAlert
            key={single.ID}
            color={this.state.notificationType[single.Activity]}
          >
            <div className="d-flex">
              <div className="container main-box">
                <i className="blood-sign fas fa-tint" />
                <i
                  className={
                    "mark-sign fas" + this.state.iconClass[single.Activity]
                  }
                />
              </div>
              <div className="container" style={{ flex: 9 }}>
                <h5>{single.Title}</h5>
                <p style={{ margin: 0 }}>{single.Body}</p>
              </div>
              <small style={{ flex: 2 }}>{timeDifference(single.Time)}</small>
            </div>

            <MDBBtn
              name={single.ID}
              onClick={this.ConfirmClick}
              size="sm"
              color="warning"
              hidden={single.Confirmed || single.Activity != "2"}
              style={{ padding: "10px" }}
            >
              Confirm blood received
            </MDBBtn>
          </MDBAlert>
        </a>
      );
    });
    return (
      <React.Fragment>
        {Notifications}
        <MDBModal
          isOpen={this.state.modal}
          toggle={this.toggleDonationConfirmModel}
        >
          <MDBModalHeader toggle={this.toggle}>
            Are you sure you have received the blood?
          </MDBModalHeader>
          <form onSubmit={this.DonationConfirmed}>
            <MDBModalBody>
              <MDBContainer>
                <div className="grey-text">
                  <small>
                    Where did you received the blood e.g. "AFIT, Rawalpindi"
                  </small>
                  <MDBInput
                    name="Location"
                    value={this.state.Location}
                    onChange={this.handleInputChange}
                    label="Location"
                    icon="map"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    required
                    maxLength="100"
                  ></MDBInput>
                </div>
              </MDBContainer>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color="secondary"
                onClick={this.toggleDonationConfirmModel}
              >
                Close
              </MDBBtn>
              <MDBBtn type="submit" color="primary">
                Yes, Confirm
              </MDBBtn>
            </MDBModalFooter>
          </form>
        </MDBModal>
        <Loader ShowLoader={this.state.ShowLoader}></Loader>
      </React.Fragment>
    );
  }
}
