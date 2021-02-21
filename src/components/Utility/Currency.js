import React from 'react';

const Currency = ({ selectClasses, defaultCur }) => {
  return (
    <select value={defaultCur} className={selectClasses}>
      <option value='USD' className='text-black'>
        USD
      </option>
      <option value='IRT' className='text-black'>
        IRT
      </option>
      <option value='BTC' className='text-black'>
        BTC
      </option>
    </select>
  );
};

export default Currency;
