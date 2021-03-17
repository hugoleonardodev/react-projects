import { HANDLE_INPUT, CREATE_NEW_SHOW } from "../actions/createNewShow";
import { defineState } from "redux-localstore";
import { act } from "@testing-library/react";

const defaultState = {
  favorites: [],
  name: "",
  genres: [],
  status: "",
  site: "",
};

const initialState = defineState(defaultState)("addToFavoritesReducer");

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_INPUT:
      return {
        ...state,
        [Object.keys(action)[1]]: Object.values(action)[1],
      };
    default:
      return state;
  }
};
