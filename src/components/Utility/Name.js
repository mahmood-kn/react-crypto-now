import React from 'react';

const Name = ({ className }) => {
  return (
    <div className={`${className} flex items-center`}>
      <h2>Bitcoin </h2>
      <span className='text-gray-500 text-sm ml-2'> (BTC)</span>
    </div>
  );
};

export default Name;
