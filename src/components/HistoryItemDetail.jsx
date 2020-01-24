import React, { Component } from "react";
import { MDBListGroup, MDBListGroupItem } from "mdbreact";

import { ToastsStore } from "react-toasts";
import { FetchData } from "../services/FetchData";

export class HistoryItemDetail extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { Details: "" };
  }
  componentDidMount() {
    FetchData(this.props.url)
      .then(result => {
        this.setState({ Details: result.Data });
      })
      .catch(errorMessage => {
        ToastsStore.error(errorMessage);
      });
  }
  render() {
    switch (this.state.Details.Type) {
      case "Request": {
        return (
          <React.Fragment>
            <div className="d-flex justify-content-center">
              <MDBListGroup className="w-75">
                <MDBListGroupItem className="py-1">
                  <span>Type</span>
                  <span className="float-right">{this.state.Details.Type}</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Date</span>
                  <span className="float-right">{this.state.Details.Date}</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Time</span>
                  <span className="float-right">{this.state.Details.Time}</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Blood Group</span>
                  <span className="float-right">
                    {this.state.Details.BloodGroup}
                  </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Sent to</span>
                  <span className="float-right">
                    {this.state.Details.SentTo} people
                  </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Seen by</span>
                  <span className="float-right">
                    {this.state.Details.SeenBy} people
                  </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Accepted by</span>
                  <span className="float-right">
                    {this.state.Details.AcceptedBy} people
                  </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Donor name</span>
                  <span className="float-right">
                    {this.state.Details.DonorName}
                  </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Current status</span>
                  <span className="float-right">
                    {this.state.Details.CurrentStatus}
                  </span>
                </MDBListGroupItem>
              </MDBListGroup>
            </div>
          </React.Fragment>
        );
      }
      case "Accept": {
        return (
          <React.Fragment>
            <div className="d-flex justify-content-center">
              <MDBListGroup className="w-75">
                <MDBListGroupItem className="py-1">
                  <span>Type</span>
                  <span className="float-right">{this.state.Details.Type}</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Request Date {"&"} Time</span>
                  <span className="float-right">
                    {this.state.Details.RequestTime}
                  </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Accept Date {"&"} Time</span>
                  <span className="float-right">
                    {this.state.Details.AcceptTime}
                  </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Blood Group</span>
                  <span className="float-right">
                    {this.state.Details.BloodGroup}
                  </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Request By</span>
                  <span className="float-right">
                    {this.state.Details.RequestBy}
                  </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Current status</span>
                  <span className="float-right">
                    {this.state.Details.CurrentStatus}
                  </span>
                </MDBListGroupItem>
              </MDBListGroup>
            </div>
          </React.Fragment>
        );
      }
      case "Donation": {
        return (
          <React.Fragment>
            <div className="d-flex justify-content-center">
              <MDBListGroup className="w-75">
                <MDBListGroupItem className="py-1">
                  <span>Type</span>
                  <span className="float-right">{this.state.Details.Type}</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Blood Group</span>
                  <span className="float-right">
                    {this.state.Details.BloodGroup}
                  </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Location</span>
                  <span className="float-right">
                    {this.state.Details.Location}
                  </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Date {"&"} Time</span>
                  <span className="float-right">{this.state.Details.Time}</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Request By</span>
                  <span className="float-right">
                    {this.state.Details.RequestBy}
                  </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Request Date {"&"} Time</span>
                  <span className="float-right">
                    {this.state.Details.RequestTime}
                  </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Accept Date {"&"} Time</span>
                  <span className="float-right">
                    {this.state.Details.AcceptTime}
                  </span>
                </MDBListGroupItem>
                <MDBListGroupItem className="py-1">
                  <span>Current status</span>
                  <span className="float-right">
                    {this.state.Details.CurrentStatus}
                  </span>
                </MDBListGroupItem>
              </MDBListGroup>
            </div>
          </React.Fragment>
        );
      }

      default: {
        return <div>No data to be displayed</div>;
      }
    }
  }
}
