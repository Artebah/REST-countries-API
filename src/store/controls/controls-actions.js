export const SET_SEARCH = "@@controls/SET_SEARCH";

export const setSearch = (searchString) => ({
  type: SET_SEARCH,
  payload: searchString,
});
