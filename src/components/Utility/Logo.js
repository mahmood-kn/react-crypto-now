import React from 'react';

const Logo = ({ className, size, logo, alt }) => {
  return (
    <div className={`${className} w-${size} h-${size}`}>
      <img src={logo} alt={alt} className={` max-h-full max-w-full `} />
    </div>
  );
};

// max-h-full
// max-w-full
// w-20
// h-20
// w-12
// h-12

export default Logo;
