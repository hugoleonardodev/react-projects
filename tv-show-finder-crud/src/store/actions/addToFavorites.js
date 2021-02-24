export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export const addToFavorites = (show, favorites) =>({
  a: console.log(favorites),
  b: console.log(show),
  type: ADD_TO_FAVORITES,
  favorites: [...show, favorites]
});
