
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone } from 'lucide-react';
import { Box, Typography, Paper } from '@mui/material'; // Import Box, Typography, and Paper

const Contact = () => {
  const { t } = useTranslation();
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
          <Box sx={{ mb: 4, pb: 1, borderBottom: '2px solid', borderColor: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <Mail sx={{ fontSize: '2.25rem', color: 'primary.main' }} />
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                background: 'linear-gradient(45deg, #2196F3 30%, #1565C0 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}
            >
              {t('contact.title')}
            </Typography>
          </Box>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          {/* מידע נוסף הוסר, הכל עבר לכותרת למעלה */}
          
          {/* Contact Form */}
          <Paper
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            elevation={6} // Consistent shadow with Hero and About
            sx={{
              p: { xs: 3, sm: 5, md: 8 }, // Consistent padding
              borderRadius: 3, // Consistent border radius
              bgcolor: 'background.paper', // Consistent background color
              mx: 'auto', // Center the card
              maxWidth: '100%', // Ensure it takes full width within its container
              textAlign: 'right' // Text alignment as before
            }}
          >
            {/* הסרתי את כותרת המשנה, נשארת רק כותרת ראשית */}
            <form onSubmit={handleSubmit} className="space-y-6 text-right">
              <label className="block mb-1 font-semibold text-right" htmlFor="name"><Typography variant="body1" sx={{ fontWeight: 'semibold', color: 'text.primary' }}>{t('contact.nameLabel')}</Typography></label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder={t('contact.nameLabel')}
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-400 rounded-md bg-gray-100 focus:bg-white focus:border-primary text-right"
                required
              />
              <label className="block mb-1 font-semibold text-right" htmlFor="email"><Typography variant="body1" sx={{ fontWeight: 'semibold', color: 'text.primary' }}>{t('contact.emailLabel')}</Typography></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder={t('contact.emailLabel')}
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-400 rounded-md bg-gray-100 focus:bg-white focus:border-primary text-right"
                required
              />
              <label className="block mb-1 font-semibold text-right" htmlFor="message"><Typography variant="body1" sx={{ fontWeight: 'semibold', color: 'text.primary' }}>{t('contact.messageLabel')}</Typography></label>
              <textarea
                name="message"
                id="message"
                placeholder={t('contact.messageLabel')}
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-400 rounded-md bg-gray-100 focus:bg-white focus:border-primary text-right"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-white p-3 rounded-md hover:bg-primary/90 transition font-bold text-lg"
              >
                {t('contact.submitButton')}
              </button>
            </form>
          </Paper>
        </div>
      </div>
    </section>
  );
};

export default Contact;
