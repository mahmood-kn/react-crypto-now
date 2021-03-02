import React, { useEffect, useState } from 'react';
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
  showMenu,
  setShowMenu,
}) => {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
    return () => {
      setRendered(false);
    };
  }, []);
  const handleClick = (e) => {
    changeCurrentRate(e.target.value);
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
      <h1 className='md:text-2xl text-xl font-bold text-center '>
        Other Currencies To Convert
      </h1>
      <Search arrayToSearch={allUnits} filterState={'allUnitsWithFilter'} />
      <div className='text-center'>
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
    showMenu: state.showMenu,
    loading: state.loading,
    rates: state.rates,
    allUnitsWithFilter: state.allUnitsWithFilter,
    allUnits: state.allUnits,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (val) => dispatch(actions.toggleModal(val)),
    changeCurrentRate: (rate) => dispatch(actions.changeCurrentRate(rate)),
    setShowMenu: (val) => dispatch(actions.setShowMenu(val)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
