import React from 'react';
import classes from './ModalNavUnitContent.module.css';
import UnitBtn from '../UnitBtn';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const ModalContent = ({ changeUnit, toggleModal }) => {
  const handleClick = (e) => {
    changeUnit(e.target.value);
    toggleModal();
  };
  return (
    <>
      <h1 className='text-xl font-bold mb-10'>
        Show Prices In Another Currency
      </h1>
      <div>
        <UnitBtn unit='USD' clicked={handleClick} />
        <UnitBtn unit='EUR' clicked={handleClick} />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeUnit: (unit) => dispatch(actions.changeUnit(unit)),
    toggleModal: () => dispatch(actions.toggleModal()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
