import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Navbar from "./Navbar";
import "./Navbar.css";
import "./Home.css";
import "./App.css";

class App extends Component {
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
    const connection = {
      fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://localhost:4000/app/signup", connection)
      .then((res) => console.log(res.data));
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
        <Navbar />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
