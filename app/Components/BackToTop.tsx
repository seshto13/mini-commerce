// BackToTopButton.tsx

import React, { useState, useEffect } from 'react';

const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const showThreshold = 200; // Adjust this value to change when the button appears
      setShowButton(scrollPosition > showThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`fixed z-30 bottom-4 right-2 bg-green hover:bg-lime-700 text-white font-bold py-2 px-3 rounded-md 
                  transition-opacity duration-300 ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={scrollToTop}
    >
      &#8593; {/* Unicode arrow character */}
    </button>
  );
};

export default BackToTopButton;
