import React, { useEffect } from 'react';
import UnitBtn from '../UnitBtn';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import Search from '../../Utility/Search';

const ModalContent = ({
  loading,
  changeUnit,
  toggleModal,
  allUnitsWithFilter,
  loadUnits,
  showModal,
  cryptoToLoad,
}) => {
  useEffect(() => {
    if (showModal && allUnitsWithFilter.length === 0) {
      loadUnits();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  const handleClick = (e) => {
    changeUnit(e.target.value, cryptoToLoad);
    toggleModal();
  };
  return (
    <>
      <h1 className='text-2xl font-bold text-center '>
        Show Prices In Another Currency
      </h1>
      <Search />
      <div>
        {!loading && allUnitsWithFilter.length > 0
          ? allUnitsWithFilter.map((unit) => (
              <UnitBtn key={unit} unit={unit} clicked={handleClick} />
            ))
          : null}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    allUnitsWithFilter: state.allUnitsWithFilter,
    showModal: state.showModal,
    loading: state.loading,
    cryptoToLoad: state.cryptoToLoad,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeUnit: (unit, cryptoToLoad) =>
      dispatch(actions.changeUnit(unit, cryptoToLoad)),
    toggleModal: () => dispatch(actions.toggleModal()),
    loadUnits: () => dispatch(actions.loadUnits()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
