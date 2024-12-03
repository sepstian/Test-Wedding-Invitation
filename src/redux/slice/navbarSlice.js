import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
    name: "navbar",
    initialState: {
      navbar: false
    },
    reducers: {
      navbar_true: (state, action) => {
        state.navbar = true;
      },
      navbar_false: (state, action) => {
        state.navbar = false
      },
    },
  });
  
  export const {navbar_true, navbar_false} = navbarSlice.actions
  export default navbarSlice.reducer