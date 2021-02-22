import { createStore } from 'redux';
// rootreducer é o resultado da conexão do carsReducer com trafficSignalReducer
import rootreducer from './reducers/index';
// store com tootreducer é um estado global com os dois estados como filho (carsReducer e trafficSignalReducer)
const store = createStore(rootreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
