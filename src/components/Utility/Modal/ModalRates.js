import React, { useEffect } from 'react';
import UnitBtn from '../UnitBtn';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import Search from '../../Utility/Search';

const ModalContent = ({
  loading,
  toggleModal,
  showModal,
  rates,
  changeCurrentRate,
  allUnitsWithFilter,
}) => {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  const handleClick = (e) => {
    changeCurrentRate(e.target.value);
    toggleModal();
  };
  return (
    <>
      <h1 className='text-2xl font-bold text-center '>
        Show Prices In Another Currency
      </h1>
      <Search />
      <div>
        {!loading && rates !== null
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
    showModal: state.showModal,
    loading: state.loading,
    rates: state.rates,
    allUnitsWithFilter: state.allUnitsWithFilter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(actions.toggleModal()),
    changeCurrentRate: (rate) => dispatch(actions.changeCurrentRate(rate)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);
