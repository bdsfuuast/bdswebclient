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
class NavbarPage extends Component {
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
      <MDBNavbar color="red" dark expand="md" style={{ marginTop: "20px" }}>
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
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                    className="rounded-circle z-depth-0"
                    style={{ height: "35px", padding: 0 }}
                    alt=""
                  />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="#">My account</MDBDropdownItem>
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

export default NavbarPage;
/*
<MDBNavItem>
                <MDBPopover placement="bottom" popover clickable id="popper2">
                  <MDBNavLink
                    className="waves-effect waves-light d-flex align-items-center"
                    to="#!"
                  >
                    1
                    <MDBIcon icon="envelope" className="ml-1" />
                  </MDBNavLink>
                  <div>
                    <MDBPopoverHeader>popover on top</MDBPopoverHeader>
                    <MDBPopoverBody>
                      Sed posuere consectetur est at lobortis. Aenean eu leo
                      quam. Pellentesque ornare sem lacinia quam venenatis
                      vestibulum.
                    </MDBPopoverBody>
                  </div>
                </MDBPopover>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  className="waves-effect waves-light d-flex align-items-center"
                  to="#!"
                >
                  1
                  <MDBIcon icon="envelope" className="ml-1" />
                </MDBNavLink>
              </MDBNavItem>
              */
