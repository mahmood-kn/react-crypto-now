import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import ModalAddCurrency from '../Modal/ModalAddCurrency';

const AddCurrency = ({ classes, toggleModal, showModal }) => {
  const btnClick = useRef(false);
  useEffect(() => {
    if (showModal === false) {
      btnClick.current = false;
    }
  }, [showModal]);
  const handleClick = () => {
    toggleModal();
    btnClick.current = true;
  };
  return (
    <>
      <button
        className={`${classes} mx-3 bg-transparent outline-none cursor-pointer focus:outline-none`}
        onClick={handleClick}>
        Add Currency
      </button>
      {btnClick.current ? <ModalAddCurrency /> : null}
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
