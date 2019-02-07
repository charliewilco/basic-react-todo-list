import * as React from "react";
import { ListView, INITIAL_LIST } from "./list-view";
import "./App.css";

const App: React.FC<{}> = function(props) {
  return (
    <div className="Container">
      <h1>Add a Todo</h1>
      <ListView initialTasks={INITIAL_LIST} />
    </div>
  );
};

export default App;
