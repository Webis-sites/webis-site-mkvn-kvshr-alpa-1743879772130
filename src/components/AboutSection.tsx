'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaDumbbell, FaUsers, FaCalendarAlt, FaAward } from 'react-icons/fa';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg">
      <div className="text-primary mb-2 text-3xl">{icon}</div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm text-gray-200">{label}</div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary font-display">
              אודות מכון כושר אלפא
            </h2>
            <motion.p 
              variants={itemVariants} 
              className="text-lg mb-8 leading-relaxed"
            >
              אנחנו מכון כושר מוביל בתחום הבידור עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </motion.p>
            <motion.p 
              variants={itemVariants} 
              className="text-lg mb-8 leading-relaxed"
            >
              הצוות המקצועי שלנו כולל מאמנים מוסמכים עם ניסיון רב בתחום הכושר והבריאות. אנו מציעים מגוון רחב של אימונים, מכשירים חדישים ותוכניות אישיות המותאמות לכל מתאמן.
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                קרא עוד
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="מכון כושר אלפא" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16"
        >
          <motion.div variants={itemVariants}>
            <StatItem 
              icon={<FaCalendarAlt />} 
              value="15+" 
              label="שנות ניסיון" 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatItem 
              icon={<FaUsers />} 
              value="5,000+" 
              label="מתאמנים מרוצים" 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatItem 
              icon={<FaDumbbell />} 
              value="50+" 
              label="סוגי אימונים" 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatItem 
              icon={<FaAward />} 
              value="12" 
              label="פרסים ותעודות" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;