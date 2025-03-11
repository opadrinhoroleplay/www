import React from 'react';
import { ArrowRight } from 'lucide-react';
import BaseButton from './BaseButton';

const DarkButton = ({ 
  children, 
  to, 
  onClick, 
  leftIcon,
  rightIcon = <ArrowRight className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform duration-300" />,
  className = '',
  title,
  'aria-label': ariaLabel,
  type
}) => {
  return (
    <BaseButton 
      to={to} 
      onClick={onClick} 
      className={className}
      title={title}
      aria-label={ariaLabel}
      type={type}
    >
      <div className="relative group block">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-red-900 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
        <div className="relative p-4 bg-gradient-to-br from-neutral-900 to-black rounded-lg group-hover:from-black group-hover:to-neutral-900 transition duration-300">
          <span className="flex items-center justify-between gap-4 text-lg">
            {leftIcon}
            <span className="text-white font-medium">{children}</span>
            {rightIcon}
          </span>
        </div>
      </div>
    </BaseButton>
  );
};

export default DarkButton; 