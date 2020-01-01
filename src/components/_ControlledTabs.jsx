import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { MDBCard, MDBCardBody, MDBRow, MDBCol } from "mdbreact";

import { TabLayout } from "./_TabLayout";

import { TabRequestForm } from "./TabRequestForm";
import { TabNotifications } from "./TabNotifications";
import { TabProfile } from "./TabProfile";
import { TabHistory } from "./TabHistory";
import { TabSettings } from "./TabSettings";

import { ToastsStore } from "react-toasts";
import { FetchData } from "../services/FetchData";
import { PostData } from "../services/PostData";

import Loader from "../Loader";

export class ControlledTabs extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "home",
      Notifications: "",
      History: "",
      //Requests: "",
      Profile: "",
      ShowLoader: "none"
    };
  }
  // onClick = nr => () => {
  //   this.setState({
  //     radio: nr
  //   });
  // };
  DonationConfirmed = id => {
    const Confirmed = true;
    this.setState({
      Notifications: this.state.Notifications.map(el =>
        el.ID == id ? { ...el, Confirmed } : el
      )
    });
  };
  NotificationsSeen() {
    PostData("Notifications");
  }
  onTabSelect = key => {
    this.setState({ key });
    switch (key) {
      case "updates": {
        this.setState({ ShowLoader: "block" });
        FetchData("notifications")
          .then(result => {
            this.setState({ Notifications: result });
            this.NotificationsSeen();
            this.setState({ ShowLoader: "none" });
          })
          .catch(errorMessage => {
            ToastsStore.error(errorMessage);
            this.setState({ ShowLoader: "none" });
          });
        break;
      }
      case "history": {
        this.setState({ ShowLoader: "block" });
        FetchData("history")
          .then(result => {
            this.setState({ History: result });
            this.setState({ ShowLoader: "none" });
          })
          .catch(errorMessage => {
            ToastsStore.error(errorMessage);
            this.setState({ ShowLoader: "none" });
          });
        break;
      }
      // case "requests": {
      //   FetchData("requests")
      //     .then(result => {
      //       this.setState({ Requests: result });
      //     })
      //     .catch(errorMessage => {
      //       ToastsStore.error(errorMessage);
      //     });
      //   break;
      //}
      case "profile": {
        this.setState({ ShowLoader: "block" });
        FetchData("profile")
          .then(result => {
            this.setState({ Profile: result });
            this.setState({ ShowLoader: "none" });
          })
          .catch(errorMessage => {
            ToastsStore.error(errorMessage);
            this.setState({ ShowLoader: "none" });
          });
        break;
      }
      default:
        break;
    }
  };
  render() {
    return (
      <div className="mt-2 mr-4 ml-4" style={{ minWidth: "740px" }}>
        <MDBCard>
          <MDBCardBody>
            <Tabs
              id="controlled-tab-example"
              activeKey={this.state.key}
              onSelect={this.onTabSelect}
            >
              <Tab eventKey="home" title="Home" tabClassName="tab class">
                <TabLayout>
                  <MDBCard>
                    <MDBCardBody>
                      <TabRequestForm />
                    </MDBCardBody>
                  </MDBCard>
                </TabLayout>
              </Tab>
              <Tab eventKey="updates" title="Notifications">
                <TabLayout>
                  <TabNotifications
                    Notifications={this.state.Notifications}
                    OnDonationConfirmed={this.DonationConfirmed}
                  />
                </TabLayout>
              </Tab>
              {/* <Tab eventKey="requests" title="Active Requests">
                <TabLayout>
                  <ActiveRequests
                    Requests={this.state.Requests}
                    OnRequestAccept={this.RequestAccepted}
                  />
                </TabLayout>
              </Tab> */}
              <Tab eventKey="history" title="History">
                <TabLayout>
                  <TabHistory History={this.state.History} />
                </TabLayout>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <TabLayout width="50">
                  <TabProfile
                    Profile={this.state.Profile}
                    ProfilePhoto={this.props.ProfilePhoto}
                  />
                </TabLayout>
              </Tab>
              <Tab eventKey="settings" title="Settings">
                <TabLayout>
                  <TabSettings Refresh={this.props.Refresh} />
                </TabLayout>
              </Tab>
            </Tabs>
          </MDBCardBody>
        </MDBCard>
        <Loader ShowLoader={this.state.ShowLoader}></Loader>
      </div>
    );
  }
}
