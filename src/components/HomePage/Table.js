import React from 'react';
import Row from './Row';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Table = ({ apiData, history }) => {
  const clickHandler = (name) => {
    history.push({
      pathname: '/currency/' + name,
      param: name,
    });
  };
  return (
    <div className=' w-7/12 shadow-md  border border-gray-300 absolute  top-2/4 left-1/2  rounded-tl-md rounded-tr-md transform -translate-x-1/2'>
      <div className=' bg-white    rounded-tl-md rounded-tr-md p-8  flex justify-between border-b border-gray-300'>
        <div></div>
        <div>Name</div>
        <div>Price</div>
        <div>Change</div>
        <div>Weekly Chart</div>
      </div>
      {apiData !== null &&
        apiData.map((cur, i) => (
          <Row
            key={cur.id}
            data={cur}
            onClickHandler={() => clickHandler(cur.symbol)}
          />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    apiData: state.apiData,
  };
};

export default connect(mapStateToProps)(withRouter(Table));
