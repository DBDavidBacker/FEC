import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import rootReducer from '../reducers/rootReducer.js'



var initialSate = {

};

var dumbReducer = (state={}, action) => {
  if (!action) {
    return state
  }
  return state;
}


var store = createStore(dumbReducer,
  initialSate,
  applyMiddleware(thunk));

  console.log(store.getState());
  export default store;