import React from 'react';
import Logo from '../Utility/Logo';
import Name from '../Utility/Name';
import Price from '../Utility/Price';
import Change from '../Utility/Change';
import Details from './Details';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Unit from '../Utility/Unit';

const CryptoPage = ({ currency }) => {
  return (
    <>
      {currency !== null && (
        <div className='md:flex md:flex-col md:w-full container md:mx-auto md:h-screen md:-m-24 md:justify-center text-white flex flex-col justify-center items-center md:items-stretch p-5 -mt-8'>
          <div className='flex py-10 items-center'>
            <Logo logo={currency.logo_url} size={20} alt={currency.id} />
            <Name
              className='text-2xl ml-4 font-bold'
              name={currency.name}
              symbol={currency.symbol}
            />
          </div>
          <div>
            <div className='md:flex h-20'>
              <div className='md:w-1/3 md:flex md:justify-between md:pl-10 md:items-end text-center md:text-left'>
                <Price
                  className='text-3xl mb-2 md:mb-0'
                  price={+currency.price}
                />
                <Unit />
                <Change
                  className='text-lg my-2 md:my-0'
                  ChangePct={currency['1d'].price_change_pct}
                />
              </div>
              <div className='md:w-2/3'>
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
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(withRouter(CryptoPage));
