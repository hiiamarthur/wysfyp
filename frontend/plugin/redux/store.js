import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; // this is for debugging with React-Native-Debugger, you may leave it out
import { authenticateReducer } from './reducer/authenticateReducer';
import {requestReducer} from './reducer/requestReducer';
import {locationReducer} from './reducer/locationReducer';
const rootReducer = combineReducers({
  authenticateReducer: authenticateReducer,
  requestReducer: requestReducer,
  locationReducer: locationReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);