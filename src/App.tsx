import React, { useState } from "react";
import "./App.css";

import TaskInput from "./features/tasks/TaskInput";
import TaskList from "./features/tasks/TaskList";
import { Task } from "./features/tasks/Types";

const initialState: Task[] = [
  {
    id: 2,
    title: "next task",
    done: false,
  },
  {
    id: 1,
    title: "first task",
    done: true,
  },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <div>
      <TaskInput setTasks={setTasks} tasks={tasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
    </div>
  );
};

export default App;
