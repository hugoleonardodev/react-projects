export const CHANGE_SIGNAL = 'CHANGE_SIGNAL';
export const MOVE_CAR = 'MOVE_CAR';
// action que altera a cor do sinal; payload poderia se chamar qualquer coisa, tipo color ou xablau
export const changeSignal = (payload) => ({
  type: CHANGE_SIGNAL,
  payload,
});
// action que altera o movimento dos carrinhos no estado global
export const moveCar = (car, side) => ({
  type: MOVE_CAR,
  car,
  side,
});
