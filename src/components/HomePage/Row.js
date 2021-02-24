import React from 'react';
import Name from '../Utility/Name';
import Logo from '../Utility/Logo';
import Change from '../Utility/Change';
import Price from '../Utility/Price';
import Chart from './Chart';

const Row = ({ data, onClickHandler }) => {
  return (
    <div
      className=' bg-white p-8 flex items-center justify-between border-b border-gray-300 cursor-pointer'
      onClick={onClickHandler}>
      <div className='flex'>
        <Logo className='mr-10' logo={data.logo_url} size={10} alt={data.id} />
        <Name name={data.name} symbol={data.symbol} />
      </div>
      <Price price={+data.price} />
      <Change ChangePct={data['1d'].price_change_pct} />
      <Chart />
    </div>
  );
};

export default Row;
