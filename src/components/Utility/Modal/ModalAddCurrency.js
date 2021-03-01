import React from 'react';
import UnitBtn from '../UnitBtn';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import Search from '../../Utility/Search';
import Modal from './Modal';

const ModalContent = ({
  loading,
  toggleModal,
  addCurrency,
  filteredCryptoes,
  showModal,
  cryptoes,
}) => {
  const handleClick = (e) => {
    addCurrency(e.target.value);
    toggleModal();
  };
  return (
    <Modal showModal={showModal}>
      <h1 className='text-2xl font-bold text-center '>Add New Currency</h1>
      <Search arrayToSearch={cryptoes} filterState={'filteredCryptoes'} />
      <div className='text-center'>
        {!loading && cryptoes.length > 0
          ? filteredCryptoes.map((unit) => (
              <UnitBtn key={unit} unit={unit} clicked={handleClick} />
            ))
          : 'Loading...'}
      </div>
    </Modal>
  );
};
const mapStateToProps = (state) => {
  return {
    showModal: state.showModal,
    loading: state.loading,
    rates: state.rates,
    allUnitsWithFilter: state.allUnitsWithFilter,
    cryptoes: state.cryptoes,
    filteredCryptoes: state.filteredCryptoes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(actions.toggleModal()),
    addCurrency: (currency) => dispatch(actions.addCurrency(currency)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
