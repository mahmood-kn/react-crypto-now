import React from 'react';

const Change = ({ className, iconClass, ChangePct }) => {
  return (
    <div
      className={`${className} flex items-center w-32 justify-center md:justify-start ${
        ChangePct >= 0 ? 'text-green-500' : 'text-red-500'
      }`}>
      <span className={`${iconClass} material-icons `}>{`${
        ChangePct >= 0 ? 'arrow_upward' : 'arrow_downward'
      }`}</span>
      %{(Math.abs(ChangePct) * 100).toFixed(2)}
    </div>
  );
};

export default Change;
