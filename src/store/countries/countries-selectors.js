export const selectCountriesInfo = (state) => ({
  countriesCount: state.countries.list.length,
  err: state.countries.err,
  status: state.countries.status,
});

export const selectAllCountries = (state) => state.countries.list;
