import { RECEIVE_SHOWS, REQUEST_SHOWS } from './actionCreators';
// estado inicial dos carros que vai junto com o outro estado no objeto do estado global
const initialState = {
  query: "",
  shows: [],
  favorites: [],
  fetching: true
};
// reducer que executa a action e alter de fato o estado inicial dos carros
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SHOWS:
      return { ...state, shows: [...state.shows, action.shows] };
    case RECEIVE_SHOWS:
      return { ...state, shows: [...state.shows, action.shows] };
    default:
      return state;
  }
}
