import React, { useEffect, useState } from 'react';
import ConverterMainSection from './ConverterMainSection';
import Navbar from '../Utility/Navbar/Navbar';
import Currency from '../Utility/Currency';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import SwapBtn from './SwapBtn';
import Modal from '../Utility/Modal/Modal';
import ModalRates from '../Utility/Modal/ModalRates';

const Converter = ({
  rates,
  currentRate,
  toggleModal,
  showModal,
  changeCurrentRate,
}) => {
  const [usd, setUsd] = useState('');
  const [endCurr, setEndCurr] = useState('');
  useEffect(() => {
    // getRates();
    if (rates !== null) {
      changeCurrentRate('BTC');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rates]);
  const handleClick = () => {
    toggleModal();
  };

  const usdChange = (e) => {
    setUsd(e.target.value);
    setEndCurr(e.target.value * +currentRate[0].rate);
  };

  const endCurrChange = (e) => {
    setEndCurr(e.target.value);
    setUsd(e.target.value / +currentRate[0].rate);
  };
  return (
    <>
      <Navbar />
      <ConverterMainSection />
      <div className='flex flex-col justify-center items-center h-96'>
        <div className='flex w-2/4 '>
          <Currency
            classes={`rounded-tl-md rounded-bl-md px-4 outline-none bg-white focus:outline-none cursor-not-allowed `}
            disabled
            unit={'USD'}
          />
          <input
            type='number'
            className='p-3 rounded-tr-md rounded-br-md w-full outline-none'
            value={usd}
            placeholder='Enter USD...'
            onChange={usdChange}
          />
          ;
        </div>
        <SwapBtn />
        <div className='flex w-2/4 '>
          <Currency
            classes={`rounded-tl-md rounded-bl-md px-4 outline-none bg-white focus:outline-none `}
            unit={currentRate ? currentRate[0].currency : ''}
            clicked={handleClick}
          />
          <input
            type='tezt'
            className='p-3 rounded-tr-md rounded-br-md w-full outline-none'
            value={endCurr}
            placeholder={`Enter ${
              currentRate ? currentRate[0].currency : 'BTC'
            }...`}
            onChange={endCurrChange}
          />
          ;
        </div>
        <Modal showModal={showModal} children={<ModalRates />} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    rates: state.rates,
    currentRate: state.currentRate,
    showModal: state.showModal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(actions.toggleModal()),
    getRates: () => dispatch(actions.getRates()),
    changeCurrentRate: (rate) => dispatch(actions.changeCurrentRate(rate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
