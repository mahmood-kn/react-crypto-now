import React from 'react';
import classes from './HomeMainSection.module.css';

const HomeMainSection = () => {
  return (
    <div
      className={`${classes.BgImg} flex justify-center items-center text-white text-center`}>
      <h1 className='z-20 lg:text-5xl font-bold mb-14 leading-loose md:text-4xl sm:text-2xl text-xl'>
        Check Latest Crypto Currency <br className={`inline md:hidden`} />{' '}
        Prices <br className='md:inline hidden' /> And More Details
      </h1>
    </div>
  );
};

export default HomeMainSection;
