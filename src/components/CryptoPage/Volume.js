import React from 'react';
import Change from '../Utility/Change';
import { makeFriendly } from '../../utility/utilsFuncs';

const Volume = ({ volume, volumePct }) => {
  return (
    <div className='flex flex-col items-start'>
      <span className='uppercase text-sm text-gray-500 '>volume</span>
      <span className='my-2'>${makeFriendly(volume)}</span>
      <Change className='text-sm' iconClass='text-base' ChangePct={volumePct} />
    </div>
  );
};

export default Volume;
