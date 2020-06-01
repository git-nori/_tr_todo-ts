import { combineReducers } from "@reduxjs/toolkit";
import TasksReducer from "../features/tasks/tasksSlice";

const rootReducer = combineReducers({
  tasks: TasksReducer,
});

// ステートの型指定に使用
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
