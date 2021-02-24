import { ADD_TO_FAVORITES } from "../actions/addToFavorites";
import { defineState } from "redux-localstore";

// const initialState = {
//   favorites: [],
//   // fetching: true
// };

// export default function addToFavoritesReducer(state = initialState, action) {
//   console.log(action);
//   switch (action.type) {
//     case ADD_TO_FAVORITES:
//       return { ...state, favorites: action.favorites };
//     default:
//       return state;
//   }
// }

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
