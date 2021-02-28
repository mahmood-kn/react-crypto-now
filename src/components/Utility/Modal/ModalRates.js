import React, { useEffect } from 'react';
import UnitBtn from '../UnitBtn';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import Search from '../../Utility/Search';
import Modal from './Modal';

const ModalContent = ({
  loading,
  toggleModal,
  rates,
  changeCurrentRate,
  allUnitsWithFilter,
  showModal,
  allUnits,
}) => {
  const handleClick = (e) => {
    changeCurrentRate(e.target.value);
    toggleModal();
  };
  return (
    <Modal showModal={showModal}>
      <h1 className='text-2xl font-bold text-center '>
        Other Currencies To Convert
      </h1>
      <Search arrayToSearch={allUnits} filterState={'allUnitsWithFilter'} />
      <div>
        {!loading && rates !== null
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
    showModal: state.showModal,
    loading: state.loading,
    rates: state.rates,
    allUnitsWithFilter: state.allUnitsWithFilter,
    allUnits: state.allUnits,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(actions.toggleModal()),
    changeCurrentRate: (rate) => dispatch(actions.changeCurrentRate(rate)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
