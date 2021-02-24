import React, { useEffect } from 'react';
import UnitBtn from '../UnitBtn';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const ModalContent = ({
  loading,
  changeUnit,
  toggleModal,
  allUnits,
  loadUnits,
  showModal,
  cryptoToLoad,
}) => {
  useEffect(() => {
    if (showModal && allUnits.length === 0) {
      loadUnits();
    }
  }, [showModal]);
  const handleClick = (e) => {
    changeUnit(e.target.value, cryptoToLoad);
    toggleModal();
  };
  return (
    <>
      <h1 className='text-xl font-bold mb-10'>
        Show Prices In Another Currency
      </h1>
      <div>
        {!loading && allUnits.length > 0
          ? allUnits.map((unit) => (
              <UnitBtn unit={unit} clicked={handleClick} />
            ))
          : null}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    allUnits: state.allUnits,
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
