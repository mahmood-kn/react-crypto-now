import React, { useEffect } from 'react';
import Navbar from '../Utility/Navbar/Navbar';
import HomeMainSection from './HomeMainSection';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import Table from './Table';

const HomePage = ({ onLoadApi, unit, cryptoToLoad, showMenu, setShowMenu }) => {
  useEffect(() => {
    if (showMenu) {
      setShowMenu(false);
    }
    onLoadApi(unit, cryptoToLoad);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unit, cryptoToLoad]);
  return (
    <>
      <Navbar homepage />
      <HomeMainSection />
      <Table />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    unit: state.unit,
    cryptoToLoad: state.cryptoToLoad,
    showMenu: state.showMenu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadApi: (unit, cryptoToLoad) =>
      dispatch(actions.loadApi(unit, cryptoToLoad)),
    setShowMenu: (val) => dispatch(actions.setShowMenu(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
