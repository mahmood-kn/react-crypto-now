import React from 'react';
import Navbar from '../Utility/Navbar/Navbar';
import Logo from '../Utility/Logo';
import Name from '../Utility/Name';
import Price from '../Utility/Price';
import Change from '../Utility/Change';
import Details from './Details';

const CryptoPage = () => {
  return (
    <>
      <Navbar cryptoPage />
      <div className='flex flex-col w-full container mx-auto'>
        <div className='flex py-10 items-center'>
          <Logo />
          <Name className='text-2xl' />
        </div>
        <div>
          <div className='flex h-20'>
            <div className='w-1/3 flex pl-10 items-end'>
              <Price className='text-4xl pr-3' />
              <Change />
            </div>
            <div className='w-2/3'>
              <Details />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoPage;
