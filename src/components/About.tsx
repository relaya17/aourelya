import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EventAvailable } from '@mui/icons-material';
import { Box, Container, Typography, Paper, Button } from '@mui/material';

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Split the about content into sections for better formatting
  const aboutContent = t('about.content');
  // Split by double newlines for paragraphs
  const paragraphs = aboutContent.split(/\n\n/);

  return (
    <Box
      component="section"
      id="about"
      sx={{
        pb: 16,
        mt: 0,
        pt: 0,
        bgcolor: 'background.default'
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box
          component="img"
          src="/Designer.png"
          alt={t('about.imageAlt')}
          sx={{
            width: '240px',
            height: '240px',
            borderRadius: 2,
            objectFit: 'cover',
            boxShadow: 3,
            mb: 5,
            mt: -4,
            position: 'relative',
            top: 0
          }}
        />
      </Box>
      <Container maxWidth="lg">
        <Box sx={{ 
          width: '100%',
          mx: 'auto',
          px: { xs: 2, sm: 3, lg: 4 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
          >
            <Typography variant="h2" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
              {t('about.title')}
            </Typography>
            <Box sx={{ width: '6rem', height: '0.25rem', bgcolor: 'primary.main', mx: 'auto', mb: 4 }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ width: '100%' }}
          >
            <Paper sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 2 }}>
              <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 4 }}>
                {t('about.content')}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                href="/booking"
                startIcon={<EventAvailable />}
                sx={{ mt: 4, display: 'flex', mx: 'auto' }}
              >
                {t('about.bookAppointment')}
              </Button>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;