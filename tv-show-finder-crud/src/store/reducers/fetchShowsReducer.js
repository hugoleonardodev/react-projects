import { RECEIVE_SHOWS, REQUEST_SHOWS } from '../actions/fetchShows';
// estado inicial dos carros que vai junto com o outro estado no objeto do estado global
const initialState = {
  // query: "",
  shows: [],
  favorites: [],
  fetching: false
};
// reducer que executa a action e alter de fato o estado inicial dos carros
export default function fetchShowsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SHOWS:
      return { ...state, fetching: true }; // need fix
    case RECEIVE_SHOWS:
      return { ...state, shows: action.shows, fetching: true };
    default:
      return state;
  }
}
