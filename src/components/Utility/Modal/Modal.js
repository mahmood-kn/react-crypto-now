import React, { useEffect, useState } from 'react';
import classes from './Modal.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const Modal = ({ showModal, toggleModalAction, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(showModal);
    window.onclick = (e) => {
      if (e.target.classList.contains(classes.Modal)) {
        toggleModalAction();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  return (
    <div
      className={`${classes.Modal}`}
      style={{ display: `${isOpen ? 'block' : 'none'}` }}>
      <div className={`${classes.ModalContent} relative text-black`}>
        <span
          onClick={toggleModalAction}
          className='material-icons cursor-pointer right-4 top-3 absolute'>
          close
        </span>
        {children}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModalAction: () => dispatch(actions.toggleModal()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
