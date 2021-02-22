import React, { useEffect } from 'react';
import Name from '../Utility/Name';
import Logo from '../Utility/Logo';
import Change from '../Utility/Change';
import Price from '../Utility/Price';

import { withRouter } from 'react-router-dom';

const Row = ({ data, history }) => {
  useEffect(() => {
    // console.log(data, history);
  }, []);
  const onClickHandler = () => {
    history.push('/bitcoin');
  };
  return (
    <div
      className=' bg-white p-8 flex items-center justify-between border-b border-gray-300 cursor-pointer'
      onClick={onClickHandler}>
      <div className='flex'>
        <Logo className='mr-10' logo={data.logo_url} size={10} alt={data.id} />
        <Name name={data.name} symbol={data.symbol} />
      </div>
      <Price price={+data.price} />
      <Change priceChangePct={data['1d'].price_change_pct} />
      <div>Weekly Chart</div>
    </div>
  );
};

export default withRouter(Row);
