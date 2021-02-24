import React from 'react';
import Currency from '../Utility/Currency';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const Amount = ({ unit, toggleModal }) => {
  return (
    <div className='flex w-2/4'>
      <Currency
        selectClasses='rounded-tl-md rounded-bl-md px-2 outline-none'
        unit={'BTC'}
        clicked={toggleModal}
      />
      <input
        type='number'
        className='p-3 rounded-tr-md rounded-br-md w-full outline-none'
        unit={unit}
      />
      ;
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    unit: state.unit,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(actions.toggleModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Amount);
