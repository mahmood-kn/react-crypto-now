import React, { useEffect } from 'react';
import Navbar from '../Utility/Navbar/Navbar';
import HomeMainSection from './HomeMainSection';
import * as actions from '../../store/actions';
import Table from './Table';
import Modal from '../Modal/Modal';

import { connect } from 'react-redux';

const HomePage = ({ onLoadApi }) => {
  useEffect(() => {
    onLoadApi();
  }, []);
  return (
    <div>
      <Navbar homepage />
      <HomeMainSection />
      <Table />
      <Modal />
    </div>
  );
};

const mapDispatchToProps = (dipatch) => {
  return {
    onLoadApi: () => dipatch(actions.loadApi()),
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
