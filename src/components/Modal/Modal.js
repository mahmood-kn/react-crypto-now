import React, { useEffect } from 'react';
import classes from './Modal.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import ModalContent from './ModalContent';

const Modal = ({ showModal, showModalAction }) => {
  useEffect(() => {
    window.onclick = (e) => {
      if (e.target.classList.contains(classes.Modal)) {
        showModalAction();
      }
    };
  }, []);
  return (
    <div
      className={`${classes.Modal}`}
      style={{ display: `${showModal ? 'block' : 'none'}` }}>
      <ModalContent />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    showModal: state.showModal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showModalAction: () => dispatch(actions.showModal()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
