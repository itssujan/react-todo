import React, { Component } from "react";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button
} from "react-bootstrap";

export default class TaskInputForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: ""
    };
    this.baseState = this.state;
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 0) return "success";
    else return "error";
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit() {
    this.props.addTask(this.state.value);
    this.setState(this.baseState);
  }

  render() {
    return (
      <Form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Add your new task</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter task"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}
