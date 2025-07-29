
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: t('contact.successMessage'),
      });
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="mb-6 sm:mb-8 border-b-2 border-primary pb-2 text-right">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-700 bg-blue-50 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border-b-4 border-blue-300 inline-block mb-3 sm:mb-4 font-serif flex items-center justify-center gap-2">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-700" />
              {t('contact.title')}
            </h2>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 space-y-6 text-right">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 text-center">{t('contact.contactMethods')}</h3>
              
              {/* Email */}
              <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <div className="text-center">
                  <p className="font-semibold text-sm sm:text-base">{t('contact.email')}</p>
                  <a 
                    href="mailto:contact@aurelia.dev" 
                    className="text-blue-600 hover:text-blue-800 text-sm sm:text-base"
                  >
                    contact@aurelia.dev
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <div className="text-center">
                  <p className="font-semibold text-sm sm:text-base">{t('contact.phone')}</p>
                  <a 
                    href="tel:+972501234567" 
                    className="text-blue-600 hover:text-blue-800 text-sm sm:text-base"
                  >
                    +972-50-123-4567
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                <MessageCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <div className="text-center">
                  <p className="font-semibold text-sm sm:text-base">{t('contact.whatsapp')}</p>
                  <a 
                    href="https://wa.me/972501234567" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 text-sm sm:text-base"
                  >
                    +972-50-123-4567
                  </a>
                </div>
              </div>

              {/* Additional Contact Info */}
              <div className="pt-4">
                <p className="text-sm text-gray-600 mb-2 text-center">{t('contact.workingHours')}:</p>
                <p className="text-sm text-gray-600 text-center">{t('contact.weekdays')}</p>
                <p className="text-sm text-gray-600 text-center">{t('contact.friday')}</p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 text-center">{t('contact.sendMessage')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 text-right max-w-md mx-auto">
              <label className="block mb-1 font-semibold text-right text-sm sm:text-base" htmlFor="name">שם מלא</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="שם מלא"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-400 rounded-md bg-gray-100 focus:bg-white focus:border-primary text-right text-sm sm:text-base"
                required
              />
              <label className="block mb-1 font-semibold text-right text-sm sm:text-base" htmlFor="email">אימייל</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="אימייל"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-400 rounded-md bg-gray-100 focus:bg-white focus:border-primary text-right text-sm sm:text-base"
                required
              />
              <label className="block mb-1 font-semibold text-right text-sm sm:text-base" htmlFor="message">ההודעה שלך</label>
              <textarea
                name="message"
                id="message"
                placeholder="ההודעה שלך"
                value={form.message}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border border-gray-400 rounded-md bg-gray-100 focus:bg-white focus:border-primary text-right text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-white p-2 sm:p-3 rounded-md hover:bg-primary/90 transition font-bold text-base sm:text-lg"
              >
                שלח
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
