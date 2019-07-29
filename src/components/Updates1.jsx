import React, { Component } from "react";
import { MDBAlert } from "mdbreact";
import { FetchData } from "../services/FetchData";
//import { relative } from "path";

export class Updates1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Notifications: "",
      notificationType: {
        1: "danger",
        2: "warning",
        3: "secondary"
      },
      iconClass: {
        1: " fa-question",
        2: " fa-check",
        3: " fa-check-double"
      }
    };
    //this.setState({ Notifications: this.props.Notifications });
    console.log("CALLED");
  }
  onNotification() {}
  render() {
    if (!this.props.Notifications) {
      return <div>No notificatins to be shown...!</div>;
    }
    let singleNotification = this.props.Notifications.map(single => {
      return (
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
            <small style={{ flex: 2 }}>{single.Time}</small>
          </div>
        </MDBAlert>
      );
    });
    return <React.Fragment>{singleNotification}</React.Fragment>;
  }
}
