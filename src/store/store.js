import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import cryptoReducer from './reducers/cryptoReducer';

const middleware = [thunk];

const initialState = {};

const store = createStore(
  cryptoReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;