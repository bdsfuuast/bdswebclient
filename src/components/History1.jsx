import React, { Component } from "react";
//import ReactDOM from "react-dom";
import { Form } from "react-bootstrap";
import {
  MDBFormInline,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBContainer
} from "mdbreact";

export class History1 extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modal: false,
      filterText: "All"
    };
  }
  state = {
    modal14: false,
    filterText: "All"
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  toggleProfileUpdateModel = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  historyFilter = event => {
    let ovalue = event.target.value;
    let evalue = { 1: "All", 2: "Requests", 3: "Accepts", 4: "Donnations" };
    this.setState({
      filterText: evalue[ovalue]
    });
    // alert(evalue[ovalue]);
  };

  render() {
    let elementsToFilter = [
      {
        type: "Donnations",
        heading: "List group item heading1",
        days: "3 days ago",
        details: "Donec id elit non mi porta gravida at eget metus. blandit.",
        des: "Donec id elit non mi porta."
      },
      {
        type: "Requests",
        heading: "List group item heading2",
        days: "4 days ago",
        details: "Donec id elit non mi porta gravida at eget metus. blandit.",
        des: "Donec id elit non mi porta."
      },
      {
        type: "Requests",
        heading: "List group item heading3",
        days: "4 days ago",
        details: "Donec id elit non mi porta gravida at eget metus. blandit.",
        des: "Donec id elit non mi porta."
      },
      {
        type: "Accepts",
        heading: "List group item heading4",
        days: "2 days ago",
        details: "Donec id elit non mi porta gravida at eget metus. blandit.",
        des: "Donec id elit non mi porta."
      }
    ];

    let filteredData = elementsToFilter
      .filter(element => {
        if (this.state.filterText === "All") return element;
        else return element.type.indexOf(this.state.filterText) >= 0;
      })
      .map(element => {
        return (
          <MDBListGroupItem
            key={elementsToFilter.indexOf(element)}
            onClick={this.toggle(14)}
            hover
            href="#"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{element.heading}</h5>
              <small className="text-muted">{element.days}</small>
            </div>
            <p className="mb-1">{element.details}</p>
            <small className="text-muted">{element.des}</small>
            <span className="sr-only" name={element.type} />
          </MDBListGroupItem>
        );
      });

    return (
      <React.Fragment>
        <MDBFormInline>
          <Form.Check
            onClick={this.historyFilter}
            type="radio"
            label="All"
            value="1"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
            className="grey-text font-weight-light mr-3"
          />
          <Form.Check
            onClick={this.historyFilter}
            type="radio"
            label="Requests"
            value="2"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
            className="grey-text font-weight-light mr-3"
          />
          <Form.Check
            onClick={this.historyFilter}
            type="radio"
            label="Accepts"
            value="3"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
            className="grey-text font-weight-light mr-3"
          />
          <Form.Check
            onClick={this.historyFilter}
            type="radio"
            label="Donnations"
            value="4"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
            className="grey-text font-weight-light mr-3"
          />
        </MDBFormInline>

        <MDBListGroup />
        {filteredData}
        <MDBContainer>
          <MDBModal
            isOpen={this.state.modal14}
            toggle={this.toggle(14)}
            centered
          >
            <MDBModalHeader toggle={this.toggle(14)}>
              MDBModal title
            </MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle(14)}>
                Close
              </MDBBtn>
              <MDBBtn color="primary">Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </React.Fragment>
    );
  }
}

/*
          <MDBListGroupItem onClick={this.toggle(14)} active href="#">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
            <span className="sr-only" name="All" />
          </MDBListGroupItem>
          <MDBListGroupItem onClick={this.toggle(14)} hover href="#">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className="text-muted">Donec id elit non mi porta.</small>
            <span className="sr-only" name="Accepts" />
          </MDBListGroupItem>
          <MDBListGroupItem onClick={this.toggle(14)} hover href="#">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className="text-muted">Donec id elit non mi porta.</small>
            <span className="sr-only" name="Requests" />
          </MDBListGroupItem>
*/
