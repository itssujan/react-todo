import React, { Component } from "react";

import TaskList from "./tasklist";
import TodoStats from "./todostats";
import TaskInputForm from "./taskinputform";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, name: "Task 1", isCompleted: false },
        { id: 2, name: "Task 2", isCompleted: true },
        { id: 3, name: "Task 3", isCompleted: false }
      ]
    };
    this.onToggleTaskStatus = this.onToggleTaskStatus.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  onToggleTaskStatus(task) {
    let taskIndex = this.state.tasks.findIndex(obj => obj.id == task.id);
    let updatedTasks = this.state.tasks;
    updatedTasks[taskIndex].isCompleted = !updatedTasks[taskIndex].isCompleted;
    console.log("updating state from toggle");
    this.setState({
      tasks: updatedTasks
    });
  }

  addTask(taskDescripton) {
    let updatedTasks = this.state.tasks;
    updatedTasks.push({
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: taskDescripton,
      isCompleted: false
    });
    this.setState({
      tasks: updatedTasks
    });
  }

  render() {
    return (
      <div>
        <TodoStats tasks={this.state.tasks} />
        <TaskList
          tasks={this.state.tasks}
          onToggleTaskStatus={this.onToggleTaskStatus}
        />
        <TaskInputForm addTask={this.addTask} />
      </div>
    );
  }
}
