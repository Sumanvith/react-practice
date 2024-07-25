import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
  },
});

export const { addItem } = todoSlice.actions;

export default todoSlice.reducer;
