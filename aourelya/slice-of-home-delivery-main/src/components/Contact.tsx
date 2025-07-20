
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone } from 'lucide-react';

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
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="mb-8 border-b-2 border-primary pb-2 text-right">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 bg-blue-50 px-8 py-4 rounded-2xl border-b-4 border-blue-300 inline-block mb-4 font-serif flex items-center justify-center gap-2">
              <Mail className="h-7 w-7 text-blue-700" />
              {t('contact.title')}
            </h2>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          {/* מידע נוסף הוסר, הכל עבר לכותרת למעלה */}
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white shadow-md rounded-lg p-8 w-full max-w-md mx-auto md:mx-0"
          >
            {/* הסרתי את כותרת המשנה, נשארת רק כותרת ראשית */}
            <form onSubmit={handleSubmit} className="space-y-6 text-right">
              <label className="block mb-1 font-semibold text-right" htmlFor="name">שם מלא</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="שם מלא"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-400 rounded-md bg-gray-100 focus:bg-white focus:border-primary text-right"
                required
              />
              <label className="block mb-1 font-semibold text-right" htmlFor="email">אימייל</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="אימייל"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-400 rounded-md bg-gray-100 focus:bg-white focus:border-primary text-right"
                required
              />
              <label className="block mb-1 font-semibold text-right" htmlFor="message">ההודעה שלך</label>
              <textarea
                name="message"
                id="message"
                placeholder="ההודעה שלך"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-400 rounded-md bg-gray-100 focus:bg-white focus:border-primary text-right"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-white p-3 rounded-md hover:bg-primary/90 transition font-bold text-lg"
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
