import React, { Component } from "react";
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
      modal: false
    };
  }
  state = {
    modal14: false
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
    alert(event.target.getAttribute("label"));
  };
  render() {
    return (
      <React.Fragment>
        <MDBFormInline>
          <Form.Check
            onClick={this.historyFilter}
            type="radio"
            label="All"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
            className="grey-text font-weight-light mr-3"
          />
          <Form.Check
            type="radio"
            label="Requests"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
            className="grey-text font-weight-light mr-3"
          />
          <Form.Check
            type="radio"
            label="Accepts"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
            className="grey-text font-weight-light mr-3"
          />
          <Form.Check
            type="radio"
            label="Donnations"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
            className="grey-text font-weight-light mr-3"
          />
        </MDBFormInline>

        <MDBListGroup>
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
          </MDBListGroupItem>
        </MDBListGroup>

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
