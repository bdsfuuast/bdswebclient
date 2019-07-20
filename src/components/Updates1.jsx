import React, { Component } from "react";
import { MDBBtn, MDBAlert } from "mdbreact";
import { relative } from "path";

export class Updates1 extends Component {
  render() {
    let updateNotifications = [
      {
        type: 1,
        motivation: "Motivation of the Notificaiton!",
        notificationBody:
          "You have a new blood request please review it here thanks!",
        days: "1 days ago"
      },
      {
        type: 1,
        motivation: "Motivation of the Notificaiton!",
        notificationBody:
          "You have a new blood request please review it here thanks!",
        days: "2 days ago"
      },
      {
        type: 2,
        motivation: "Motivation of the Notificaiton!",
        notificationBody:
          "You have a new blood request please review it here thanks!",
        days: "3 days ago"
      },
      {
        type: 3,
        motivation: "Motivation of the Notificaiton!",
        notificationBody:
          "You have a new blood request please review it here thanks!",
        days: "3 days ago"
      },
      {
        type: 3,
        motivation: "Motivation of the Notificaiton!",
        notificationBody:
          "You have a new blood request please review it here thanks!",
        days: "4 days ago"
      },
      {
        type: 1,
        motivation: "Motivation of the Notificaiton!",
        notificationBody:
          "You have a new blood request please review it here thanks!",
        days: "4 days ago"
      }
    ];
    let notificationType = {
      1: "danger",
      2: "warning",
      3: "secondary"
    };
    let iconClass = {
      1: " fa-check",
      2: " fa-question",
      3: " fa-check-double"
    };
    let singleNotification = updateNotifications.map(single => {
      return (
        <MDBAlert color={notificationType[single.type]}>
          <div className="d-flex">
            <div className="container main-box">
              <i className="blood-sign fas fa-tint" />
              <i className={"mark-sign fas" + iconClass[single.type]} />
            </div>
            <div className="container" style={{ flex: 9 }}>
              <h5>{single.motivation}</h5>
              <p style={{ margin: 0 }}>{single.notificationBody}</p>
            </div>
            <small style={{ flex: 2 }}>{single.days}</small>
          </div>
        </MDBAlert>
      );
    });
    return <React.Fragment>{singleNotification}</React.Fragment>;
  }
}
/*
<MDBAlert color="primary">
          <div className="d-flex">
            <div className="container main-box">
              <i className="blood-sign fas fa-tint" />
              <i className={"mark-sign fas" + iconClass[3]} />
            </div>
            <div className="container" style={{ flex: 9 }}>
              <h5>Motivation of the Notificaiton!</h5>
              <p style={{ margin: 0 }}>
                You have a new blood request please review it here thanks!
              </p>
            </div>
            <small style={{ flex: 2 }}>3 days ago</small>
          </div>
        </MDBAlert>

*/
