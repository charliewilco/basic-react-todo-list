import React, { Component } from 'react';
import { TodoItem, ListView, INITIAL_LIST } from "./list-view";
import './App.css';

class App extends Component {
  render() {
    return (
      <ListView initialTasks={INITIAL_LIST} />
    );
  }
}

export default App;
