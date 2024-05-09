import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggin: false,
    logginUserEmail: "",
  },
  reducers: {
    login: (state) => {
      state.isLoggin = true;
    },
    logout: (state) => {
      state.isLoggin = false;
    },
    setLoginUserEmail: (state, action) => {
      state.logginUserEmail = action.payload;
    },
  },
});

export const { login, logout, setLoginUserEmail } = authSlice.actions;
export default authSlice.reducer;
