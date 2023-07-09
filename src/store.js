import { configureStore } from "@reduxjs/toolkit";
import sharepointReducer from "./checkCollection";

const store = configureStore({
  reducer: {
    sharepoint: sharepointReducer,
  },
});

export default store;