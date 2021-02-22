import { combineReducers } from 'redux'
// import dos reducers que vão compor o estado global da aplicação
import carsReducer from './carsReducer';
import trafficSignalReducer from './trafficSignalReducer';
// criando um estado global a partir dos dois reducers, usando a função combineReducers
const rootreducer = combineReducers({carsReducer, trafficSignalReducer});
export default rootreducer;
