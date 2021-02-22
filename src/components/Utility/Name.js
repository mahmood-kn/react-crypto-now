import React from 'react';

const Name = ({ className, name, symbol }) => {
  return (
    <div className={`${className} flex items-center w-40`}>
      <h2>{name} </h2>
      <span className='text-gray-500 text-sm ml-2'> ({symbol})</span>
    </div>
  );
};

export default Name;
