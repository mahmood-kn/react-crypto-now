import React, { useEffect } from 'react';
import MarketCap from './MarketCap';
import Volume from './Volume';
import Rank from './Rank';

const Details = ({
  marketCapVal,
  volumeVal,
  rankVal,
  marketCapPctVal,
  volumePctVal,
}) => {
  useEffect(() => {
    // console.log(marketCapVal, volumeVal, rankVal);
  }, []);
  return (
    <div className='flex justify-between text-center ml-20 '>
      <MarketCap marketCap={marketCapVal} marketCapPct={marketCapPctVal} />
      <Volume volume={volumeVal} volumePct={volumePctVal} />
      <Rank rank={rankVal} />
    </div>
  );
};

export default Details;
