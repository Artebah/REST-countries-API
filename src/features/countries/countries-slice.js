import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCountries = createAsyncThunk(
  "@@countries/load-countries",
  async (_, { extra: { api, client }, rejectWithValue }) => {
    try {
      const res = await client.get(api.ALL_COUNTRIES);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  status: "idle",
  err: null,
  list: [],
};

const countriesSlice = createSlice({
  name: "@@countries",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loadCountries.pending, (state, action) => {
      state.status = "loading";
      state.err = null;
    });
    builder.addCase(loadCountries.rejected, (state, action) => {
      state.status = "rejected";
      state.err = action.payload || action.error.message;
    });
    builder.addCase(loadCountries.fulfilled, (state, action) => {
      state.status = "received";
      state.list = action.payload;
    });
  },
});

export const countriesReducer = countriesSlice.reducer;

export const selectCountriesInfo = (state) => ({
  countriesCount: state.countries.list.length,
  err: state.countries.err,
  status: state.countries.status,
});

export const selectAllCountries = (state) => state.countries.list;
export const selectFilteredCountries = (state, { search, region }) =>
  state.countries.list.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      country.region.includes(region)
  );
