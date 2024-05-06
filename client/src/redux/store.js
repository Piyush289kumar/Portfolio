import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./Slice/navSlice.js";
import pageSlice from "./Slice/pageSlice.js";

const store = configureStore({
  reducer: {
    nav: navSlice,
    page: pageSlice,
  },
});

export default store;
