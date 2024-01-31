import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
    };
    this.changefullName = this.changefullName.bind(this);
    this.changeUsername = this.changefUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changefullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }

  changefUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    if (
      !this.state.fullName ||
      !this.state.username ||
      !this.state.email ||
      !this.state.password
    ) {
      // If any field is empty, show an alert
      alert("Please fill out all the fields.");
      return; // Exit the function early
    }

    const connection = {
      fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://localhost:4000/app/signup", connection)
      .then((res) => {
        console.log(res.data);
        alert("Submitted successfully");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
    this.setState({
      fullName: "",
      username: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
              <div className="form-div border rounded px-5">
                <form on onSubmit={this.onSubmit}>
                  <br></br>
                  <input
                    type="text"
                    placeholder="Enter fullName"
                    onChange={this.changefullName}
                    value={this.state.fullName}
                    className="form-control form-group"
                  />

                  <input
                    type="text"
                    placeholder="Enter username"
                    onChange={this.changeUsername}
                    value={this.state.username}
                    className="form-control form-group"
                  />

                  <input
                    type="text"
                    placeholder="Enter email"
                    onChange={this.changeEmail}
                    value={this.state.email}
                    className="form-control form-group"
                  />

                  <input
                    type="text"
                    placeholder="Enter password"
                    onChange={this.changePassword}
                    value={this.state.password}
                    className="form-control form-group"
                  />

                  <br></br>
                  <center>
                    <input
                      type="submit"
                      className="btn btn-danger btn-block"
                      value="Submit"
                    />
                  </center>
                </form>
              </div>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
