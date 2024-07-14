import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: [],
  reducers: {
    addName: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
  },
});

export const { addName } = nameSlice.actions;

export default nameSlice.reducer;
