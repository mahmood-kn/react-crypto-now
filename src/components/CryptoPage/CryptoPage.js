import React, { useEffect } from 'react';
import Navbar from '../Utility/Navbar/Navbar';
import CryptoPageContent from './CryptoPageContent';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Skeleton from '@yisheng90/react-loading';

const CryptoPage = ({ currency, loadCurrency, match, loading, unit }) => {
  useEffect(() => {
    console.log(unit);
    loadCurrency(match.params.name, unit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.name, unit]);
  return (
    <>
      <Navbar cryptoPage />
      {!loading ? (
        <CryptoPageContent currency={currency} />
      ) : (
        <>
          <div className='flex  justify-center items-center pt-20'>
            <Skeleton circle width={100} />
            <Skeleton width='70%' height='50px' />
          </div>
          <div className='flex  justify-center items-center py-5'>
            <Skeleton width='77%' height='50px' />
          </div>
          <div className='flex  justify-center items-center py-5'>
            <Skeleton width='77%' height='50px' />
          </div>
          <div className='flex  justify-center items-center py-5'>
            <Skeleton width='77%' height='50px' />
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currency: state.currentCurrency,
    loading: state.loading,
    unit: state.unit,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrency: (symbol, unit) =>
      dispatch(actions.loadCurrencyPage(symbol, unit)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CryptoPage));
