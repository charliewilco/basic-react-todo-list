import React from "react";
import ReactDOM from "react-dom";
import { ListView, INITIAL_LIST } from "./list-view";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <div className="Container">
      <h1>Add a Task</h1>
      <ListView initialTasks={INITIAL_LIST} />
    </div>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
