export const REQUEST_SHOWS = 'REQUEST_SHOWS';
export const RECEIVE_SHOWS = 'RECEIVE_SHOWS';

// action creator que retorna um objeto, que você tem feito até então
const requestShows = () => ({
  type: REQUEST_SHOWS});

// outro action creator que retorna um objeto, que você tem feito até então
const receiveShows = (shows) => ({
  type: RECEIVE_SHOWS,
  shows});

// action creator que retorna uma função, possível por conta do pacote redux-thunk
export function fetchShows() {
  return async (dispatch) => { // thunk declarado
    dispatch(requestShows());
    return await fetch('http://api.tvmaze.com/search/shows?q=aliens')
      .then((response) => response.json())
      .then((shows) => dispatch(receiveShows(shows)));
  };
}

// export const CHANGE_SIGNAL = 'CHANGE_SIGNAL';
// export const MOVE_CAR = 'MOVE_CAR';
// // action que altera a cor do sinal; payload poderia se chamar qualquer coisa, tipo color ou xablau
// export const changeSignal = (payload) => ({
//   type: CHANGE_SIGNAL,
//   payload,
// });
// // action que altera o movimento dos carrinhos no estado global
// export const moveCar = (car, side) => ({
//   type: MOVE_CAR,
//   car,
//   side,
// });
