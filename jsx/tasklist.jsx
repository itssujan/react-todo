import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import Task from "./task";

export default class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  onToggleTaskStatus(task) {
    return this.props.onToggleTaskStatus(task);
  }

  render() {
    let tasklist = this.props.tasks.map((task, index) => {
      return (
        <ListGroupItem key={index}>
          <Task
            task={task}
            onToggleTaskStatus={this.props.onToggleTaskStatus}
          />
        </ListGroupItem>
      );
    });

    return <ListGroup> {tasklist} </ListGroup>;
  }
}
