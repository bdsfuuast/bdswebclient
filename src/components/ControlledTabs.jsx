import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { MDBCard, MDBCardBody } from "mdbreact";

import { TabLayout } from "./TabLayout";

import { Form1 } from "./Form1";
import { Updates1 } from "./Updates1";
import { ActiveRequests } from "./ActiveRequests";
import { Profile1 } from "./Profile1";
import { History1 } from "./History1";
import { Settings1 } from "./Settings1";

import { FetchData } from "../services/FetchData";

export class ControlledTabs extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "home",
      Notifications: "",
      History: "",
      Requests: ""
    };
  }
  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  };
  onTabSelect = key => {
    this.setState({ key });
    switch (key) {
      case "updates": {
        FetchData("notifications")
          .then(result => {
            this.setState({ Notifications: result });
          })
          .catch(errorMessage => {
            console.log(errorMessage);
          });
        break;
      }
      case "history": {
        FetchData("history")
          .then(result => {
            this.setState({ History: result });
          })
          .catch(errorMessage => {
            console.log(errorMessage);
          });
        break;
      }
      case "requests": {
        FetchData("requests")
          .then(result => {
            this.setState({ Requests: result });
          })
          .catch(errorMessage => {
            console.log(errorMessage);
          });
        break;
      }
      default:
        break;
    }
  };
  render() {
    return (
      <div className="mt-4 mr-4 ml-4">
        <MDBCard>
          <MDBCardBody>
            <Tabs
              id="controlled-tab-example"
              activeKey={this.state.key}
              onSelect={this.onTabSelect}
            >
              <Tab eventKey="home" title="Home">
                <TabLayout>
                  <MDBCard>
                    <MDBCardBody>
                      <Form1 />
                    </MDBCardBody>
                  </MDBCard>
                </TabLayout>
              </Tab>
              <Tab eventKey="updates" title="Updates">
                <TabLayout>
                  <Updates1 Notifications={this.state.Notifications} />
                </TabLayout>
              </Tab>
              <Tab eventKey="requests" title="Active Requests">
                <TabLayout>
                  <ActiveRequests Requests={this.state.Requests} />
                </TabLayout>
              </Tab>
              <Tab eventKey="history" title="History">
                <TabLayout>
                  <History1 History={this.state.History} />
                </TabLayout>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <TabLayout width="50">
                  <Profile1 />
                </TabLayout>
              </Tab>
              <Tab eventKey="settings" title="Settings">
                <TabLayout width="100">
                  <Settings1 />
                </TabLayout>
              </Tab>
            </Tabs>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}
