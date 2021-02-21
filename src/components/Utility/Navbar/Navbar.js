import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import Currency from '../Currency';
import Lang from './Lang';

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
          {homepage && (
            <Currency selectClasses='mx-3 bg-transparent outline-none cursor-pointer' />
          )}
          <Lang />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
