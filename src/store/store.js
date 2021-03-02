import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import cryptoReducer from './reducers/cryptoReducer';

const middleware = [thunk];

const initialState = {
  apiData: null,
  error: null,
  currentCurrency: null,
  loading: false,
  unit: 'USD',
  showModal: false,
  allUnits: [],
  allUnitsWithFilter: [],
  cryptoToLoad: ['BTC', 'ETH', 'BNB', 'DOGE', 'USDT', 'TRX', 'LTC', 'BCH'],
  rates: null,
  currentRate: [{ currency: 'BTC', rate: '' }],
  cryptoes: [],
  filteredCryptoes: [],
  addCurrencyBtn: false,
  changeUnitBtn: false,
  showMenu: false,
};

const store = createStore(
  cryptoReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
