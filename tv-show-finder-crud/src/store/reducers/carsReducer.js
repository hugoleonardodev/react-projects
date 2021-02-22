import { MOVE_CAR } from '../actionCreators';
// estado inicial dos carros que vai junto com o outro estado no objeto do estado global
const carsInitialState = {
  cars: {
    red: false,
    blue: false,
    yellow: false,
  },
};
// reducer que executa a action e alter de fato o estado inicial dos carros
export default function carsReducer(state = carsInitialState, action) {
  switch (action.type) {
    case MOVE_CAR:
      return { ...state, cars: { ...state.cars, [action.car]: action.side } };
    default:
      return state;
  }
}
