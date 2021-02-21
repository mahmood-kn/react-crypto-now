import React from 'react';
import Change from '../Utility/Change';

const MarketCap = () => {
  return (
    <div className='flex flex-col '>
      <span className='uppercase text-sm text-gray-500 '>market cap</span>
      <span className='my-2'>$1B</span>
      <Change className='text-sm pl-3' iconClass='text-base' />
    </div>
  );
};

export default MarketCap;
