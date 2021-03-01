import React from 'react';

const Rank = ({ rank }) => {
  return (
    <div className='flex flex-col md:items-start pr-5 items-center mt-3 md:mt-0'>
      <span className='uppercase text-sm text-gray-300 '>Rank</span>
      <span className='my-2'>#{rank}</span>
    </div>
  );
};

export default Rank;
