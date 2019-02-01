import React, { Component } from "react";
import { TodoItem, ListView, INITIAL_LIST } from "./list-view";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Container">
        <h1>Add a Todo</h1>
        <ListView initialTasks={INITIAL_LIST} />
      </div>
    );
  }
}

export default App;
