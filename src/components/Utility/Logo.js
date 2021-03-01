import React from 'react';

const Logo = ({ className, size, logo, alt }) => {
  return (
    <div className={`${className} w-${size} h-${size}`}>
      <img src={logo} alt={alt} className={` max-h-full max-w-full `} />
    </div>
  );
};

export default Logo;
