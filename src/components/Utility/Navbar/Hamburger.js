import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ChangeUnit from './ChangeUnit';
import AddCurrency from './AddCurrency';
import classes from './Navbar.module.css';

const Hamburger = ({ showMenu, homepage, cryptoPage }) => {
  const [showMenuInternal, setShowMenuInternal] = useState(false);
  useEffect(() => {
    if (showMenu) {
      setShowMenuInternal(true);
    } else {
      setShowMenuInternal(false);
    }
  }, [showMenu]);
  const handleClose = () => {
    setShowMenuInternal(false);
  };
  return (
    <div
      className={`HamburgerMenu absolute top-0 left-0 h-full w-1/2 opacity-95 bg-gray-700 z-50 transform text-white p-5 transition-transform  ${
        showMenuInternal ? 'translate-x-0' : '-translate-x-full'
      }`}>
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

export default Hamburger;
