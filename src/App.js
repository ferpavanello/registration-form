import React, { Component } from "react";
import "./App.css";
import RegistrationForm from "./components/registration-form/RegistrationForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Registration Form</h1>
        <RegistrationForm />
      </React.Fragment>
    );
  }
}

export default App;
