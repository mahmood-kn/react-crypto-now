import React from 'react';
import Currency from '../Utility/Currency';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const Amount = ({ unit, toggleModal, handleClick, amountClass, disabled }) => {
  return (
    <div className='flex w-2/4'>
      <Currency
        classes={`rounded-tl-md rounded-bl-md px-4 outline-none bg-white focus:outline-none ${amountClass}`}
        unit={unit}
        clicked={handleClick}
        disabled={disabled}
      />
      <input
        type='number'
        className='p-3 rounded-tr-md rounded-br-md w-full outline-none'
      />
      ;
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(actions.toggleModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Amount);
