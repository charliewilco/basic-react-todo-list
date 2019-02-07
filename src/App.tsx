import * as React from "react";
import { ListView, INITIAL_LIST } from "./list-view";

const App: React.FC<{}> = function(props) {
  return (
    <div className="Container">
      <h1>Add a Task</h1>
      <ListView initialTasks={INITIAL_LIST} />
    </div>
  );
};

export default App;
