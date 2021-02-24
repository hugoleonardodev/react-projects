export const FILTER_FAVORITES_READ = "FILTER_FAVORITES_READ";

export const filterFavoritesRead = (input) => ({
  type: FILTER_FAVORITES_READ,
  filter: input,
});
