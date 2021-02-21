import React from 'react';
import change from '../../assets/img/change.png';

const SwapBtn = () => {
  return (
    <button className='focus:outline-none'>
      <img src={change} alt='change' className='w-14 my-3' />
    </button>
  );
};

export default SwapBtn;
