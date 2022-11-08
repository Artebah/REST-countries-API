import { SET_THEME } from "./theme-actions";
const initialState = "light";

export const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_THEME:
      return payload;

    default:
      return state;
  }
};
