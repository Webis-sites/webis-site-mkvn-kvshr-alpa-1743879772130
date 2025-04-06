'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if we need to show the button
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="חזרה לראש העמוד"
      dir="rtl"
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollToTopButton;