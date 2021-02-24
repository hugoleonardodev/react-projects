export const REQUEST_SHOWS = 'REQUEST_SHOWS';
export const RECEIVE_SHOWS = 'RECEIVE_SHOWS';

const requestShows = () => ({
  type: REQUEST_SHOWS,
  query: ''
});

const receiveShows = (shows) => ({
  type: RECEIVE_SHOWS,
  shows
});

// action creator returns a function, available in redux-thunk package
export function fetchShows(query) {
  return async (dispatch) => { // thunk declared
    dispatch(requestShows());
    return await fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
      .then((response) => response.json())
      .then((shows) => dispatch(receiveShows(shows)));
  };
}
