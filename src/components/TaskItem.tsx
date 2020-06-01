import React from "react";
import { Task } from "./Types";

// propsの型定義
type Props = {
  task: Task;
  handleDone: (task: Task) => void;
  handleDelete: (task: Task) => void;
};

// React.FC<Props>で使用するPropsの型定義を反映
const TaskItem: React.FC<Props> = ({ task, handleDone, handleDelete }) => {
  return (
    <li className={task.done ? "done" : ""}>
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          onClick={() => handleDone(task)}
          defaultChecked={task.done}
        />
        <span className="checkbox-label">{task.title}</span>
      </label>
      <button onClick={() => handleDelete(task)} className="btn is-delete">
        DELETE
      </button>
    </li>
  );
};

export default TaskItem;
