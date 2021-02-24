import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import storeSynchronize from "redux-localstore";

import thunk from "redux-thunk";
// rootreducer é o resultado da conexão do carsReducer com trafficSignalReducer
// import rootreducer from './reducers/index';
import fetchShowsReducer from "./reducers/fetchShowsReducer";
import inputQueryReducer from "./reducers/inputQueryReducer";
import addToFavoritesReducer from "./reducers/addToFavoritesReducer";
// store com tootreducer é um estado global com os dois estados como filho (carsReducer e trafficSignalReducer)
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(reducer, applyMiddleware(thunk));

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
const store = createStore(
  combineReducers({
    fetchShowsReducer,
    inputQueryReducer,
    addToFavoritesReducer,
  }),
  enhancer
);

export default store;

storeSynchronize(store);
