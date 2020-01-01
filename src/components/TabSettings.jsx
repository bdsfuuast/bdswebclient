import React, { Component } from "react";
import "../customSwitch.css";
import { MDBBtn, MDBIcon, MDBInput, MDBFileupload } from "mdbreact";
import { PostData } from "../services/PostData";
import { ToastsStore } from "react-toasts";
import { FetchData } from "../services/FetchData";
import Loader from "../Loader";

export class TabSettings extends Component {
  state = {
    OldPassword: "",
    NewPassword: "",
    RepeatPassword: "",
    ShowLoader: "none",
    PhotoData: "",
    Email: "",
    Contact: "",
    OrignalData: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  UploadPhoto = e => {
    e.preventDefault();
    if (!this.state.PhotoData.startsWith("data:image/")) {
      ToastsStore.error("Please select a valid image file.");
      return;
    }

    this.setState({ ShowLoader: "block" });
    PostData("UploadPhoto", { PhotoData: this.state.PhotoData }, 3000)
      .then(result => {
        sessionStorage.setItem("ProfilePhoto", this.state.PhotoData);
        this.props.Refresh();
        ToastsStore.info("Photo updated successfully.");
        this.setState({ ShowLoader: "none", PhotoData: "" });
      })
      .catch(errorMessage => {
        this.setState({ ShowLoader: "none" });
        ToastsStore.error(errorMessage);
      });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.NewPassword !== this.state.RepeatPassword) {
      ToastsStore.error("Password and Confirm password must match!");
      return;
    }
    this.setState({ ShowLoader: "block" });
    PostData("ProfileUpdate", this.state)
      .then(result => {
        this.setState({ ShowLoader: "none" });
        this.setState(result);
        ToastsStore.info("Profile updated successfully.");
      })
      .catch(errorMessage => {
        this.setState({ ShowLoader: "none" });
        ToastsStore.error(errorMessage);
      });
  };
  componentDidMount() {
    this.setState({ ShowLoader: "block" });
    FetchData("ProfileUpdate")
      .then(result => {
        this.setState(result);
        this.setState({ OrignalData: result.Contact + result.Email });
        this.setState({ ShowLoader: "none" });
      })
      .catch(errorMessage => {
        this.setState({ ShowLoader: "none" });
        ToastsStore.error(errorMessage);
      });
  }
  render() {
    const CanUpdate =
      !(this.state.OrignalData == this.state.Contact + this.state.Email) ||
      this.state.OldPassword.length >= 6;

    const CanUpload =
      this.state.PhotoData && this.state.PhotoData.startsWith("data:image/");
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h4>Change password</h4>
          <MDBInput
            label="Old Password"
            name="OldPassword"
            type="password"
            className="w-50"
            value={this.state.OldPassword}
            onChange={this.handleInputChange}
            labelClass={"customStyles"}
            maxLength="100"
            minLength="6"
          />
          <MDBInput
            label="New Password"
            name="NewPassword"
            type="password"
            className="w-50"
            value={this.state.NewPassword}
            onChange={this.handleInputChange}
            labelClass={"customStyles"}
            maxLength="100"
            minLength="6"
          />
          <MDBInput
            label="Repeat Password"
            name="RepeatPassword"
            type="password"
            className="w-50"
            value={this.state.RepeatPassword}
            onChange={this.handleInputChange}
            labelClass={"customStyles"}
            maxLength="100"
            minLength="6"
          />
          <br></br>
          <hr></hr>
          <br></br>
          <h4>Update contact</h4>
          <MDBInput
            label="Contact"
            name="Contact"
            className="w-50"
            value={this.state.Contact}
            onChange={this.handleInputChange}
            labelClass={"customStyles"}
            required
            maxLength="100"
          />
          <MDBInput
            label="Email"
            name="Email"
            className="w-50"
            value={this.state.Email}
            onChange={this.handleInputChange}
            labelClass={"customStyles"}
            type="email"
            required
            maxLength="100"
          />
          <br></br>
          <hr></hr>
          <br></br>
          <h4>Profile Photo</h4>
          {this.FileUplod()}

          <MDBBtn
            className="btn btn-outline-purple"
            onClick={this.UploadPhoto}
            disabled={!CanUpload}
          >
            Upload <i className="fas fa-upload"></i>
          </MDBBtn>
          <div className="text-center py-4 mt-3">
            <MDBBtn
              className="btn btn-outline-purple"
              type="submit"
              disabled={!CanUpdate}
            >
              Save Changes
              <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
          </div>
        </form>
        <Loader ShowLoader={this.state.ShowLoader}></Loader>
      </React.Fragment>
    );
  }
  FileUplod = () => {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupFileAddon01">
            Upload
          </span>
        </div>
        <div className="custom-file">
          <input
            onChange={this.onChangeFile}
            type="file"
            aria-describedby="inputGroupFileAddon01"
            id="inputGroupFile01"
            accept="image/*"
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            Choose file
          </label>
        </div>
      </div>
    );
  };
  onChangeFile = e => {
    if (!e.target.files[0]) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (!reader.result.startsWith("data:image/")) {
        ToastsStore.error("Please select a valid image file.");
        return;
      }
      this.reduceImgSize(reader.result, reducedImg => {
        if (reducedImg.length > 2097150) {
          ToastsStore.error("File Size is too large.");
          return;
        }
        this.setState({ PhotoData: reducedImg });
      });
    };
    reader.onerror = error => {
      console.log("Error: ", error);
    };
  };

  reduceImgSize = (imgData, callBack) => {
    var img = new Image();
    img.onload = function() {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var width, height;
      var maxWidth = 600;
      var origWidth = img.width;
      var origHeight = img.height;
      var ratio = 0;
      ratio = maxWidth / origWidth;
      ratio = ratio < 1 ? ratio : 1;
      height = origHeight * ratio;
      width = origWidth * ratio;
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      var dataURI = canvas.toDataURL();

      callBack(dataURI);
    };
    img.src = imgData;
  };
}

// handleSwitchChange = nr => () => {
//   let switchNumber = `switch${nr}`;
//   this.setState({
//     [switchNumber]: !this.state[switchNumber]
//   });
// };
/* <div className="container">
        <div className="container" align="right">
          <MDBBadge color="light" className="m-2">
            Status:
          </MDBBadge>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </label>
        </div>

        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup className="p-3">
                <ListGroup.Item
                  action
                  variant="danger"
                  href="#show-profile-tab"
                >
                  Profile
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  variant="danger"
                  href="#show-privacy-tab"
                >
                  Privacy
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  variant="danger"
                  href="#show-security-tab"
                >
                  Security
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#show-profile-tab">
                  <ListGroup className="float-left" variant="flush">
                    <ListGroup.Item>
                      <Image
                        className=" float-right"
                        width="300px"
                        src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                        rounded
                      />
                    </ListGroup.Item>
                    <ListGroup.Item>Hmza Mughal</ListGroup.Item>
                    <ListGroup.Item>BS - Computer Science</ListGroup.Item>
                    <ListGroup.Item>+92 347 1866623</ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="#show-privacy-tab">
                  <ListGroup className="float-left" variant="flush">
                    <ListGroup.Item>Profile</ListGroup.Item>
                    <ListGroup.Item>Phone Number</ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
                <Tab.Pane eventKey="#show-security-tab">
                  <ListGroup className="float-left" variant="flush">
                    <ListGroup.Item>Change Password</ListGroup.Item>
                  </ListGroup>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div> */
