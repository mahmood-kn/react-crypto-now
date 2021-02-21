import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Converter from './components/Converter/Converter';
import CryptoPage from './components/CryptoPage/CryptoPage';

function App() {
  return (
    <Router>
      <Route path='/' exact component={HomePage} />
      <Route path='/converter' exact component={Converter} />
      <Route path='/bitcoin' exact component={CryptoPage} />
    </Router>
  );
}

export default App;
