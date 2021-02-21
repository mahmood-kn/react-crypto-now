import React from 'react';
import MarketCap from './MarketCap';
import Volume from './Volume';
import Rank from './Rank';

const Details = () => {
  return (
    <div className='flex justify-end text-center space-x-52'>
      <MarketCap />
      <Volume />
      <Rank />
    </div>
  );
};

export default Details;
