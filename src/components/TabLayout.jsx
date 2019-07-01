import React, { Component } from "react";
import { MDBContainer } from "mdbreact";

export class TabLayout extends Component {
  render() {
    const width = this.props.width !== undefined ? this.props.width : "75";
    return (
      <MDBContainer>
        <div className="d-flex justify-content-center">
          <div className={"p-3 w-" + width}>{this.props.children}</div>
        </div>
      </MDBContainer>
    );
  }
}
