import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

// ステートの型指定に使用
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
