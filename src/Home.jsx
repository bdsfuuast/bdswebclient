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
import { ApiUrl, PusherKey } from "./services/Constants";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Message",
      message: "",
      showNotification: false,
      logedIn: false,
      RefreshState: false,
      ProfilePhoto: ""
    };
  }
  Refresh = () => {
    this.setState({ RefreshState: !this.state.RefreshState });
    this.setState({ ProfilePhoto: sessionStorage.getItem("ProfilePhoto") });
  };
  componentDidMount() {
    var pusher = new Pusher(PusherKey, {
      authEndpoint: ApiUrl + "AuthPusher",
      auth: {
        headers: {
          Authorization: sessionStorage.getItem("access_token")
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
    });
    FetchData("ping", 500)
      .then(result => {
        this.setState({ logedIn: result });
      })
      .catch(errorMessage => {});
    FetchData("DownloadProfilePhoto", 500)
      .then(result => {
        this.setState({ ProfilePhoto: result.PhotoData });
      })
      .catch(errorMessage => {});
  }
  render() {
    if (!this.state.logedIn) {
      return <React.Fragment />;
    }
    return (
      <React.Fragment>
        <MDBContainer>
          <NavbarPage
            NavigateToProfile={this.NavigateToProfile}
            ProfilePhoto={this.state.ProfilePhoto}
          />
          <ControlledTabs
            Refresh={this.Refresh}
            ProfilePhoto={this.state.ProfilePhoto}
          />
        </MDBContainer>

        <ToastsContainer
          position={ToastsContainerPosition.BOTTOM_LEFT}
          store={ToastsStore}
        />
      </React.Fragment>
    );
  }
}
