import React from 'react';
import Name from '../Utility/Name';
import Logo from '../Utility/Logo';
import { withRouter } from 'react-router-dom';

const Row = (props) => {
  const onClickHandler = () => {
    props.history.push('/bitcoin');
  };
  return (
    <div
      className=' bg-white p-8 flex justify-between border-b border-gray-300 cursor-pointer'
      onClick={onClickHandler}>
      <div className='flex'>
        <Logo className='mr-12' />
        <Name />
      </div>
      <div>Price</div>
      <div>Change</div>
      <div>Weekly Chart</div>
    </div>
  );
};

export default withRouter(Row);
