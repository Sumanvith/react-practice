import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "./nameSlice";
import todoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    name: nameSlice,
    todo: todoSlice,
  },
});

export default store;
