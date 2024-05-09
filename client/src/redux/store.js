import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./Slice/navSlice.js";
import pageSlice from "./Slice/pageSlice.js";
import showCaseSlice from "./Slice/showCaseSlice.js";
import authSlice from "./Slice/authSlice.js";

const store = configureStore({
  reducer: {
    nav: navSlice,
    page: pageSlice,
    showcase: showCaseSlice,
    auth: authSlice,
  },
});

export default store;
