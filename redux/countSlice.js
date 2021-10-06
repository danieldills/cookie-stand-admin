import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    changeCount(state, action) {
      state.value = action.payload;
    },
  },
});

const { actions, reducer } = countSlice;
export const { changeCount } = actions;
export default reducer;
