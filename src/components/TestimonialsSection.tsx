'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'דניאל לוי',
    text: 'מכון כושר אלפא שינה את חיי לחלוטין. האימונים האישיים והיחס החם של הצוות עזרו לי להשיג את המטרות שלי תוך זמן קצר. ממליץ בחום!',
    image: 'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    name: 'שירה כהן',
    text: 'הצטרפתי למכון כושר אלפא לפני חצי שנה והתוצאות מדהימות. המאמנים מקצועיים והאווירה חברתית ותומכת. המקום הכי טוב להתאמן בו!',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 3,
    name: 'אבי ישראלי',
    text: 'כמישהו שניסה הרבה מכוני כושר בעבר, אני יכול להעיד שאלפא הוא ברמה אחרת לגמרי. הציוד חדיש, המקום נקי, והצוות תמיד זמין לעזור. פשוט מעולה!',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 4,
    name: 'מיכל ברק',
    text: 'אני מתאמנת באלפא כבר שנתיים וזו ההחלטה הטובה ביותר שעשיתי. השיעורים הקבוצתיים מגוונים ומהנים, והמאמנים מקצועיים ומעוררי השראה.',
    image: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 5,
    name: 'יוסי מזרחי',
    text: 'מכון כושר אלפא הוא לא רק מקום להתאמן, אלא קהילה תומכת. התוכנית האישית שבנו עבורי התאימה בדיוק לצרכים שלי והתוצאות מדברות בעד עצמן!',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
  };

  useEffect(() => {
    resetAutoPlay();
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  return (
    <section 
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 md:px-8 lg:px-16 rtl"
      dir="rtl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            מה הלקוחות שלנו אומרים
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="relative h-[500px] md:h-[400px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full h-full"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/3 h-64 md:h-full">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-primary opacity-20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                    </svg>
                  </div>
                  <p className="text-xl md:text-2xl mb-8 leading-relaxed font-testimonial">
                    {testimonials[currentIndex].text}
                  </p>
                  <h3 className="text-2xl font-bold text-primary">
                    {testimonials[currentIndex].name}
                  </h3>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-16 left-0 right-0 flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-primary hover:bg-primary-dark text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              aria-label="הקודם"
            >
              <IoIosArrowForward className="text-2xl" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`עבור לעדות ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="bg-primary hover:bg-primary-dark text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              aria-label="הבא"
            >
              <IoIosArrowBack className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;