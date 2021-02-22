import React from 'react';

const Change = ({ className, iconClass, priceChangePct }) => {
  return (
    <div
      className={`${className} flex items-center w-32 ${
        priceChangePct >= 0 ? 'text-green-500' : 'text-red-500'
      }`}>
      <span className={`${iconClass} material-icons `}>{`${
        priceChangePct >= 0 ? 'arrow_upward' : 'arrow_downward'
      }`}</span>
      %{(Math.abs(priceChangePct) * 100).toFixed(2)}
    </div>
  );
};

export default Change;
