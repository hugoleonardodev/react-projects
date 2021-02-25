export const HANDLE_INPUT = "HANDLE_INPUT";
export const CREATE_NEW_SHOW = "CREATE_NEW_SHOW";

export const handleInput = (position, input) => ({
  type: HANDLE_INPUT,
  [position]: input,
});

export const createNewShow = (favorites, newShow) => ({
  type: CREATE_NEW_SHOW,
  favorites: [...favorites, newShow],
});
