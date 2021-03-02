import React, { useEffect, useState } from 'react';
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
    changeUnit(e.target.value, cryptoToLoad);
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
    showMenu: state.showMenu,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeUnit: (unit, cryptoToLoad) =>
      dispatch(actions.changeUnit(unit, cryptoToLoad)),
    toggleModal: (val) => dispatch(actions.toggleModal(val)),
    setShowMenu: (val) => dispatch(actions.setShowMenu(val)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
