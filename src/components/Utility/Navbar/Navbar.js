import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import Lang from './Lang';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';
import ChangeUnit from './ChangeUnit';
import AddCurrency from './AddCurrency';

const Navbar = ({ homepage, cryptoPage }) => {
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
          {homepage && <AddCurrency classes={`${classes.HoverEffect}`} />}
          {(homepage || cryptoPage) && (
            <ChangeUnit classes={classes.HoverEffect} />
          )}
          {/* <Lang /> */}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrency: (symbol) => dispatch(actions.loadCurrencyPage(symbol)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
