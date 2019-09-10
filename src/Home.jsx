import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import NavbarPage from "./components/NavbarPage";
import { ControlledTabs } from "./components/ControlledTabs";
import Pusher from "pusher-js";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import { FetchData } from "./services/FetchData";
import { BaseUrl } from "./variable";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Message",
      message: "",
      showNotification: false
    };
  }

  componentDidMount() {
    var pusher = new Pusher("0295f0431590b6afe528", {
      authEndpoint: BaseUrl + "AuthPusher",
      auth: {
        headers: {
          Authorization: "bearer " + sessionStorage.getItem("access_token")
        }
      },
      cluster: "ap2",
      forceTLS: true
    });

    var channel = pusher.subscribe("private-notify");
    channel.bind("my-event", data => {
      //this.setState({ message: data.message, showNotification: true });
      FetchData("CheckNotifications")
        .then(result => {
          console.log(
            result.message,
            sessionStorage.getItem("nc"),
            result.message > sessionStorage.getItem("nc"),
            2 == NaN
          );
          if (result.message > sessionStorage.getItem("nc")) {
            ToastsStore.info(
              "You have " + result.message + " new notification(s)"
            );
          }
          sessionStorage.setItem("nc", result.message);
        })
        .catch(errorMessage => {
          console.log(errorMessage);
        });

      //console.log(this.state);
    });
  }
  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          <NavbarPage />
          <ControlledTabs />
        </MDBContainer>

        <ToastsContainer
          position={ToastsContainerPosition.BOTTOM_LEFT}
          store={ToastsStore}
        />
      </React.Fragment>
    );
  }
}
