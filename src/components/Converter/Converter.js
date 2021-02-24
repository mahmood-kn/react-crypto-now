import React from 'react';
import ConverterMainSection from './ConverterMainSection';
import Navbar from '../Utility/Navbar/Navbar';
import Amount from './Amount';
import SwapBtn from './SwapBtn';
import Currency from '../Utility/Currency';

const Converter = () => {
  return (
    <>
      <Navbar />
      <ConverterMainSection />
      <div className='flex flex-col justify-center items-center h-96'>
        <div className='flex w-full justify-center'>
          <Currency unit={'USD'} />
          <Amount defaultCur='BTC' />
        </div>
        <SwapBtn />
        <div className='flex w-full justify-center'>
          <Currency unit={'USD'} />
          <Amount defaultCur='USD' />
        </div>
      </div>
    </>
  );
};

export default Converter;
