import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Container, Typography, Avatar, Button, Paper } from '@mui/material';

const Hero = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box
      component="section"
      id="home"
      role="region"
      aria-labelledby="hero-heading"
      sx={{
        py: { xs: 4, md: 8 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh', // Adjust as needed to center content vertically
        bgcolor: 'background.default', // Or a subtle background for the section
        pb: { xs: 8, md: 10 } // Add padding bottom to give space below the card
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={6} // Increased elevation for a more prominent shadow
          sx={{
            p: { xs: 3, sm: 5, md: 8 },
            borderRadius: 3,
            bgcolor: 'background.paper',
            mx: { xs: 0, sm: 'auto' }, // Center on smaller screens as well
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <Typography
              variant="subtitle1"
              color="primary"
              sx={{ mb: 1, fontWeight: 600 }}
              aria-live="polite"
            >
              {t('hero.greeting')}
            </Typography>

            <Typography
              id="hero-heading"
              variant="h2"
              sx={{
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              {t('hero.name')}
            </Typography>

            <Avatar
              src="/arlet.png"
              alt={t('hero.name') as string}
              sx={{
                width: 120,
                height: 120,
                mx: 'auto',
                mb: 3,
                border: 2,
                borderColor: 'primary.main',
                boxShadow: 2
              }}
            />

            <Typography
              variant="h4"
              sx={{
                mb: 3,
                color: 'text.secondary',
                fontWeight: 600,
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }}
            >
              {t('hero.role')}
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}
            >
              {t('hero.description')}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: { xs: 1, sm: 2 },
                justifyContent: 'center',
                flexDirection: { xs: 'column', sm: 'row' },
                width: '100%' // Ensure buttons take full width on small screens if stacked
              }}
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  href="#contact"
                  size="large"
                  sx={{ width: { xs: '100%', sm: 'auto' } }} // Full width on small screens
                >
                  {t('hero.cta')}
                </Button>
              </motion.div>

              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  href="#projects"
                  size="large"
                  sx={{ width: { xs: '100%', sm: 'auto' } }} // Full width on small screens
                >
                  {t('projects.title')}
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Paper>
      </Container>
    </Box>
  );
};

export default Hero;
