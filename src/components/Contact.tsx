
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useToast } from "@/components/ui/use-toast";
import {
  Container,
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
  Divider
} from '@mui/material';
import { 
  Mail as MailIcon, 
  Phone as PhoneIcon, 
  Message as MessageIcon 
} from '@mui/icons-material';

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
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 6, sm: 8 },
        backgroundColor: 'grey.50'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6 } }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 'bold',
                color: '#1e3a8a', // כחול כהה
                mb: 2,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                fontStyle: 'italic',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                bgcolor: 'primary.50',
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 1, sm: 1.5, md: 2 },
                borderRadius: 2,
                borderBottom: 4,
                borderColor: '#1e3a8a', // כחול כהה
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              {t('contact.title')}
            </Typography>
          </Box>
        </motion.div>
        
        <Box
          display="grid"
          gridTemplateColumns={{ xs: '1fr', lg: 'repeat(2, 1fr)' }}
          gap={3}
          maxWidth="lg"
          sx={{ mx: 'auto' }}
        >
          {/* Contact Information */}
          <Box>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card elevation={2} sx={{ height: '100%' }}>
                <CardContent sx={{ p: { xs: 3, sm: 4 }, textAlign: 'center' }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary.main',
                      mb: 3
                    }}
                  >
                    {t('contact.contactMethods')}
                  </Typography>
                  
                  <Stack spacing={3}>
                    {/* Email */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                      <MailIcon color="primary" />
                      <Box>
                        <Typography variant="body2" fontWeight="bold">
                          {t('contact.email')}
                        </Typography>
                        <Typography
                          component="a"
                          href="mailto:contact@aurelia.dev"
                          variant="body2"
                          color="primary"
                          sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                        >
                          contact@aurelia.dev
                        </Typography>
                      </Box>
                    </Box>

                    {/* Phone */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                      <PhoneIcon color="primary" />
                      <Box>
                        <Typography variant="body2" fontWeight="bold">
                          {t('contact.phone')}
                        </Typography>
                        <Typography
                          component="a"
                          href="tel:+972501234567"
                          variant="body2"
                          color="primary"
                          sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                        >
                          +972-50-123-4567
                        </Typography>
                      </Box>
                    </Box>

                    {/* WhatsApp */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                      <MessageIcon sx={{ color: 'success.main' }} />
                      <Box>
                        <Typography variant="body2" fontWeight="bold">
                          {t('contact.whatsapp')}
                        </Typography>
                        <Typography
                          component="a"
                          href="https://wa.me/972501234567"
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="body2"
                          color="success.main"
                          sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                        >
                          +972-50-123-4567
                        </Typography>
                      </Box>
                    </Box>

                    <Divider />

                    {/* Working Hours */}
                    <Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {t('contact.workingHours')}:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('contact.weekdays')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('contact.friday')}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
          
          {/* Contact Form */}
          <Box>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card elevation={2}>
                <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary.main',
                      mb: 4,
                      textAlign: 'center'
                    }}
                  >
                    {t('contact.sendMessage')}
                  </Typography>
                  
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                      maxWidth: 'md',
                      mx: 'auto',
                      direction: 'rtl'
                    }}
                  >
                    <Stack spacing={3}>
                      <TextField
                        label="שם מלא"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        sx={{
                          '& .MuiInputLabel-root': {
                            textAlign: 'right'
                          },
                          '& .MuiInputBase-input': {
                            textAlign: 'right'
                          }
                        }}
                      />
                      
                      <TextField
                        label="אימייל"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        sx={{
                          '& .MuiInputLabel-root': {
                            textAlign: 'right'
                          },
                          '& .MuiInputBase-input': {
                            textAlign: 'right'
                          }
                        }}
                      />
                      
                      <TextField
                        label="ההודעה שלך"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{
                          '& .MuiInputLabel-root': {
                            textAlign: 'right'
                          },
                          '& .MuiInputBase-input': {
                            textAlign: 'right'
                          }
                        }}
                      />
                      
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={loading}
                        sx={{
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: 'bold'
                        }}
                      >
                        {loading ? 'שולח...' : 'שלח'}
                      </Button>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
