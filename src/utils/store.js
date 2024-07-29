import { configureStore } from "@reduxjs/toolkit";
import nameSlice from "./nameSlice";
import todoSlice from "./todoSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    name: nameSlice,
    todo: todoSlice,
    search: searchSlice,
  },
});

export default store;
