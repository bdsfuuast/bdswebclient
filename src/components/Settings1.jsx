import React, { Component } from "react";
import "../customSwitch.css";
import { MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import { PostData } from "../services/PostData";
import { ToastsStore } from "react-toasts";
import { FetchData } from "../services/FetchData";

export class Settings1 extends Component {
  state = {
    OldPassword: "",
    NewPassword: "",
    RepeatPassword: "",
    switch1: true
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    PostData("ProfileUpdate", this.state)
      .then(result => {
        this.setState(result);
      })
      .catch(errorMessage => {
        ToastsStore.error(errorMessage);
      });
  };
  componentDidMount() {
    FetchData("ProfileUpdate")
      .then(result => {
        this.setState(result);
      })
      .catch(errorMessage => {});
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h4>Change password</h4>
          <MDBInput
            label="Old Password"
            name="OldPassword"
            type="password"
            className="w-50"
            value={this.state.OldPassword}
            onChange={this.handleInputChange}
            labelClass={"customStyles"}
          />
          <MDBInput
            label="New Password"
            name="NewPassword"
            type="password"
            className="w-50"
            value={this.state.NewPassword}
            onChange={this.handleInputChange}
            labelClass={"customStyles"}
          />
          <MDBInput
            label="Repeat Password"
            name="RepeatPassword"
            type="password"
            className="w-50"
            value={this.state.RepeatPassword}
            onChange={this.handleInputChange}
            labelClass={"customStyles"}
          />
          <br></br>
          <hr></hr>
          <br></br>
          <h4>Update contact</h4>
          <MDBInput
            label="Contact"
            name="Contact"
            className="w-50"
            value={this.state.Contact}
            onChange={this.handleInputChange}
            labelClass={"customStyles"}
          />
          <br></br>
          <hr></hr>
          <br></br>
          <h4>Update email</h4>
          <MDBInput
            label="Email"
            name="Email"
            className="w-50"
            value={this.state.Email}
            onChange={this.handleInputChange}
            labelClass={"customStyles"}
          />
          <div className="text-center py-4 mt-3">
            <MDBBtn className="btn btn-outline-purple" type="submit">
              Save Changes
              <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
{
  // handleSwitchChange = nr => () => {
  //   let switchNumber = `switch${nr}`;
  //   this.setState({
  //     [switchNumber]: !this.state[switchNumber]
  //   });
  // };
  /* <div className="container">
        <div className="container" align="right">
          <MDBBadge color="light" className="m-2">
            Status:
          </MDBBadge>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
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
      </div> */
}
