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
    <div className='md:flex md:flex-row md:justify-between md:text-center md:ml-20 flex flex-col justify-center items-center '>
      {marketCapVal && (
        <MarketCap marketCap={marketCapVal} marketCapPct={marketCapPctVal} />
      )}
      {volumeVal && <Volume volume={volumeVal} volumePct={volumePctVal} />}
      {rankVal && <Rank rank={rankVal} />}
    </div>
  );
};

export default Details;
