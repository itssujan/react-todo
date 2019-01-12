import React, { Component } from "react";
import { Alert } from "react-bootstrap";

export default class WelcomeMessage extends Component {
  render() {
    return (
      <Alert bsStyle="warning">
        <strong>Hello Welcome to your task manager!</strong>
        <p>
          Add new tasks by adding description and submitting the form or
          complete existing tasks by just clicking on the task
        </p>
      </Alert>
    );
  }
}
