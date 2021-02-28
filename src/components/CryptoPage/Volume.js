import React from 'react';
import Change from '../Utility/Change';
import { makeFriendly } from '../../utility/utilsFuncs';
import Unit from '../Utility/Unit';

const Volume = ({ volume, volumePct, unit }) => {
  return (
    <div className='flex flex-col items-start'>
      <span className='uppercase text-sm text-gray-300 '>
        volume <Unit />
      </span>
      <span className='my-2'>{makeFriendly(volume)}</span>
      <Change className='text-sm' iconClass='text-base' ChangePct={volumePct} />
    </div>
  );
};

export default Volume;
