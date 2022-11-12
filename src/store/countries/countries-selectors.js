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
