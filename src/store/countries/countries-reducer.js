import { SET_COUNTRIES, SET_LOADING, SET_ERROR } from "./countries-actions";

const initialState = {
  status: "idle", // loading | received | rejected
  err: null,
  list: [],
};

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES:
      return { ...state, status: "received", list: payload };
    case SET_LOADING:
      return { ...state, status: "loading" };
    case SET_ERROR:
      return { ...state, status: "rejected", err: payload };
    default:
      return state;
  }
};
