import { ADD_TO_FAVORITES } from "../actions/addToFavorites";
import { defineState } from "redux-localstore";

const defaultState = {
  favorites: [],
};

const initialState = defineState(defaultState)("addToFavoritesReducer");

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };
    default:
      return state;
  }
};
