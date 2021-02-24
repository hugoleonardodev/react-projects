import { FILTER_FAVORITES_READ } from "../actions/filterFavoritesRead";
import { defineState } from "redux-localstore";

const defaultState = {
  filter: "",
};

const initialState = defineState(defaultState)("filterFavoritesReadReducer");

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FILTER_FAVORITES_READ:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};
