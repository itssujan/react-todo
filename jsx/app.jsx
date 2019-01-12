import React, { Component } from "react";
import ReactDOM from "react-dom";

import Todo from "./todo";
import WelcomeMessage from "./welcomemessage";

export default class App extends Component {
  render() {
    return (
      <div>
        <WelcomeMessage />
        <Todo />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
