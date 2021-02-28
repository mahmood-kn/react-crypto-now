import React from 'react';
import Row from './Row';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Skeleton from '@yisheng90/react-loading';
import classes from './Table.module.css';
import Unit from '../Utility/Unit';

const Table = ({ apiData, history, loading }) => {
  const clickHandler = (name) => {
    history.push({
      pathname: '/currency/' + name,
      param: name,
    });
  };
  return (
    <table
      className={`${classes.Table} w-6/12 shadow-md  border absolute  top-2/4 left-1/2  rounded-md  transform -translate-x-1/2 bg-white `}>
      <thead>
        <tr className='border-b border-gray-300'>
          <th></th>
          <th>Name</th>
          <th>
            Price <Unit />
          </th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {!loading ? (
          apiData !== null &&
          apiData.map((cur) => (
            <Row
              key={cur.id}
              data={cur}
              onClickHandler={() => clickHandler(cur.symbol)}
            />
          ))
        ) : (
          <tr>
            <td colSpan='5'>
              <Skeleton height={80} rows={6} />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    apiData: state.apiData,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(withRouter(Table));
