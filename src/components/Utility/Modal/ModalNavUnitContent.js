import React, { useEffect } from 'react';
import UnitBtn from '../UnitBtn';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import Search from '../../Utility/Search';

const ModalContent = ({
  loading,
  changeUnit,
  toggleModal,
  allUnits,
  allUnitsWithFilter,
  saveUnits,
  showModal,
  cryptoToLoad,
  rates,
}) => {
  useEffect(() => {
    if (allUnits.length === 0 && rates !== null) {
      const currencies = [];
      rates.forEach((curr) => {
        currencies.push(curr.currency);
      });
      saveUnits(currencies);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rates]);
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
        {!loading && allUnits.length > 0
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
    allUnits: state.allUnits,
    showModal: state.showModal,
    loading: state.loading,
    cryptoToLoad: state.cryptoToLoad,
    rates: state.rates,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeUnit: (unit, cryptoToLoad) =>
      dispatch(actions.changeUnit(unit, cryptoToLoad)),
    toggleModal: () => dispatch(actions.toggleModal()),
    saveUnits: (units) => dispatch(actions.saveUnits(units)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
