import React from 'react';
import Name from '../Utility/Name';
import Logo from '../Utility/Logo';
import Change from '../Utility/Change';
import Price from '../Utility/Price';

const Row = ({ data, onClickHandler }) => {
  return (
    <tr
      className='p-8 border-b border-gray-300 cursor-pointer'
      onClick={onClickHandler}>
      <td className='pl-7'>
        <Logo className='mr-12' logo={data.logo_url} size={12} alt={data.id} />
      </td>
      <td>
        <Name name={data.name} symbol={data.symbol} />
      </td>
      <td>
        <Price price={+data.price} />
      </td>
      <td>
        <Change ChangePct={data['1d'].price_change_pct} />
      </td>
    </tr>
  );
};

export default Row;
