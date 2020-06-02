import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "./Types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { AppDispatch } from "../../app/store";
import { doneTask, deleteTask } from "./tasksSlice";

const TaskList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const tasks: Task[] = useSelector((state: RootState) => state.tasks.tasks);

  const handleDone = (task: Task) => {
    dispatch(doneTask(task));
  };

  const handleDelete = (task: Task) => {
    dispatch(deleteTask(task));
  };

  return (
    <div className="inner">
      {tasks.length <= 0 ? (
        "dont exists todo"
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleDone={handleDone}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
