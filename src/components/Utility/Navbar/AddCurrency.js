import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const AddCurrency = ({
  classes,
  toggleModal,
  showModal,
  addCurrencyBtn,
  addCurrencyBtnAction,
}) => {
  useEffect(() => {
    if (showModal === false && addCurrencyBtn !== false) {
      addCurrencyBtnAction(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  const handleClick = () => {
    toggleModal(true);
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
    toggleModal: (val) => dispatch(actions.toggleModal(val)),
    addCurrencyBtnAction: (val) => dispatch(actions.addCurrencyBtnAction(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCurrency);
