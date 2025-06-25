import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  uiEntities: [],
};

export const uiEntities = createSlice({
  name: "uiEntites",
  initialState,
  reducers: {
    setUiEntities: (state, action) => {
      state.uiEntities = action.payload;
    },
    resetEntities: (state, action) => {
      state.uiEntities = [];
    },
  },
});

export const { setUiEntities, resetEntities } = uiEntities.actions;

export default uiEntities.reducer;
