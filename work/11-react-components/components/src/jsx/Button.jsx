
import React from 'react';

const Button = ({ type = 'button', visual = 'button', onClick, children }) => {
  const className = `button__${visual}`; // This can be linked to specific CSS classes
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
