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
        showModal: !state.showModal,
      };
    case types.CHANGE_UNIT_STATE:
      return {
        ...state,
        unit: action.payload,
      };
    case types.LOAD_UNITS:
      return {
        ...state,
        allUnits: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default cryptoReducer;
