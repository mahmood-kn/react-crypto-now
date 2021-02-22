import React from 'react';

const Logo = ({ className, size, logo, alt }) => {
  return (
    <div className={`${className} `}>
      <img src={logo} alt={alt} className={` w-${size} h-${size} `} />
    </div>
  );
};

export default Logo;
