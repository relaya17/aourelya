
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail } from 'lucide-react';
import { Box, Typography, Paper, Snackbar, Alert, TextField, Button, InputAdornment } from '@mui/material'; // Import InputAdornment
import { PersonOutline, EmailOutlined, MessageOutlined, WhatsApp } from '@mui/icons-material'; // Import icons

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
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(''); // State for Snackbar message
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success'); // State for Snackbar severity

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
      setSnackbarMessage(t('contact.successMessage')); // Use translation key
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    }, 1000);
  };

  const handleSnackbarClose = () => { // Handle Snackbar close
    setSnackbarOpen(false);
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              color: 'primary.main', // Changed to primary.main
              textAlign: 'center',
              mb: 2 // Margin bottom for separation
            }}
          >
            {t('contact.title')}
          </Typography>
          <Box sx={{
            width: '80px',
            height: '4px',
            bgcolor: 'primary.main',
            mx: 'auto', // Center the divider
            mb: 4 // Margin bottom for separation
          }} />
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
              width: '100%',
              maxWidth: '500px', // Make the card narrower
              textAlign: 'right' // Text alignment as before
            }}
          >
            {/* הסרתי את כותרת המשנה, נשארת רק כותרת ראשית */}
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}> {/* Increased gap for labels */}
                <Typography variant="body1" sx={{ fontWeight: 'semibold', color: 'text.primary', mb: -1 }}>
                  {t('contact.nameLabel')}
                </Typography>
                <TextField
                  fullWidth
                  name="name"
                  id="name"
                  placeholder={t('contact.nameLabel')}
                  value={form.name}
                  onChange={handleChange}
                  required
                  variant="filled" // Changed to filled for a modern look
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutline />
                      </InputAdornment>
                    ),
                    disableUnderline: true, // Remove underline for a cleaner look
                    sx: {
                      borderRadius: 2, // More rounded corners
                      bgcolor: 'action.hover', // Light background
                      transition: 'box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out',
                      '&:hover': {
                        bgcolor: 'action.selected', // Slightly darker on hover
                      },
                      '&.Mui-focused': {
                        bgcolor: 'background.paper', // White background on focus
                        boxShadow: '0 0 0 4px rgba(0, 123, 255, 0.2)', // Soft blue shadow on focus
                      },
                    }
                  }}
                />
                <Typography variant="body1" sx={{ fontWeight: 'semibold', color: 'text.primary', mb: -1 }}>
                  {t('contact.emailLabel')}
                </Typography>
                <TextField
                  fullWidth
                  name="email"
                  id="email"
                  type="email"
                  placeholder={t('contact.emailLabel')}
                  value={form.email}
                  onChange={handleChange}
                  required
                  variant="filled" // Changed to filled
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlined />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                    sx: {
                      borderRadius: 2,
                      bgcolor: 'action.hover',
                      transition: 'box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out',
                      '&:hover': {
                        bgcolor: 'action.selected',
                      },
                      '&.Mui-focused': {
                        bgcolor: 'background.paper',
                        boxShadow: '0 0 0 4px rgba(0, 123, 255, 0.2)',
                      },
                    }
                  }}
                />
                <Typography variant="body1" sx={{ fontWeight: 'semibold', color: 'text.primary', mb: -1 }}>
                  {t('contact.messageLabel')}
                </Typography>
                <TextField
                  fullWidth
                  name="message"
                  id="message"
                  multiline
                  rows={4}
                  placeholder={t('contact.messageLabel')}
                  value={form.message}
                  onChange={handleChange}
                  required
                  variant="filled" // Changed to filled
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ mt: 'auto', pb: 1 }}>
                        <MessageOutlined />
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                    sx: {
                      borderRadius: 2,
                      bgcolor: 'action.hover',
                      transition: 'box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out',
                      '&:hover': {
                        bgcolor: 'action.selected',
                      },
                      '&.Mui-focused': {
                        bgcolor: 'background.paper',
                        boxShadow: '0 0 0 4px rgba(0, 123, 255, 0.2)',
                      },
                    }
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                  }}
                  disabled={loading}
                >
                  {loading ? t('contact.sending') : t('contact.submitButton')}
                </Button>
                <Button
                  variant="outlined"
                  color="success"
                  fullWidth
                  startIcon={<WhatsApp />}
                  href="https://wa.me/YOUR_PHONE_NUMBER" // Replace with actual phone number
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    mt: 2 // Margin top for separation from submit button
                  }}
                >
                  {t('contact.whatsappButton')}
                </Button>
              </Box>
            </form>
          </Paper>
        </div>
      </div>
      {/* Snackbar for success messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
