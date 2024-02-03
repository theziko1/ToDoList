// CustomBadge.js
import React from 'react';

const Badge = ({ children , className }) => {
  const badgeClasses = `inline-block px-2 py-1 text-xs text-white font-semibold leading-tight uppercase rounded-full text- ${className}`;

  return <span className={badgeClasses}>{children}</span>;
};

export default Badge;
