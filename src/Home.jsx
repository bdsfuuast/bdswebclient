import React, { Component } from "react";
import { MDBContainer, MDBNotification } from "mdbreact";
import NavbarPage from "./components/NavbarPage";
import { ControlledTabs } from "./components/ControlledTabs";
import Pusher from "pusher-js";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";

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
    const pusher = new Pusher("0295f0431590b6afe528", {
      cluster: "ap2",
      encrypted: true
    });
    const channel = pusher.subscribe("my-channel");
    channel.bind("my-event", data => {
      //this.setState({ message: data.message, showNotification: true });

      ToastsStore.info(data.message);
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
