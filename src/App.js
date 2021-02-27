import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Converter from './components/Converter/Converter';
import CryptoPage from './components/CryptoPage/CryptoPage';

import { connect } from 'react-redux';
import * as actions from './store/actions';

function App({ rates, getRates }) {
  useEffect(() => {
    if (rates === null) {
      getRates();
    }
  }, []);
  return (
    <>
      <Router>
        <Route path='/' exact component={HomePage} />
        <Route path='/converter' exact component={Converter} />
        <Route path='/currency/:name' exact component={CryptoPage} />
      </Router>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    rates: state.rates,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getRates: () => dispatch(actions.getRates()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
