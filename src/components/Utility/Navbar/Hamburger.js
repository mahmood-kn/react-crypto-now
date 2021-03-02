import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ChangeUnit from './ChangeUnit';
import AddCurrency from './AddCurrency';
import classes from './Navbar.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import useClickOutside from '../../../utility/hooks/useClickOutside';

const Hamburger = ({
  showMenu,
  homepage,
  cryptoPage,
  setShowMenu,
  onClickOutside,
}) => {
  const clickRef = useRef();
  useClickOutside(clickRef, onClickOutside);
  // const [showMenuInternal, setShowMenuInternal] = useState(false);
  // useEffect(() => {
  //   if (showMenu) {
  //     setShowMenuInternal(true);
  //   } else {
  //     setShowMenuInternal(false);
  //   }
  // }, [showMenu]);
  const handleClose = () => {
    setShowMenu(false);
  };
  return (
    <div
      className={`HamburgerMenu absolute top-0 left-0 h-full w-1/2 opacity-95 bg-gray-700 z-50 transform text-white p-5 transition-transform  ${
        showMenu ? 'translate-x-0' : '-translate-x-full'
      }`}
      ref={clickRef}>
      <NavLink
        exact
        activeClassName={classes.MyActive}
        to='/'
        className={`mx-3 w-max py-5 block md:hidden ${classes.HoverEffect}`}>
        Home
      </NavLink>
      <NavLink
        to='/converter'
        activeClassName={classes.MyActive}
        className={`mx-3 w-max py-5 block md:hidden ${classes.HoverEffect}`}>
        Converter
      </NavLink>
      {homepage && (
        <AddCurrency
          classes={`${classes.HoverEffect} w-max py-5 block md:hidden`}
        />
      )}
      {(homepage || cryptoPage) && (
        <ChangeUnit
          classes={`${classes.HoverEffect} w-max py-5 block md:hidden`}
        />
      )}
      <span
        className='material-icons right-5 cursor-pointer top-5 absolute'
        onClick={handleClose}>
        close
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showMenu: state.showMenu,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setShowMenu: (val) => dispatch(actions.setShowMenu(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
