import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import ModalAddCurrency from '../Modal/ModalAddCurrency';

const AddCurrency = ({
  classes,
  toggleModal,
  showModal,
  addCurrencyBtn,
  addCurrencyBtnAction,
}) => {
  const btnClick = useRef(false);
  useEffect(() => {
    if (showModal === false && addCurrencyBtn !== false) {
      addCurrencyBtnAction(false);
    }
  }, [showModal]);
  const handleClick = () => {
    toggleModal();
    addCurrencyBtnAction(true);
  };
  return (
    <>
      <button
        className={`${classes} mx-3 bg-transparent outline-none cursor-pointer focus:outline-none  `}
        onClick={handleClick}>
        Add Currency
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    showModal: state.showModal,
    addCurrencyBtn: state.addCurrencyBtn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(actions.toggleModal()),
    addCurrencyBtnAction: (val) => dispatch(actions.addCurrencyBtnAction(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCurrency);
