import React, { Component } from "react";
import { MDBBtn, MDBIcon, MDBInput } from "mdbreact";

export class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Location: "PIMS, Islamabad",
      Description: "short description...",
      BloodGroup: "4",
      Count: "15"
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
    event.preventDefault();

    const url = "http://agpstore.000webhostapp.com/postform.php";
    //       {
    //         Accept: "application/json, text/plain",
    //         "Content-Type": "application/json;charset=UTF-8"
    //       },
    let fetchData = {
      method: "POST",
      headers: new Headers(),
      body: JSON.stringify(this.state)
    };
    fetch(url, fetchData)
      .then(function(e) {
        if (e.status !== 200) throw new Error("Something went wrong");
        console.log(e);
      })
      .catch(error => {
        console.log(error);
      });
    //console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p className="h4 text-center py-4">Request</p>
        <label
          htmlFor="defaultFormCardNameEx"
          className="grey-text font-weight-light"
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
          <option value="3">O+</option>
          <option value="4">O-</option>
          <option value="5">B+</option>
          <option value="6">B-</option>
          <option value="7">AB+</option>
          <option value="8">AB-</option>
        </select>

        <MDBInput
          label="Location"
          name="Location"
          value={this.state.Location}
          onChange={this.handleInputChange}
        />
        <MDBInput
          name="Description"
          value={this.state.Description}
          onChange={this.handleInputChange}
          type="textarea"
          label="Enter Short Description"
        />
        <div className="text-center py-4 mt-3">
          <MDBBtn className="btn btn-outline-purple" type="submit">
            Send
            <MDBIcon far icon="paper-plane" className="ml-2" />
          </MDBBtn>
        </div>
      </form>
    );
  }
}
