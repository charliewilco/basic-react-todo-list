import React from "react";
import ReactDOM from "react-dom";
import { ListView, INITIAL_LIST } from "./list-view";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="Container">
    <h1>Add a Task</h1>
    <ListView initialTasks={INITIAL_LIST} />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
