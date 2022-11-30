export const SET_LOADING = "@@details/SET_LOADING";
export const SET_ERROR = "@@details/SET_ERROR";
export const SET_COUNTRY = "@@details/SET_COUNTRY";
export const CLEAR_DETAILS = "@@details/CLEAR_DETAILS";

const setLoading = () => ({
  type: SET_LOADING,
});
const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});
const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});
export const clearDetails = () => ({
  type: CLEAR_DETAILS,
});

export const loadCountry =
  (name) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());

    client
      .get(api.searchByCountry(name))
      .then((obj) => {
        dispatch(setCountry(obj.data[0]));
      })
      .catch((error) => dispatch(setError(error.message)));
  };