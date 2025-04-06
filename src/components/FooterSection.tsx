'use client';

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

interface NewsletterFormData {
  email: string;
}

const FooterSection: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterFormData>();

  const onSubmit = (data: NewsletterFormData) => {
    console.log('Newsletter subscription:', data);
    // Here you would typically send the data to your backend
    alert('תודה שנרשמת לניוזלטר שלנו!');
    reset();
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white rtl" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-secondary mb-2">מכון כושר אלפא</h2>
              <img 
                src="/logo.png" 
                alt="מכון כושר אלפא" 
                className="h-16 w-auto mb-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/150x60?text=אלפא';
                }}
              />
            </div>
            <p className="text-sm mb-4">
              מכון כושר אלפא - המקום המושלם לאימון ולשיפור הכושר הגופני שלך. אנו מציעים מגוון רחב של ציוד מתקדם, מאמנים מקצועיים וסביבה תומכת.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-secondary transition-colors">דף הבית</a></li>
              <li><a href="/about" className="hover:text-secondary transition-colors">אודות</a></li>
              <li><a href="/classes" className="hover:text-secondary transition-colors">שיעורים</a></li>
              <li><a href="/trainers" className="hover:text-secondary transition-colors">מאמנים</a></li>
              <li><a href="/pricing" className="hover:text-secondary transition-colors">מחירים</a></li>
              <li><a href="/contact" className="hover:text-secondary transition-colors">צור קשר</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">צור קשר</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>רחוב הרצל 123, תל אביב</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>03-1234567</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:info@alpha-gym.co.il" className="hover:text-secondary transition-colors">
                  info@alpha-gym.co.il
                </a>
              </li>
              <li className="mt-4">
                <h4 className="font-bold mb-2">שעות פעילות:</h4>
                <p>ראשון - חמישי: 06:00 - 23:00</p>
                <p>שישי: 06:00 - 17:00</p>
                <p>שבת: 08:00 - 14:00</p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">הרשמה לניוזלטר</h3>
            <p className="mb-4 text-sm">
              הירשמו לניוזלטר שלנו וקבלו עדכונים על אירועים, מבצעים ועצות כושר.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="הזינו את כתובת האימייל שלכם"
                  className={`w-full p-2 rounded bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/30'} focus:outline-none focus:border-secondary text-right`}
                  {...register('email', { 
                    required: 'שדה חובה', 
                    pattern: { 
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                      message: 'כתובת אימייל לא תקינה' 
                    } 
                  })}
                />
                {errors.email && (
                  <p className="text-red-300 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
              <button 
                type="submit" 
                className="bg-secondary text-white py-2 px-4 rounded hover:bg-secondary/80 transition-colors w-full"
              >
                הרשמה
              </button>
            </form>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 space-x-reverse mb-4 md:mb-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://wa.me/9721234567" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
            <div className="text-sm text-center md:text-right">
              <p>© {currentYear} מכון כושר אלפא. כל הזכויות שמורות.</p>
              <div className="flex justify-center md:justify-end mt-2 space-x-4 space-x-reverse">
                <a href="/privacy" className="hover:text-secondary transition-colors">מדיניות פרטיות</a>
                <a href="/terms" className="hover:text-secondary transition-colors">תנאי שימוש</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;