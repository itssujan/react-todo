import React, { Component } from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
export default class TodoStats extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col xs={6} md={4}>
          Total Tasks : {this.props.tasks.length}
        </Col>
        <Col xs={6} md={4}>
          Tasks Completed :
          {this.props.tasks.reduce((sum, task) => {
            console.log(sum);
            return task.isCompleted ? sum + 1 : sum;
          }, 0)}
        </Col>
        <Col xsHidden md={4}>
          Pending Tasks :
          {this.props.tasks.reduce((sum, task) => {
            console.log(sum);
            return !task.isCompleted ? sum + 1 : sum;
          }, 0)}
        </Col>
      </Row>
    );
  }
}

TodoStats.propTypes = {
  tasks: PropTypes.array
};
