import React from 'react';

const UnitBtn = ({ unit, clicked }) => {
  return (
    <input
      className='cursor-pointer'
      type='button'
      onClick={clicked}
      value={unit}
    />
  );
};

export default UnitBtn;
