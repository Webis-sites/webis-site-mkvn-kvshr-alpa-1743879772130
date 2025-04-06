'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  useEffect(() => {
    // Ensure RTL direction is set
    document.documentElement.dir = 'rtl';
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-primary/70 to-transparent z-10" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col items-end justify-center h-full px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-right">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4 font-playful"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            מכון כושר מוביל בישראל
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 font-playful"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button 
              className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50 font-playful"
            >
              קבע תור עכשיו
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Logo */}
      <motion.div 
        className="absolute top-6 right-6 md:top-10 md:right-10 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white font-playful">מכון כושר אלפא</h2>
      </motion.div>
    </div>
  );
};

export default HeroSection;