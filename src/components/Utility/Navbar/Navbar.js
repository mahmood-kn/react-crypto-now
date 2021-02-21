import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import Currency from '../Currency';
import Lang from './Lang';

const Navbar = ({ homepage }) => {
  return (
    <div className='bg-transparent py-5'>
      <div className='container mx-auto text-white flex justify-between items-center'>
        <div className='font-bold text-3xl'>CryptoNow</div>
        <div>
          <NavLink
            exact
            activeClassName={classes.MyActive}
            to='/'
            className={`px-3 inline-block ${classes.HoverEffect}`}>
            Home
          </NavLink>
          <NavLink
            to='/converter'
            activeClassName={classes.MyActive}
            className={`px-3 inline-block ${classes.HoverEffect}`}>
            Converter
          </NavLink>
          {homepage && (
            <Currency selectClasses='px-3 bg-transparent outline-none cursor-pointer' />
          )}
          <Lang />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
