import React from 'react';

const Button = ({ children, onClick, variant = 'primary', disabled = false, className = '' }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
