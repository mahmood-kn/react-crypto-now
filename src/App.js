import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Converter from './components/Converter/Converter';
import CryptoPage from './components/CryptoPage/CryptoPage';
import { connect } from 'react-redux';
import * as actions from './store/actions';

function App({ apiData, onLoadApi }) {
  useEffect(() => {
    onLoadApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <Route path='/' exact component={HomePage} />
      <Route path='/converter' exact component={Converter} />
      <Route path='/bitcoin' exact component={CryptoPage} />
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    apiData: state.apiData,
  };
};

const mapDispatchToProps = (dipatch) => {
  return {
    onLoadApi: () => dipatch(actions.loadApi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
