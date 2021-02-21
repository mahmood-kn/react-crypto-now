import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

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
            <select className=' px-3 bg-transparent outline-none cursor-pointer'>
              <option value='USD' className='text-black'>
                USD
              </option>
              <option value='IRT' className='text-black'>
                IRT
              </option>
            </select>
          )}

          <select className=' px-3 bg-transparent outline-none cursor-pointer'>
            <option value='EN' className='text-black'>
              EN
            </option>
            <option value='FA' className='text-black'>
              FA
            </option>
            <option value='AR' className='text-black'>
              AR
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
