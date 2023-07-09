import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const checkCollection = createAsyncThunk(
  "sharepoint/checkCollection",
  async () => {
    try {
      const reponse = await axios.get("http://localhost:5001/use-collection");
      if (reponse.data.haveCollection===true) {
        localStorage.removeItem("haveCollection");
        return reponse.data;
      }
    } catch (error) {}
  }
);

const sharepointSlice = createSlice({
  name: "sharepoint",
  initialState: {
    haveCollection: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkCollection.pending, (state, action) => {

      })
      .addCase(checkCollection.fulfilled, (state, action) => {})
      .addCase(checkCollection.rejected, (state, action) => {});
  },
});
const sharepointReducer = sharepointSlice.reducer;

export default sharepointReducer;