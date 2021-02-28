import React, { useEffect } from 'react';
import Change from '../Utility/Change';
import { makeFriendly } from '../../utility/utilsFuncs';
import Unit from '../Utility/Unit';

const MarketCap = ({ marketCap, marketCapPct }) => {
  useEffect(() => {
    // console.log(marketCapDetail);
  }, []);
  return (
    <div className='flex flex-col  items-start '>
      <span className='uppercase text-sm text-gray-300 '>
        market cap <Unit />
      </span>
      <span className='my-2'>{makeFriendly(marketCap)}</span>
      <Change
        className='text-sm '
        iconClass='text-base'
        ChangePct={marketCapPct}
      />
    </div>
  );
};

export default MarketCap;
