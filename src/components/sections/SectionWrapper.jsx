import React from 'react';

const SectionWrapper = ({ children, className = '', noDivider = false }) => {
  return (
    <div className={`relative even:bg-gradient-to-br even:from-black even:via-neutral-900/80 even:to-black odd:bg-gradient-to-br odd:from-black odd:via-amber-900/10 odd:to-black ${className}`}>
      {children}
      {!noDivider && (
        <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      )}
    </div>
  );
};

export default SectionWrapper; 