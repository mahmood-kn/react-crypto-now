import * as types from './types';
import axios from 'axios';

const key = process.env.REACT_APP_NOMIC_API;

export const loadApi = (unit, cryptoToLoad) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const res = await axios(
        `https://api.nomics.com/v1/currencies/ticker?key=${key}&ids=${cryptoToLoad.join(
          ','
        )}&interval=1d&convert=${unit}&per-page=100&page=1`
      );
      dispatch(saveLoadApi(res.data));
    } catch (err) {
      console.log(err);
      dispatch(loadApiErr(err));
    }
  };
};

export const loadCurrencyPage = (symbol, unit) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const res = await axios(
        `https://api.nomics.com/v1/currencies/ticker?key=${key}&ids=${symbol}&interval=1d&convert=${unit}&per-page=100&page=1`
      );
      dispatch(setCurrentCurrency(res.data[0]));
    } catch (err) {
      console.log(err);
      dispatch(loadApiErr(err));
    }
  };
};
export const changeUnit = (unit, cryptoToLoad) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const res = await axios(
        `https://api.nomics.com/v1/currencies/ticker?key=${key}&ids=${cryptoToLoad.join(
          ','
        )}&interval=1d&convert=${unit}&per-page=100&page=1`
      );
      dispatch(saveLoadApi(res.data));
      dispatch(changUnitState(unit));
    } catch (err) {
      console.log(err);
      dispatch(loadApiErr(err));
    }
  };
};

export const getRates = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const res = await axios(
        `https://api.nomics.com/v1/exchange-rates?key=${key}`
      );

      dispatch(saveRates(res.data));
    } catch (err) {
      console.log(err);
      dispatch(loadApiErr(err));
    }
  };
};
export const getCryptoes = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const res = await axios(
        `https://api.nomics.com/v1/markets?key=${key}&exchange=binance`
      );
      const cryptoes = [];
      res.data.forEach((data) => {
        cryptoes.push(data.base);
      });
      dispatch(saveCtyotoes(cryptoes));
    } catch (err) {
      console.log(err);
      dispatch(loadApiErr(err));
    }
  };
};
export const addCurrencyBtnAction = (value) => {
  return {
    type: types.ADD_CURRENCY_BTN,
    payload: value,
  };
};
export const changeUnitBtnAction = (value) => {
  return {
    type: types.CHANGE_UNIT_BTN,
    payload: value,
  };
};

export const saveCtyotoes = (cryptoes) => {
  return {
    type: types.GET_CRYPTOES,
    payload: cryptoes,
  };
};

export const addCurrency = (currency) => {
  return {
    type: types.ADD_CURRENCY,
    payload: currency,
  };
};

export const changeCurrentRate = (givenRate) => {
  return {
    type: types.CHANGE_CURRENT_RATE,
    payload: givenRate,
  };
};

export const saveRates = (rates) => {
  return {
    type: types.GET_RATES,
    payload: rates,
  };
};

export const searchUnits = (filteredUnits, filterState) => {
  return {
    type: types.SEARCH_UNITS,
    payload: { filteredUnits, filterState },
  };
};

export const saveUnits = (units) => {
  return {
    type: types.SAVE_UNITS,
    payload: units,
  };
};

export const changUnitState = (unit) => {
  return {
    type: types.CHANGE_UNIT_STATE,
    payload: unit,
  };
};

export const saveLoadApi = (data) => {
  return {
    type: types.LOAD_API,
    payload: data,
  };
};
export const loadApiErr = (err) => {
  return {
    type: types.LOAD_API_ERR,
    payload: err,
  };
};

export const setCurrentCurrency = (data) => {
  return {
    type: types.SET_CURRENT_CURRENCY,
    payload: data,
  };
};

export const setLoading = () => {
  return {
    type: types.SET_LOADING,
  };
};

export const toggleModal = () => {
  return {
    type: types.TOGGLE_MODAL,
  };
};

export const setShowMenu = (val) => {
  return {
    type: types.SET_SHOW_MENU,
    payload: val,
  };
};
