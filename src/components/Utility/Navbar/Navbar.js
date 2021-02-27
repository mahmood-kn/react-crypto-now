import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import Currency from '../Currency';
import Lang from './Lang';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';
import ModalNavUnitContent from '../Modal/ModalNavUnitContent';

const Navbar = ({ homepage, cryptoPage, unit, toggleModal, showModal }) => {
  const handleClick = () => {
    toggleModal();
  };
  return (
    <nav
      className={`${
        cryptoPage ? 'bg-gray-800' : 'bg-transparent'
      } py-5 border-b border-yellow-500`}>
      <div className='container mx-auto text-white flex justify-between items-center'>
        <Link to='/' className='font-bold text-3xl'>
          CryptoNow
        </Link>
        <div>
          <NavLink
            exact
            activeClassName={classes.MyActive}
            to='/'
            className={`mx-3 inline-block ${classes.HoverEffect}`}>
            Home
          </NavLink>
          <NavLink
            to='/converter'
            activeClassName={classes.MyActive}
            className={`mx-3 inline-block ${classes.HoverEffect}`}>
            Converter
          </NavLink>
          {(homepage || cryptoPage) && (
            <Currency
              classes={`${classes.HoverEffect} mx-3 bg-transparent focus:outline-none cursor-pointer `}
              unit={unit}
              clicked={handleClick}
            />
          )}
          <Lang />
        </div>
      </div>
      <Modal showModal={showModal} children={<ModalNavUnitContent />} />
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    unit: state.unit,
    loading: state.loading,
    showModal: state.showModal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrency: (symbol) => dispatch(actions.loadCurrencyPage(symbol)),
    toggleModal: () => dispatch(actions.toggleModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
