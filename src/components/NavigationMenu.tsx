'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

interface NavigationMenuProps {
  logo?: string;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ logo = '/logo.png' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'ראשי' },
    { id: 'about', label: 'אודות' },
    { id: 'services', label: 'שירותים' },
    { id: 'trainers', label: 'מאמנים' },
    { id: 'testimonials', label: 'המלצות' },
    { id: 'faq', label: 'שאלות נפוצות' },
    { id: 'contact', label: 'צור קשר' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Change navbar style on scroll
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Set active section based on scroll position
      const sections = menuItems.map(item => item.id);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  return (
    <nav 
      className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 dir-rtl ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="מכון כושר אלפא" className="h-12" />
            <span className="text-xl font-bold mr-2 text-primary">מכון כושר אלפא</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 space-x-reverse">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`px-4 py-2 mx-1 rounded-md cursor-pointer transition-colors duration-300 hover:text-secondary ${
                  activeSection === item.id
                    ? 'text-secondary font-bold'
                    : 'text-gray-700'
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </ScrollLink>
            ))}
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 mr-4">
              הירשם עכשיו
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 hover:text-secondary ${
                  activeSection === item.id
                    ? 'text-secondary font-bold'
                    : 'text-gray-700'
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </ScrollLink>
            ))}
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300 mt-4">
              הירשם עכשיו
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;