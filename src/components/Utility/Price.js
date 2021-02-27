import React from 'react';
import { dispWithComma } from '../../utility/utilsFuncs';

const Price = ({ className, price }) => {
  return (
    <div className={`${className} font-bold `}>{dispWithComma(price)} </div>
  );
};

export default Price;
