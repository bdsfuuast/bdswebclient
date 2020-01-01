import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { Redirect } from "react-router-dom";

export default class AppNavbar extends Component {
  state = {
    collapseID: "",
    Logout: false
  };
  Logout = () => {
    //alert("logout");
    sessionStorage.clear();
    this.setState({ Logout: true });
  };
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    if (this.state.Logout) return <Redirect to="/" />;
    return (
      <MDBNavbar color="red" dark expand="md" style={{ minWidth: "690px" }}>
        <MDBNavbarBrand>
          <strong className="white-text">Blood Donation Society</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle className="dopdown-toggle" nav>
                  <img
                    src={this.props.ProfilePhoto}
                    className="rounded-circle z-depth-0"
                    style={{ height: "35px", width: "35px", padding: 0 }}
                    alt=""
                  />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="#" onClick={this.Logout}>
                    Log out
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
