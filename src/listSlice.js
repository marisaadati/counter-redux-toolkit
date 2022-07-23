import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      text: "wash the car",
      isDone: true,
    },
    {
      text: "walk the dog",
      isDone: false,
    },
  ],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    done: (state, action) => {
      state.list[action.payload].isDone = !state.list[action.payload].isDone;
    },
    remove: (state, action) => {
      state.list.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, done, remove } = listSlice.actions;

export default listSlice.reducer;
