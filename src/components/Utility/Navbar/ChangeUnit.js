import React, { useRef, useEffect } from 'react';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';
import ModalNavUnitContent from '../Modal/ModalNavUnitContent';
import Currency from '../Currency';

const ChangeUnit = ({ unit, toggleModal, showModal, classes }) => {
  const btnClick = useRef(false);
  useEffect(() => {
    if (showModal === false) {
      btnClick.current = false;
    }
  }, [showModal]);
  const handleClick = () => {
    btnClick.current = true;
    toggleModal();
  };
  return (
    <>
      <Currency
        classes={`${classes} mx-3 bg-transparent focus:outline-none cursor-pointer `}
        unit={unit}
        clicked={handleClick}
      />
      {btnClick.current ? <ModalNavUnitContent /> : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    unit: state.unit,
    showModal: state.showModal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(actions.toggleModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUnit);
