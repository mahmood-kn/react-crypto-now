import React, { useEffect } from 'react';
import Navbar from '../Utility/Navbar/Navbar';
import HomeMainSection from './HomeMainSection';
import Table from './Table';

const HomePage = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div>
      <Navbar />
      <HomeMainSection />
      <Table />
    </div>
  );
};

export default HomePage;
