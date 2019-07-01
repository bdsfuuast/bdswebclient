import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { MDBCard, MDBCardBody } from "mdbreact";

import { Form1 } from "./Form1";
import { Table1 } from "./Table1";
import { TabLayout } from "./TabLayout";
import { Updates1 } from "./Updates1";
import { Profile1 } from "./Profile1";
import { History1 } from "./History1";

export class ControlledTabs extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "home"
    };
  }
  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  };
  render() {
    return (
      <div className="mt-4 mr-4 ml-4">
        <MDBCard>
          <MDBCardBody>
            <Tabs
              id="controlled-tab-example"
              activeKey={this.state.key}
              onSelect={key => this.setState({ key })}
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
                  <Updates1 />
                </TabLayout>
              </Tab>
              <Tab eventKey="history" title="History">
                <TabLayout>
                  <History1 />
                </TabLayout>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <TabLayout width="50">
                  <Profile1 />
                </TabLayout>
              </Tab>
              <Tab eventKey="settings" title="Settings">
                <TabLayout>
                  <Table1 />
                </TabLayout>
              </Tab>
            </Tabs>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

// <MDBCard>
//   <MDBCardBody />
// </MDBCard>
