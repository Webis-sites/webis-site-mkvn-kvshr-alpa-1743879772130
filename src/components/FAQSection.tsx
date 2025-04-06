'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "מהם שעות הפעילות של מכון כושר אלפא?",
      answer: "מכון כושר אלפא פתוח בימים א'-ה' מהשעה 6:00 עד 23:00, בימי שישי מ-7:00 עד 17:00, ובשבת מ-8:00 עד 14:00. בחגים יתכנו שינויים בשעות הפעילות, אנא עקבו אחר הפרסומים שלנו."
    },
    {
      question: "אילו סוגי מנויים מציע מכון כושר אלפא?",
      answer: "אנו מציעים מגוון אפשרויות מנוי: מנוי חודשי, רבעוני, חצי שנתי ושנתי. קיימות הנחות משמעותיות למנויים ארוכי טווח. בנוסף, אנו מציעים כרטיסיות כניסה בודדות ומנויים מיוחדים לסטודנטים, חיילים וגמלאים."
    },
    {
      question: "האם יש מאמנים אישיים במכון?",
      answer: "בהחלט! במכון כושר אלפא צוות מאמנים מוסמך ומקצועי שישמח לסייע לך להשיג את המטרות שלך. ניתן לקבוע אימון אישי בתוספת תשלום. פנה לקבלה לפרטים נוספים ולתיאום פגישת היכרות עם אחד המאמנים שלנו."
    },
    {
      question: "אילו שיעורי סטודיו מוצעים במכון?",
      answer: "אנו מציעים מגוון רחב של שיעורי סטודיו כגון: יוגה, פילאטיס, ספינינג, זומבה, אירובי, TRX, היט, ועוד. לוח השיעורים המלא מתעדכן מדי שבוע ומופיע באפליקציה ובלוח המודעות במכון."
    },
    {
      question: "האם ניתן להקפיא מנוי?",
      answer: "כן, ניתן להקפיא מנוי לתקופה של עד חודש בשנה (במנוי שנתי) ללא תשלום נוסף. הקפאות מעבר לכך כרוכות בתשלום סמלי. יש להודיע על הקפאה מראש בקבלה או דרך האפליקציה."
    },
    {
      question: "האם יש חניה במקום?",
      answer: "כן, למכון כושר אלפא חניון פרטי הפתוח למנויים ללא תשלום. בנוסף, ישנה חניה ציבורית בסביבה הקרובה."
    },
    {
      question: "האם יש מקלחות ולוקרים במכון?",
      answer: "בהחלט! המכון מצויד במלתחות מרווחות עם מקלחות ולוקרים. הלוקרים ניתנים לשימוש חופשי במהלך האימון (יש להביא מנעול אישי). אנו מציעים גם אפשרות לשכירת לוקר קבוע בתשלום חודשי."
    },
    {
      question: "האם יש תקופת ניסיון למנויים חדשים?",
      answer: "כן, אנו מציעים אימון ניסיון חינם למתעניינים חדשים. בנוסף, כל המנויים החדשים נהנים מאפשרות ביטול בתוך 14 יום מיום הרכישה עם החזר כספי מלא (בניכוי דמי ביטול מינימליים כפי שמוגדר בחוק)."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section bg-white py-12 px-4 sm:px-6 lg:px-8 rtl" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">שאלות נפוצות</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full px-6 py-4 text-right flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium text-gray-900">{item.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-secondary"
                >
                  <FaChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;