import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const checkCollection = createAsyncThunk(
  "sharepoint/checkCollection",
  async () => {
    try {
      const reponse = await axios.get("http://localhost:5001/use-collection");
      if (reponse.data.haveCollection === true) {
        localStorage.removeItem("haveCollection");
        return reponse.data.haveCollection;
      }
    } catch (error) {}
  }
);
export const createNewCollection = createAsyncThunk(
  "sharepoint/createNewCollection",
  async () => {
    try {
      const reponse = await axios.post(
        "http://localhost:5001/create-new-collection"
      );
      if (reponse.data) {
        localStorage.setItem("haveCollection",true);
        return reponse.data.message;
      }
    } catch (error) {}
  }
);

const sharepointSlice = createSlice({
  name: "sharepoint",
  initialState: {
    check: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkCollection.pending, (state, action) => {})
      .addCase(checkCollection.fulfilled, (state, action) => {
        state.check = action.payload;
      })
      .addCase(checkCollection.rejected, (state, action) => {});
  },
});
const sharepointReducer = sharepointSlice.reducer;

export default sharepointReducer;
