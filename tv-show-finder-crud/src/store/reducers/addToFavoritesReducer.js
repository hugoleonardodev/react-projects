import { ADD_TO_FAVORITES } from "../actions/addToFavorites";

const initialState = {
  favorites: [],
  // fetching: true
};

export default function addToFavoritesReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return { ...state, favorites: action.favorites };
    default:
      return state;
  }
}
