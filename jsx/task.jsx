import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onToggleTaskStatus(this.props.task);
  }

  render() {
    return this.props.task.isCompleted ? (
      <span onClick={this.handleClick}>
        <strike>{this.props.task.name}</strike>
      </span>
    ) : (
      <span onClick={this.handleClick}>{this.props.task.name}</span>
    );
  }
}

Task.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  isCompleted: PropTypes.bool
};
