import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SectionHeading = ({ title, id }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === `#${id}`) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash, id]);

  return (
    <div className="flex flex-col items-center mb-12 md:mb-20">
      <h2 
        id={id}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 scroll-mt-24 text-center"
      >
        <a 
          href={`#${id}`}
          className="hover:opacity-100 transition-all duration-300 bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent inline-block hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] focus:scale-105 focus:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] outline-none"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState(null, '', `#${id}`);
            }
          }}
          tabIndex={0}
          aria-label={`Secção ${title}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              const element = document.getElementById(id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', `#${id}`);
              }
            }
          }}
        >
          {title}
        </a>
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600"></div>
    </div>
  );
};

export default SectionHeading; 