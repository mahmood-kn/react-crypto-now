import React, { useState, useEffect, useRef } from 'react';
import ConverterMainSection from './ConverterMainSection';
import Navbar from '../Utility/Navbar/Navbar';
import Currency from '../Utility/Currency';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import SwapBtn from './SwapBtn';
import ModalRates from '../Utility/Modal/ModalRates';

const Converter = ({
  currentRate,
  toggleModal,
  showModal,
  changeCurrentRate,
  rates,
  showMenu,
  setShowMenu,
}) => {
  const [usd, setUsd] = useState('');
  const [endCurr, setEndCurr] = useState('');
  const btnClick = useRef(false);
  useEffect(() => {
    if (showMenu) {
      setShowMenu(false);
    }
    if (rates !== null && currentRate[0].rate === '') {
      changeCurrentRate('BTC');
    }
    if (showModal === false) {
      btnClick.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, rates]);

  const handleClick = () => {
    toggleModal(true);
    btnClick.current = true;
  };

  const usdChange = (e) => {
    setUsd(e.target.value);
    setEndCurr(+e.target.value * +currentRate[0].rate);
  };

  const endCurrChange = (e) => {
    setEndCurr(e.target.value);
    setUsd(+e.target.value / +currentRate[0].rate);
  };
  return (
    <>
      <Navbar />
      <ConverterMainSection />
      <div className='flex flex-col justify-center items-center h-96'>
        <div className='flex md:w-2/4 w-10/12'>
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
        <div className='flex md:w-2/4 w-10/12'>
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
          {btnClick.current ? <ModalRates /> : null};
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    rates: state.rates,
    currentRate: state.currentRate,
    showModal: state.showModal,
    showMenu: state.showMenu,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (val) => dispatch(actions.toggleModal(val)),
    setShowMenu: (val) => dispatch(actions.setShowMenu(val)),
    changeCurrentRate: (unit) => dispatch(actions.changeCurrentRate(unit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
