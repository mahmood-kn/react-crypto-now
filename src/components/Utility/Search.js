import React, { useState, useEffect } from 'react';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

const Search = ({ allUnits, searchUnits }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const filteredUnits = allUnits.filter((unit) =>
      unit.toLowerCase().includes(search.toLowerCase())
    );
    // console.log(filteredUnits);
    searchUnits(filteredUnits);
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <input
      className='border border-gray-300 w-6/12  rounded-lg py-2 px-4 my-4 mx-auto block'
      type='text'
      placeholder='Search...'
      value={search}
      onChange={handleChange}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    allUnits: state.allUnits,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUnits: (filtered) => dispatch(actions.searchUnits(filtered)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
