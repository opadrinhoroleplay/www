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
  
  // Determine cursor class - use cursor-pointer if cursor-not-allowed isn't already included
  const cursorClass = className.includes('cursor-not-allowed') ? '' : 'cursor-pointer';

  return (
    <ButtonWrapper 
      {...buttonProps}
      className={`w-auto ${className} ${cursorClass}`}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </ButtonWrapper>
  );
};

export default BaseButton; 