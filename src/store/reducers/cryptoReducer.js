import * as types from '../actions/types';

const cryptoReducer = (state, action) => {
  switch (action.type) {
    case types.LOAD_API:
      return {
        ...state,
        apiData: action.payload,
      };
    case types.LOAD_API_ERR:
      return {
        ...state,
        error: action.payload,
      };
    case types.SET_CURRENT_CURRENCY:
      return {
        ...state,
        currentCurrency: action.payload,
      };
    default:
      return state;
  }
};

export default cryptoReducer;
