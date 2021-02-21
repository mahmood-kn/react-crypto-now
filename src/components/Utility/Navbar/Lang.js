import React from 'react';

const Lang = () => {
  return (
    <select className=' px-3 bg-transparent outline-none cursor-pointer'>
      <option value='EN' className='text-black'>
        EN
      </option>
      <option value='FA' className='text-black'>
        FA
      </option>
      <option value='AR' className='text-black'>
        AR
      </option>
    </select>
  );
};

export default Lang;
