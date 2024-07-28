import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      if (!state.includes(action.payload) && action.payload) {
        state.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const index = state.indexOf(action.payload);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addItem, removeItem } = todoSlice.actions;

export default todoSlice.reducer;
