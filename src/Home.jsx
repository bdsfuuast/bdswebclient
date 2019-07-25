import React, { Component } from "react";
import { MDBContainer, MDBNotification } from "mdbreact";
import NavbarPage from "./components/NavbarPage";
import { ControlledTabs } from "./components/ControlledTabs";
import { Toast, Button } from "react-bootstrap";
import Pusher from "pusher-js";

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
      //this functon is trigerd whenever a notification is send from server through pusher.
      console.log(this.state);
    });
  }
  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          <NavbarPage />
          <ControlledTabs />
        </MDBContainer>
        {
          //Notificatin toast to be placed here..........................
        }
      </React.Fragment>
    );
  }
}
