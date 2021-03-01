import React from 'react';
import { connect } from 'react-redux';

const Unit = ({ unit }) => {
  return (
    <span className='text-gray-400 md:text-xs md:my-0 my-3'>({unit})</span>
  );
};
const mapStateToProps = (state) => {
  return {
    unit: state.unit,
  };
};
export default connect(mapStateToProps)(Unit);
