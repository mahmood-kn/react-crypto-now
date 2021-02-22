import React, { useEffect, useState } from 'react';
import Navbar from '../Utility/Navbar/Navbar';
import Logo from '../Utility/Logo';
import Name from '../Utility/Name';
import Price from '../Utility/Price';
import Change from '../Utility/Change';
import Details from './Details';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const CryptoPage = ({ currency, loadCurrency, match, apiData }) => {
  useEffect(() => {
    loadCurrency(match.params.name);
    // if (currency === null) {
    // }
  }, [match.params.name]);
  return (
    <>
      {console.log(currency)}
      <Navbar cryptoPage />
      <div className='flex flex-col w-full container mx-auto'>
        <div className='flex py-10 items-center'>
          <Logo
            logo={currency !== null ? currency.logo_url : ''}
            size={20}
            alt={currency !== null ? currency.id : ''}
          />
          <Name
            className='text-2xl ml-4 font-bold'
            name={currency !== null && currency.name}
            symbol={currency !== null && currency.symbol}
          />
        </div>
        <div>
          <div className='flex h-20'>
            <div className='w-1/3 flex justify-between pl-10 items-end'>
              <Price className='text-4xl pr-3' price={10} />
              <Change
                className='text-xl'
                ChangePct={currency !== null && currency['1d'].price_change_pct}
              />
            </div>
            <div className='w-2/3'>
              <Details
                marketCapVal={currency !== null && currency.market_cap}
                marketCapPctVal={
                  currency !== null && currency['1d'].market_cap_change_pct
                }
                volumeVal={currency !== null && currency['1d'].volume}
                volumePctVal={
                  currency !== null && currency['1d'].volume_change_pct
                }
                rankVal={currency !== null && currency.rank}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currency: state.currentCurrency,
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
