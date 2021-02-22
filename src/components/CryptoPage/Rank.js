import React from 'react';

const Rank = ({ rank }) => {
  return (
    <div className='flex flex-col '>
      <span className='uppercase text-sm text-gray-500 '>Rank</span>
      <span className='my-2'>#{rank}</span>
    </div>
  );
};

export default Rank;
