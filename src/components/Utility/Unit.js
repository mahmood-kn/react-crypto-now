import React from 'react';
import { connect } from 'react-redux';

const Unit = ({ unit }) => {
  return <span className='text-gray-400 text-xs'>({unit})</span>;
};
const mapStateToProps = (state) => {
  return {
    unit: state.unit,
  };
};
export default connect(mapStateToProps)(Unit);
