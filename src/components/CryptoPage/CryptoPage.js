import React, { useEffect } from 'react';
import Navbar from '../Utility/Navbar/Navbar';
import CryptoPageContent from './CryptoPageContent';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Skeleton from '@yisheng90/react-loading';

const CryptoPage = ({ currency, loadCurrency, match, loading }) => {
  useEffect(() => {
    loadCurrency(match.params.name);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrency: (symbol) => dispatch(actions.loadCurrencyPage(symbol)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CryptoPage));
