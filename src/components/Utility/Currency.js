import React from 'react';

const Currency = ({ classes, unit, clicked }) => {
  return (
    <button onClick={clicked} className={classes}>
      {unit}
    </button>
  );
};

export default Currency;
