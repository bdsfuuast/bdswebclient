import React, { Component } from "react";
import "../customSwitch.css";
import { Row, Col, MDBBadge } from "mdbreact";
import { Tab, ListGroup, Image } from "react-bootstrap";

export class Settings1 extends Component {
  state = {
    switch1: true
  };

  handleSwitchChange = nr => () => {
    let switchNumber = `switch${nr}`;
    this.setState({
      [switchNumber]: !this.state[switchNumber]
    });
  };

  render() {
    return (
      <div className="container">
        <div className="container" align="right">
          <MDBBadge color="light" className="m-2">
            Status:
          </MDBBadge>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round" />
          </label>
        </div>

        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup className="p-3">
                <ListGroup.Item
                  action
                  variant="danger"
                  href="#show-profile-tab"
                >
                  Profile
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  variant="danger"
                  href="#show-privacy-tab"
                >
                  Privacy
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  variant="danger"
                  href="#show-security-tab"
                >
                  Security
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#show-profile-tab">
                  <ListGroup className="float-left" variant="flush">
                    <ListGroup.Item>
                      <Image
                        className=" float-right"
                        width="300px"
                        src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                        rounded
                      />
                    </ListGroup.Item>
                    <ListGroup.Item>Hmza Mughal</ListGroup.Item>
                    <ListGroup.Item>BS - Computer Science</ListGroup.Item>
                    <ListGroup.Item>+92 347 1866623</ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="#show-privacy-tab">
                  <ListGroup className="float-left" variant="flush">
                    <ListGroup.Item>Profile</ListGroup.Item>
                    <ListGroup.Item>Phone Number</ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="#show-security-tab">
                  <ListGroup className="float-left" variant="flush">
                    <ListGroup.Item>Change Password</ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
