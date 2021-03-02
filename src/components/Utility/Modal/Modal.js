import React, { useRef } from 'react';
import classes from './Modal.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import useClickOutside from '../../../utility/hooks/useClickOutside';

const Modal = ({ showModal, toggleModalAction, children, onClickOutside }) => {
  const clickRef = useRef();
  useClickOutside(clickRef, onClickOutside);

  return (
    <div
      className={`${classes.Modal}`}
      style={{ display: `${showModal ? 'block' : 'none'}` }}>
      <div
        ref={clickRef}
        className={`${classes.ModalContent} relative text-black top-10 md:top-0`}>
        <span
          onClick={() => toggleModalAction(false)}
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
    toggleModalAction: (val) => dispatch(actions.toggleModal(val)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
