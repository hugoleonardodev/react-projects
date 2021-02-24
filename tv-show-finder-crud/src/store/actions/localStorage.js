export const loadState = () => {
  try {
    const favorites = localStorage.getItem("favorites");
    console.log("loadState", favorites);
    if (favorites === null) {
      return undefined;
    }
    return JSON.parse(favorites);
  } catch (err) {
    console.error(err);
  }
};

export const saveState = (state) => {
  try {
    const favorites = JSON.stringify(state);
    console.log("saveState", favorites);
    localStorage.setItem("favorites", favorites);
  } catch (err) {
    console.error(err);
  }
};
