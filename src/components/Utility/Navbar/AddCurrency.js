import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import ModalAddCurrency from '../Modal/ModalAddCurrency';

const AddCurrency = ({ classes, toggleModal, showModal }) => {
  const handleClick = () => {
    toggleModal();
  };
  return (
    <>
      <button
        className={`${classes} mx-3 bg-transparent outline-none cursor-pointer focus:outline-none`}
        onClick={handleClick}>
        Add Currency
      </button>
      {showModal ? <ModalAddCurrency /> : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    showModal: state.showModal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(actions.toggleModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCurrency);
