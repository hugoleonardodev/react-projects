export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export const addToFavorites = (favorites, show) => ({
  a: console.log(favorites),
  b: console.log(show),
  type: ADD_TO_FAVORITES,
  favorites: [...favorites, show],
});
