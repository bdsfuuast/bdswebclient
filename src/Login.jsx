import React, { Component } from "react";
import { MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBContainer } from "mdbreact";
import { LoginService } from "./services/LoginService";
import { Redirect } from "react-router-dom";
import { ToastsContainer, ToastsStore } from "react-toasts";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "m1@g.c",
      password: "123",
      redirectToHome: false
    };
  }
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    LoginService(this.state)
      .then(result => {
        this.setState({ redirectToHome: result });
      })
      .catch(errorMessage => {
        ToastsStore.error(errorMessage);
      });
  };

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/home" />;
    }
    return (
      <React.Fragment>
        <MDBContainer>
          <div className="w-responsive mx-auto p-3 mt-2 w-50">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.handleSubmit}>
                  <p className="h5 text-center mb-4">Sign in</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      name="username"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.username}
                      onChange={this.handleInputChange}
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      name="password"
                      validate
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                    <div className="container" align="right">
                      <a href="#">Forgot Password</a>
                    </div>
                  </div>
                  <div className="text-center">
                    <MDBBtn type="submit">Login</MDBBtn>
                  </div>
                </form>
                Register a new <a href="#">Account</a>
              </MDBCardBody>
            </MDBCard>
          </div>
        </MDBContainer>
        <ToastsContainer store={ToastsStore} />
      </React.Fragment>
    );
  }
}
