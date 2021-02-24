import React from 'react';
import classes from './ModalContent.module.css';
import UnitBtn from '../Utility/UnitBtn';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const ModalContent = ({ changeUnit, showModal }) => {
  const handleClick = (e) => {
    changeUnit(e.target.value);
    showModal();
  };
  return (
    <div className={`${classes.ModalContent}`}>
      <h1>Show Prices In Another Currency</h1>
      <div>
        <UnitBtn unit='USD' clicked={handleClick} />
        <UnitBtn unit='EUR' clicked={handleClick} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeUnit: (unit) => dispatch(actions.changeUnit(unit)),
    showModal: () => dispatch(actions.showModal()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
