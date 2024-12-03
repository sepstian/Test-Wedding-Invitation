import { configureStore } from "@reduxjs/toolkit";
import openSlice from "./slice/openSlice";
import navbarSlice from "./slice/navbarSlice";
import musicSlice from "./slice/musicSlice";

export const globalState = configureStore({
    reducer: {
      openSlice,
      navbarSlice,
      musicSlice
    },
  });