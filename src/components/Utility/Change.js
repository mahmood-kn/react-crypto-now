import React from 'react';

const Change = ({ className, iconClass }) => {
  return (
    <span className={`${className} flex items-center`}>
      <span className={`${iconClass} material-icons`}>arrow_downward</span>
      %3.66
    </span>
  );
};

export default Change;
