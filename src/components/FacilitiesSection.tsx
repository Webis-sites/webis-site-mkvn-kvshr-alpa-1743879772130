'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FacilityProps {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
}

const facilities: FacilityProps[] = [
  {
    title: 'אזור אימון כוח',
    description: 'מגוון רחב של משקולות חופשיות ומכונות כוח מתקדמות לבניית שרירים ושיפור הכוח',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    alt: 'אזור אימון כוח במכון כושר אלפא'
  },
  {
    title: 'אזור קרדיו',
    description: 'מכשירי קרדיו חדישים כולל הליכונים, אליפטיקלים ואופני כושר לשיפור סיבולת לב-ריאה',
    imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    alt: 'אזור קרדיו במכון כושר אלפא'
  },
  {
    title: 'סטודיו לשיעורי קבוצות',
    description: 'חללים מרווחים לשיעורי יוגה, פילאטיס, זומבה ושיעורי סטודיו נוספים בהדרכת מדריכים מקצועיים',
    imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    alt: 'סטודיו לשיעורי קבוצות במכון כושר אלפא'
  },
  {
    title: 'אזור פונקציונלי',
    description: 'אזור ייעודי לאימונים פונקציונליים עם TRX, כדורי כוח, קטלבלס ועוד ציוד מתקדם',
    imageUrl: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    alt: 'אזור פונקציונלי במכון כושר אלפא'
  },
  {
    title: 'חדרי הלבשה מפוארים',
    description: 'חדרי הלבשה נוחים עם מקלחות פרטיות, לוקרים אישיים וכל מה שצריך להתרעננות לאחר האימון',
    imageUrl: 'https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    alt: 'חדרי הלבשה במכון כושר אלפא'
  }
];

const FacilitiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
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
    <section 
      ref={sectionRef} 
      className="facilities-section bg-gradient-to-br from-white to-gray-100 py-16 px-4 md:px-8 lg:px-16 dir-rtl"
      dir="rtl"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary playful-text">
            המתקנים שלנו
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            במכון כושר אלפא אנו מציעים מגוון רחב של מתקנים וציוד מתקדם כדי לספק לכם את חווית האימון הטובה ביותר
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="facility-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={facility.imageUrl}
                  alt={facility.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">{facility.title}</h3>
                <p className="text-gray-700">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <motion.button 
            className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            הצטרפו עכשיו לחוויית אימון מושלמת
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;