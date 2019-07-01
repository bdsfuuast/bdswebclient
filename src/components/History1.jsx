import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { MDBFormInline, MDBListGroup, MDBListGroupItem } from "mdbreact";

export class History1 extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modal: false
    };
  }
  toggleProfileUpdateModel = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    return (
      <React.Fragment>
        <MDBFormInline>
          <Form.Check
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
          <MDBListGroupItem active href="#">
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
          <MDBListGroupItem hover href="#">
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
          <MDBListGroupItem hover href="#">
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
      </React.Fragment>
    );
  }
}
