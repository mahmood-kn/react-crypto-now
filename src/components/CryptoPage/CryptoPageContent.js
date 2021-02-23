import React, { useEffect } from 'react';
import Navbar from '../Utility/Navbar/Navbar';
import Logo from '../Utility/Logo';
import Name from '../Utility/Name';
import Price from '../Utility/Price';
import Change from '../Utility/Change';
import Details from './Details';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const CryptoPage = ({ currency, loadCurrency, match, loading }) => {
  return (
    <>
      {currency !== null && (
        <div className='flex flex-col w-full container mx-auto'>
          <div className='flex py-10 items-center'>
            <Logo logo={currency.logo_url} size={20} alt={currency.id} />
            <Name
              className='text-2xl ml-4 font-bold'
              name={currency.name}
              symbol={currency.symbol}
            />
          </div>
          <div>
            <div className='flex h-20'>
              <div className='w-1/3 flex justify-between pl-10 items-end'>
                <Price className='text-4xl pr-3' price={+currency.price} />
                <Change
                  className='text-xl'
                  ChangePct={currency['1d'].price_change_pct}
                />
              </div>
              <div className='w-2/3'>
                <Details
                  marketCapVal={currency.market_cap}
                  marketCapPctVal={currency['1d'].market_cap_change_pct}
                  volumeVal={currency['1d'].volume}
                  volumePctVal={currency['1d'].volume_change_pct}
                  rankVal={currency.rank}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    // currency: state.currentCurrency,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(withRouter(CryptoPage));
