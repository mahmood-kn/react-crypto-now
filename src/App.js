import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Converter from './components/Converter/Converter';
import CryptoPage from './components/CryptoPage/CryptoPage';

import { connect } from 'react-redux';
import * as actions from './store/actions';

function App({ rates, getRates, allUnits, saveUnits, getCryptoes, cryptoes }) {
  useEffect(() => {
    if (rates === null) {
      getRates();
    }

    if (allUnits.length === 0 && rates !== null) {
      const currencies = [];
      rates.forEach((curr) => {
        currencies.push(curr.currency);
      });
      saveUnits(currencies);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rates]);
  useEffect(() => {
    if (cryptoes.length === 0) {
      getCryptoes();
    }
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route path='/converter' exact component={Converter} />
          <Route path='/currency/:name' exact component={CryptoPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    rates: state.rates,
    allUnits: state.allUnits,
    cryptoes: state.cryptoes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getRates: () => dispatch(actions.getRates()),
    getCryptoes: () => dispatch(actions.getCryptoes()),
    saveUnits: (curr) => dispatch(actions.saveUnits(curr)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
