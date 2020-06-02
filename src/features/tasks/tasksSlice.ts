import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "./Types";

type State = {
  count: number;
  tasks: Task[];
};

const initialState: State = {
  count: 2,
  tasks: [
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
  ],
};

const tasksSlice = createSlice({
  // createSliceを識別するためのname
  name: "tasks",
  initialState,
  reducers: {
    addTask(state: State, action: PayloadAction<string>) {
      state.count++;

      const newTask: Task = {
        id: state.count,
        title: action.payload,
        done: false,
      };
      state.tasks.push(newTask)
    },
    doneTask(state: State, action: PayloadAction<Task>) {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.done = !task.done;
      }
    },
    deleteTask(state: State, action: PayloadAction<Task>) {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { addTask, doneTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
