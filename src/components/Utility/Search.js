import React, { useState, useRef, useLayoutEffect } from 'react';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

const Search = ({ arrayToSearch, searchUnits, filterState }) => {
  const [search, setSearch] = useState('');
  const firstRender = useRef(true);
  useLayoutEffect(() => {
    if (!firstRender.current) {
      const filteredUnits = arrayToSearch.filter((unit) =>
        unit.toLowerCase().includes(search.toLowerCase())
      );
      searchUnits(filteredUnits, filterState);
    } else {
      firstRender.current = false;
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <input
      className='border border-gray-300 w-6/12  rounded-lg py-2 px-4 my-4 mx-auto block '
      type='text'
      placeholder='Search...'
      value={search}
      onChange={handleChange}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUnits: (filtered, filterState) =>
      dispatch(actions.searchUnits(filtered, filterState)),
  };
};

export default connect(null, mapDispatchToProps)(Search);
