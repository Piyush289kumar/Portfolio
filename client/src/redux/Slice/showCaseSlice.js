import { createSlice } from "@reduxjs/toolkit";

const showCaseSlice = createSlice({
  name: "showCase",
  initialState: {
    project: [],
    skill: [],
  },
  reducers: {
    setProject: (state, action) => {
      state.project = action.payload;
    },
    setSkill: (state, action) => {
      state.skill = action.payload;
    },
  },
});

export const { setProject, setSkill } = showCaseSlice.actions;
export default showCaseSlice.reducer;
