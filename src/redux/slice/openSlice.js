import { createSlice } from "@reduxjs/toolkit";

const openSlice = createSlice({
    name: "open",
    initialState: {
      open: false
    },
    reducers: {
      open_true: (state, action) => {
        state.open = true;
      },
      open_false: (state, action) => {
        state.open = false
      },
    },
  });
  
  export const {open_true, open_false} = openSlice.actions
  export default openSlice.reducer