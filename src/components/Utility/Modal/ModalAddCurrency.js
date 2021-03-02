import React, { useEffect, useState } from 'react';
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
  showMenu,
  setShowMenu,
  addCurrencyBtn,
}) => {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
    return () => {
      setRendered(false);
    };
  }, []);
  const handleClick = (e) => {
    addCurrency(e.target.value);
    toggleModal(false);
    if (showMenu) {
      setShowMenu(false);
    }
  };
  return (
    <Modal
      showModal={showModal}
      onClickOutside={() => {
        if (rendered) {
          toggleModal(false);
        }
      }}>
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
    showMenu: state.showMenu,
    addCurrencyBtn: state.addCurrencyBtn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (val) => dispatch(actions.toggleModal(val)),
    addCurrency: (currency) => dispatch(actions.addCurrency(currency)),
    setShowMenu: (val) => dispatch(actions.setShowMenu(val)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
