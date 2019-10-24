import React, { Component } from "react";
import { MDBBtn, MDBIcon, MDBInput } from "mdbreact";
import { PostData } from "../services/PostData";
import { ToastsStore } from "react-toasts";
import Loader from "../Loader";

export class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Location: "PIMS, Islamabad",
      Description: "short description...",
      BloodGroup: "4",
      Count: "5",
      ShowLoader: "none"
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSelectChange = event => {
    this.setState({
      BloodGroup: event.target.value
    });
  };

  handleSubmit = event => {
    this.setState({ ShowLoader: "block" });
    event.preventDefault();
    PostData("requests", this.state)
      .then(data => {
        this.setState({ ShowLoader: "none" });
        ToastsStore.info(data.message);
      })
      .catch(errorMessage => {
        this.setState({ ShowLoader: "none" });
        ToastsStore.error(errorMessage);
      });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <p className="h4 text-center py-2">
            Let other know you need their help!
          </p>
          <label
            htmlFor="defaultFormCardNameEx"
            className="grey-text font-weight-light customStyles"
          >
            Select Blood Group
          </label>
          <select
            className="browser-default custom-select"
            value={this.state.BloodGroup}
            name="BloodGroup"
            onChange={this.handleInputChange}
          >
            <option>Blood Group</option>
            <option value="1">A+</option>
            <option value="2">A-</option>
            <option value="3">B+</option>
            <option value="4">B-</option>
            <option value="5">O+</option>
            <option value="6">O-</option>
            <option value="7">AB+</option>
            <option value="8">AB-</option>
          </select>

          <MDBInput
            label="Location"
            name="Location"
            value={this.state.Location}
            onChange={this.handleInputChange}
            labelClass={"customStyles"}
          />
          <MDBInput
            labelClass={"customStyles"}
            name="Description"
            value={this.state.Description}
            onChange={this.handleInputChange}
            type="textarea"
            label="Enter Short Description"
          />
          <div className="text-center">
            <MDBBtn className="btn btn-outline-purple" type="submit">
              Send
              <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
          </div>
        </form>
        <Loader ShowLoader={this.state.ShowLoader}></Loader>
      </React.Fragment>
    );
  }
}
