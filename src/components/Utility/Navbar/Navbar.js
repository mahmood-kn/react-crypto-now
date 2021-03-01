import React, { useState, useEffect } from 'react';
import classes from './Navbar.module.css';
// import Lang from './Lang';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import ChangeUnit from './ChangeUnit';
import AddCurrency from './AddCurrency';
import Hamburger from './Hamburger';
import ModalNavUnitContent from '../Modal/ModalNavUnitContent';
import ModalAddCurrency from '../Modal/ModalAddCurrency';

const Navbar = ({ homepage, cryptoPage, changeUnitBtn, addCurrencyBtn }) => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.onclick = (e) => {
      console.log(e.target);
      if (showMenu && !e.target.classList.contains('HamburgerMenu')) {
        setShowMenu(false);
      }
    };
    return () => {
      window.onclick = (e) => {
        console.log(e.target);
        if (showMenu && !e.target.classList.contains('HamburgerMenu')) {
          setShowMenu(false);
        }
      };
    };
  }, [showMenu]);
  const hamburgerClicked = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav
      className={`${
        cryptoPage ? 'bg-gray-800' : 'bg-transparent'
      } py-5 border-b border-yellow-500`}>
      <div className='container mx-auto text-white flex md:justify-between justify-center items-center'>
        <Link to='/' className='font-bold text-3xl ml-2'>
          CryptoNow
        </Link>
        <div>
          <NavLink
            exact
            activeClassName={classes.MyActive}
            to='/'
            className={`mx-3 md:inline-block hidden ${classes.HoverEffect}`}>
            Home
          </NavLink>
          <NavLink
            to='/converter'
            activeClassName={classes.MyActive}
            className={` mx-3 md:inline-block hidden ${classes.HoverEffect}`}>
            Converter
          </NavLink>
          {homepage && (
            <AddCurrency
              classes={`${classes.HoverEffect} md:inline-block hidden`}
            />
          )}
          {(homepage || cryptoPage) && (
            <ChangeUnit
              classes={`${classes.HoverEffect} md:inline-block hidden`}
            />
          )}
          {/* <Lang /> */}
        </div>
      </div>
      <span
        className='material-icons inline-block absolute top-5 cursor-pointer left-4 text-4xl text-white md:hidden'
        onClick={hamburgerClicked}>
        menu
      </span>
      <Hamburger
        showMenu={showMenu}
        homepage={homepage}
        cryptoPage={cryptoPage}
      />
      {changeUnitBtn ? <ModalNavUnitContent /> : null}
      {addCurrencyBtn ? <ModalAddCurrency /> : null}
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    changeUnitBtn: state.changeUnitBtn,
    addCurrencyBtn: state.addCurrencyBtn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrency: (symbol) => dispatch(actions.loadCurrencyPage(symbol)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
