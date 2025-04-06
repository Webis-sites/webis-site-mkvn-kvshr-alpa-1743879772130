'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaRunning, FaHeartbeat, FaYinYang } from 'react-icons/fa';

interface Trainer {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  icon: React.ReactNode;
}

const TrainersSection: React.FC = () => {
  const trainers: Trainer[] = [
    {
      id: 1,
      name: 'דניאל כהן',
      specialty: 'אימון כוח',
      bio: 'מאמן מקצועי עם 10 שנות ניסיון באימוני כוח. מתמחה בבניית תוכניות אימון אישיות המותאמות לצרכים הספציפיים של כל מתאמן.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      icon: <FaDumbbell />
    },
    {
      id: 2,
      name: 'מיכל לוי',
      specialty: 'אימוני סיבולת',
      bio: 'מאמנת ריצה וסיבולת מוסמכת. עוזרת למתאמנים להשיג את יעדי הכושר שלהם באמצעות תוכניות אימון מתקדמות ותזונה נכונה.',
      image: 'https://images.unsplash.com/photo-1609899537878-88d5ba429bdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      icon: <FaRunning />
    },
    {
      id: 3,
      name: 'אמיר גולן',
      specialty: 'אימוני קרדיו',
      bio: 'מאמן קרדיו מנוסה המתמחה בשיפור סיבולת לב-ריאה. מלמד טכניקות נשימה ומציע תוכניות אימון מותאמות אישית.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      icon: <FaHeartbeat />
    },
    {
      id: 4,
      name: 'שירה אברהם',
      specialty: 'יוגה ופילאטיס',
      bio: 'מדריכת יוגה ופילאטיס מוסמכת. מתמחה בשיפור גמישות, יציבה וחיזוק שרירי הליבה דרך תרגול מודע ונשימה נכונה.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      icon: <FaYinYang />
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section ref={sectionRef} className="trainers-section py-16 px-4 bg-gray-50 dir-rtl" id="trainers">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">הצוות המקצועי שלנו</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            הכירו את הצוות המקצועי של מכון כושר אלפא - מאמנים מוסמכים עם ניסיון רב שיעזרו לכם להשיג את המטרות שלכם
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.id}
              className="trainer-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-medium text-lg">{trainer.specialty}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{trainer.name}</h3>
                  <div className="text-secondary text-2xl">{trainer.icon}</div>
                </div>
                <div className="mb-3 inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {trainer.specialty}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{trainer.bio}</p>
                <button className="mt-4 w-full py-2 px-4 bg-secondary text-white rounded-md hover:bg-secondary-dark transition-colors duration-300 font-medium">
                  קביעת אימון
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrainersSection;