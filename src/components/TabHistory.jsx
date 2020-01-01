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

import { HistoryItemDetail } from "./HistoryItemDetail";
import timeDifference from "../services/TimeService";
import Loader from "../Loader";

export class TabHistory extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modal: false,
      filterText: "all",
      url: ""
    };
  }

  toggleHistoryItemDetailModel = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  ItemClicked = e => {
    // console.log();

    this.setState({
      modal: !this.state.modal,
      url: "history?type=" + e.target.className + "&id=" + e.target.name
    });
  };

  historyFilter = event => {
    let ovalue = event.target.value;
    let evalue = { 1: "all", 2: "req", 3: "acp", 4: "don" };
    this.setState({
      filterText: evalue[ovalue]
    });
    // alert(evalue[ovalue]);
  };

  render() {
    if (!this.props.History) {
      return <React.Fragment />;
    }
    let filteredData = this.props.History.filter(element => {
      if (this.state.filterText === "all") return element;
      else return element.Type.indexOf(this.state.filterText) >= 0;
    }).map(element => {
      return (
        <MDBListGroupItem key={this.props.History.indexOf(element)} hover>
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{element.Title}</h5>
            <small className="text-muted">{timeDifference(element.Time)}</small>
          </div>
          <a
            onClick={this.ItemClicked}
            name={element.ID}
            className={element.Type}
          >
            {element.Description}
          </a>
          <span className="sr-only" name={element.Type} />
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
            id="formHorizontalRadios4"
            className="grey-text font-weight-light mr-3"
          />
        </MDBFormInline>

        <MDBListGroup />
        {filteredData}
        <MDBContainer>
          <MDBModal
            isOpen={this.state.modal}
            toggle={this.toggleHistoryItemDetailModel}
          >
            <MDBModalHeader>Details</MDBModalHeader>
            <MDBModalBody>
              <HistoryItemDetail url={this.state.url}></HistoryItemDetail>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color="secondary"
                onClick={this.toggleHistoryItemDetailModel}
              >
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
        {/* <Loader ShowLoader={this.state.ShowLoader}></Loader> */}
      </React.Fragment>
    );
  }
}
