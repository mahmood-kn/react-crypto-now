import React from 'react';

const UnitBtn = ({ unit, clicked }) => {
  return (
    <input
      className='cursor-pointer py-3 px-6 m-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all'
      type='button'
      onClick={clicked}
      value={unit}
    />
  );
};

export default UnitBtn;
