import React from 'react';
import UnitBtn from '../UnitBtn';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import Search from '../../Utility/Search';
import Modal from './Modal';

const ModalContent = ({
  loading,
  changeUnit,
  toggleModal,
  allUnits,
  allUnitsWithFilter,
  cryptoToLoad,
  showModal,
}) => {
  const handleClick = (e) => {
    changeUnit(e.target.value, cryptoToLoad);
    toggleModal();
  };
  return (
    <Modal showModal={showModal}>
      <h1 className='text-2xl font-bold text-center '>
        Show Prices In Another Currency
      </h1>
      <Search arrayToSearch={allUnits} filterState={'allUnitsWithFilter'} />
      <div className='text-center'>
        {!loading && allUnits.length > 0
          ? allUnitsWithFilter.map((unit) => (
              <UnitBtn key={unit} unit={unit} clicked={handleClick} />
            ))
          : null}
      </div>
    </Modal>
  );
};
const mapStateToProps = (state) => {
  return {
    allUnitsWithFilter: state.allUnitsWithFilter,
    allUnits: state.allUnits,
    loading: state.loading,
    cryptoToLoad: state.cryptoToLoad,
    showModal: state.showModal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeUnit: (unit, cryptoToLoad) =>
      dispatch(actions.changeUnit(unit, cryptoToLoad)),
    toggleModal: () => dispatch(actions.toggleModal()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
