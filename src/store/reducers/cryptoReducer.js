import * as types from '../actions/types';

const cryptoReducer = (state, action) => {
  switch (action.type) {
    case types.LOAD_API:
      return {
        ...state,
        apiData: action.payload,
        loading: false,
      };
    case types.LOAD_API_ERR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.SET_CURRENT_CURRENCY:
      return {
        ...state,
        currentCurrency: action.payload,
        loading: false,
      };
    case types.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.TOGGLE_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    case types.CHANGE_UNIT_STATE:
      return {
        ...state,
        unit: action.payload,
      };
    case types.SAVE_UNITS:
      return {
        ...state,
        allUnits: action.payload,
        allUnitsWithFilter: action.payload,
        loading: false,
      };
    case types.SEARCH_UNITS:
      return {
        ...state,
        [action.payload.filterState]: action.payload.filteredUnits,
      };
    case types.GET_RATES:
      return {
        ...state,
        rates: action.payload,
        loading: false,
      };
    case types.CHANGE_CURRENT_RATE:
      const btcRate = state.rates.filter(
        (rate) => rate.currency === action.payload
      );
      return {
        ...state,
        currentRate: btcRate,
      };
    case types.ADD_CURRENCY:
      return {
        ...state,
        cryptoToLoad: [...state.cryptoToLoad, action.payload],
      };
    case types.GET_CRYPTOES:
      return {
        ...state,
        cryptoes: [...new Set(action.payload)],
        filteredCryptoes: [...new Set(action.payload)],
      };
    case types.FILTER_CRYPTOES:
      return {
        ...state,
        filteredCryptoes: action.payload,
      };
    case types.CHANGE_UNIT_BTN:
      return {
        ...state,
        changeUnitBtn: action.payload,
      };
    case types.ADD_CURRENCY_BTN:
      return {
        ...state,
        addCurrencyBtn: action.payload,
      };
    case types.SET_SHOW_MENU:
      return {
        ...state,
        showMenu: action.payload,
      };
    default:
      return state;
  }
};

export default cryptoReducer;
