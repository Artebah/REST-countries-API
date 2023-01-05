import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCountry = createAsyncThunk(
  "@@details/load-country",
  async (name, { extra: { api, client } }) => {
    const res = await client.get(api.searchByCountry(name));
    return res.data[0];
  }
);

export const loadNeighbours = createAsyncThunk(
  "@details/load-neighbours",
  async (borders, { extra: { api, client } }) => {
    console.log(borders);
    const res = await client.get(api.filterByCode(borders));
    const data = res.data.map((country) => country.name);
    return data;
  }
);

const initialState = {
  status: "idle",
  error: null,
  country: null,
  neighbours: [],
};

const detailsSlice = createSlice({
  name: "@@details",
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(loadCountry.pending, (state, action) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(loadCountry.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload || action.error.message;
    });
    builder.addCase(loadCountry.fulfilled, (state, action) => {
      state.status = "received";
      state.country = action.payload;
    });
    builder.addCase(loadNeighbours.fulfilled, (state, action) => {
      state.status = "received";
      state.neighbours = action.payload;
    });
    builder.addCase(loadNeighbours.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(loadNeighbours.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload || action.error.message;
    });
  },
});

export const { clearDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;

export const selectDetails = (state) => state.details;
export const selectCurrentCountry = (state) => state.details.country;
export const selectNeighbours = (state) => state.details.neighbours;
