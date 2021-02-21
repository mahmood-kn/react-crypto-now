import React from 'react';
import ConverterMainSection from './ConverterMainSection';
import Navbar from '../Utility/Navbar/Navbar';
import Amount from './Amount';
import SwapBtn from './SwapBtn';

const Converter = () => {
  return (
    <>
      <Navbar />
      <ConverterMainSection />
      <div className='flex flex-col justify-center items-center h-96'>
        <Amount defaultCur='BTC' />
        <SwapBtn />
        <Amount defaultCur='USD' />
      </div>
    </>
  );
};

export default Converter;
