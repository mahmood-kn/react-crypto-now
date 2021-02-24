import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import Currency from '../Currency';
import Lang from './Lang';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';

const Navbar = ({ homepage, cryptoPage, unit, showModal }) => {
  return (
    <nav
      className={`${
        cryptoPage ? 'bg-gray-800' : 'bg-transparent'
      } py-5 border-b border-yellow-500`}>
      <div className='container mx-auto text-white flex justify-between items-center'>
        <Link to='/' className='font-bold text-3xl'>
          CryptoNow
        </Link>
        <div>
          <NavLink
            exact
            activeClassName={classes.MyActive}
            to='/'
            className={`mx-3 inline-block ${classes.HoverEffect}`}>
            Home
          </NavLink>
          <NavLink
            to='/converter'
            activeClassName={classes.MyActive}
            className={`mx-3 inline-block ${classes.HoverEffect}`}>
            Converter
          </NavLink>
          {(homepage || cryptoPage) && (
            <Currency
              classes={`${classes.HoverEffect} mx-3 bg-transparent focus:outline-none cursor-pointer `}
              unit={unit}
              clicked={showModal}
            />
          )}
          <Lang />
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    unit: state.unit,
    loading: state.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrency: (symbol) => dispatch(actions.loadCurrencyPage(symbol)),
    showModal: () => dispatch(actions.showModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
