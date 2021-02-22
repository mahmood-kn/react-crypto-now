import React from 'react';

const Price = ({ className, price }) => {
  return (
    <div className={`${className} font-bold w-28`}>
      ${price.toLocaleString('en-US')}
    </div>
  );
};

export default Price;
