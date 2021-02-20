import React from 'react';
import classes from './HomeMainSection.module.css';

const HomeMainSection = () => {
  return (
    <div
      className={`${classes.BgImg} flex justify-center items-center text-white text-center`}>
      <h1 className='z-20 text-5xl font-bold mb-14 leading-snug'>
        Check Latest Crypto Currency Prices <br /> And More Details
      </h1>
    </div>
  );
};

export default HomeMainSection;
