import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./Slice/NavSlice";

const store = configureStore({
  reducer: {
    nav: navSlice,
  },
});

export default store;
