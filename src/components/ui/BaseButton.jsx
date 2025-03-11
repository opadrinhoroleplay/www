import React from 'react';
import { Link } from 'react-router-dom';

const BaseButton = ({ 
  children, 
  to, 
  onClick, 
  className = '',
  title,
  'aria-label': ariaLabel,
  type = 'button'
}) => {
  const ButtonWrapper = to ? Link : 'button';
  const buttonProps = to ? { to } : { onClick, type };

  return (
    <ButtonWrapper 
      {...buttonProps}
      className={`w-auto ${className} cursor-pointer`}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </ButtonWrapper>
  );
};

export default BaseButton; 