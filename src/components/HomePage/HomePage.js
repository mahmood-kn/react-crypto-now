import React, { useEffect } from 'react';
import Navbar from '../Utility/Navbar/Navbar';
import HomeMainSection from './HomeMainSection';
import * as actions from '../../store/actions';
import Table from './Table';

import { connect } from 'react-redux';

const HomePage = ({ onLoadApi }) => {
  useEffect(() => {
    onLoadApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Navbar homepage />
      <HomeMainSection />
      <Table />
    </div>
  );
};

const mapDispatchToProps = (dipatch) => {
  return {
    onLoadApi: () => dipatch(actions.loadApi()),
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
