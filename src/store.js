import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import listReducer from "./listSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    list: listReducer,
  },
});
