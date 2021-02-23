import * as types from './types';
import axios from 'axios';

const key = process.env.REACT_APP_NOMIC_API;
const currencies = ['BTC', 'ETH', 'XRP', 'BNB', 'DOGE'];

export const loadApi = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const res = await axios(
        `https://api.nomics.com/v1/currencies/ticker?key=${key}&ids=${currencies.join(
          ','
        )}&interval=1d&convert=USD&per-page=100&page=1`
      );
      // const data = await res.json();
      dispatch(saveLoadApi(res.data));
    } catch (err) {
      console.log(err);
      dispatch(loadApiErr(err));
    }
  };
};

export const loadCurrencyPage = (symbol) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const res = await axios(
        `https://api.nomics.com/v1/currencies/ticker?key=${key}&ids=${symbol}&interval=1d&convert=USD&per-page=100&page=1`
      );
      // const data = await res.json();
      dispatch(setCurrentCurrency(res.data[0]));
    } catch (err) {
      console.log(err);
      // dispatch(loadApiErr(err));
    }
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
