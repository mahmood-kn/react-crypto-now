import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Converter from './components/Converter/Converter';

function App() {
  return (
    <Router>
      <Route path='/' exact component={HomePage} />
      <Route path='/converter' exact component={Converter} />
    </Router>
  );
}

export default App;
