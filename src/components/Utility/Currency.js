import React from 'react';

const Currency = ({ classes, unit, clicked, disabled }) => {
  return (
    <button onClick={clicked} className={classes} disabled={disabled}>
      {unit}
    </button>
  );
};

export default Currency;
