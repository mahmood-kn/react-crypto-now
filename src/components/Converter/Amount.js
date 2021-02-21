import React from 'react';
import Currency from '../Utility/Currency';

const Amount = ({ defaultCur }) => {
  return (
    <div className='flex w-2/4'>
      <Currency
        selectClasses='rounded-tl-md rounded-bl-md px-2 outline-none'
        defaultCur={defaultCur}
      />
      <input
        type='number'
        className='p-3 rounded-tr-md rounded-br-md w-full outline-none'
      />
      ;
    </div>
  );
};

export default Amount;
