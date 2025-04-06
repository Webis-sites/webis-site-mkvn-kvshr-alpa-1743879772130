'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 font-heebo rtl" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">צור קשר</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            אנחנו כאן כדי לענות על כל שאלה. מלא את הטופס או השתמש בפרטי הקשר למטה.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">תודה על פנייתך!</h3>
                <p className="text-gray-600">נחזור אליך בהקדם האפשרי.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">שם מלא</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-secondary`}
                    {...register("name", { required: "שדה חובה" })}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">טלפון</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    type="tel"
                    id="phone"
                    className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-secondary`}
                    {...register("phone", { 
                      required: "שדה חובה",
                      pattern: {
                        value: /^[0-9]{9,10}$/,
                        message: "מספר טלפון לא תקין"
                      }
                    })}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">אימייל</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-secondary`}
                    {...register("email", { 
                      required: "שדה חובה",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "כתובת אימייל לא תקינה"
                      }
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">הודעה</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    id="message"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-secondary`}
                    {...register("message", { required: "שדה חובה" })}
                  ></motion.textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  שלח הודעה
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">פרטי התקשרות</h3>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 space-x-reverse"
                >
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">כתובת</h4>
                    <p className="text-gray-600">רחוב הרצל 123, תל אביב</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 space-x-reverse"
                >
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full">
                    <FaPhone className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">טלפון</h4>
                    <p className="text-gray-600 ltr:text-right" dir="ltr">03-1234567</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 space-x-reverse"
                >
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full">
                    <FaEnvelope className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">אימייל</h4>
                    <p className="text-gray-600">info@alpha-fitness.co.il</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">שעות פעילות</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <FaClock className="text-secondary text-xl" />
                  <h4 className="font-bold text-gray-800">שעות פתיחה</h4>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">ראשון - חמישי</span>
                    <span className="font-medium">06:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">שישי</span>
                    <span className="font-medium">06:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">שבת</span>
                    <span className="font-medium">08:00 - 20:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary bg-opacity-10 rounded-lg border border-primary border-opacity-20">
              <h4 className="font-bold text-xl text-primary mb-2">הצטרף עכשיו!</h4>
              <p className="text-gray-700 mb-4">
                מעוניין להצטרף למכון כושר אלפא? אנחנו מציעים מגוון חבילות מותאמות אישית.
              </p>
              <motion.a 
                href="#membership"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-secondary text-white font-bold py-2 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
              >
                למידע נוסף
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;