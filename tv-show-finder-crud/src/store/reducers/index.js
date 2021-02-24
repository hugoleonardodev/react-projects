import { combineReducers } from 'redux'
// import dos reducers que vão compor o estado global da aplicação
import fetchShowsReducer from '../reducers/fetchShowsReducer';
import inputQueryReducer from '../reducers/inputQueryReducer';
// criando um estado global a partir dos dois reducers, usando a função combineReducers
const rootreducer = combineReducers({ fetchShowsReducer, inputQueryReducer });
export default rootreducer;
