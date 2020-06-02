import React, { useState } from "react";
import "./App.css";

import TaskInput from "./features/tasks/TaskInput";
import TaskList from "./features/tasks/TaskList";
import { Task } from "./features/tasks/Types";

const App: React.FC = () => {
  return (
    <div>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
