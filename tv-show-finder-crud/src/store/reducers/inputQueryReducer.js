import { INPUT_QUERY } from '../actions/inputQuery' 

const initialState = {
  query: '',
  // fetching: true
};

export default function inputQueryReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
  case INPUT_QUERY:
    return { ...state, query: action.query };
  default:
    return state;
  }
}
