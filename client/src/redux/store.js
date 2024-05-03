import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./Slice/navSlice";
import pageSlice from "./Slice/pageSlice";

const store = configureStore({
  reducer: {
    nav: navSlice,
    page: pageSlice,
  },
});

export default store;
