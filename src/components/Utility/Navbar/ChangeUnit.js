import React, { useEffect } from 'react';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';
import Currency from '../Currency';

const ChangeUnit = ({
  unit,
  toggleModal,
  showModal,
  classes,
  changeUnitBtnAction,
  changeUnitBtn,
}) => {
  useEffect(() => {
    if (showModal === false && changeUnitBtn !== false) {
      changeUnitBtnAction(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  const handleClick = () => {
    toggleModal(true);
    changeUnitBtnAction(true);
  };
  return (
    <>
      <Currency
        classes={`${classes} mx-3 bg-transparent focus:outline-none cursor-pointer`}
        unit={unit}
        clicked={handleClick}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    unit: state.unit,
    showModal: state.showModal,
    changeUnitBtn: state.changeUnitBtn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (val) => dispatch(actions.toggleModal(val)),
    changeUnitBtnAction: (val) => dispatch(actions.changeUnitBtnAction(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUnit);
