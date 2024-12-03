import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
    name: "music",
    initialState: {
      music: false
    },
    reducers: {
      setMusic: (state, action) => {
        state.music = action.payload;
      },
    },
  });
  
  export const {setMusic} = musicSlice.actions
  export default musicSlice.reducer