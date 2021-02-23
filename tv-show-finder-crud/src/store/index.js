import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import thunk from 'redux-thunk'
// rootreducer é o resultado da conexão do carsReducer com trafficSignalReducer
import reducer from './reducer';
// store com tootreducer é um estado global com os dois estados como filho (carsReducer e trafficSignalReducer)
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(reducer, applyMiddleware(thunk));

// export default store;

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);

export default store;
