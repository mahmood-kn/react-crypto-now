import React, { useEffect } from 'react';
import Navbar from '../Utility/Navbar/Navbar';
import HomeMainSection from './HomeMainSection';
import * as actions from '../../store/actions';
import Table from './Table';

import { connect } from 'react-redux';

const HomePage = ({ onLoadApi, unit, cryptoToLoad }) => {
  useEffect(() => {
    onLoadApi(unit, cryptoToLoad);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unit]);
  return (
    <div>
      <Navbar homepage />
      <HomeMainSection />
      <Table />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    unit: state.unit,
    cryptoToLoad: state.cryptoToLoad,
  };
};

const mapDispatchToProps = (dipatch) => {
  return {
    onLoadApi: (unit, cryptoToLoad) =>
      dipatch(actions.loadApi(unit, cryptoToLoad)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
