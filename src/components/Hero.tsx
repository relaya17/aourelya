import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Container,
  Box,
  Typography,
  Button,
  Avatar,
  Paper,
  Stack
} from '@mui/material';

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
        py: { xs: 6, sm: 8, md: 10, lg: 16 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4
          }}
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', maxWidth: '600px' }}
          >
            <Paper
              elevation={3}
              sx={{
                p: { xs: 3, sm: 4, md: 5 },
                borderRadius: 3,
                textAlign: 'center',
                backgroundColor: 'background.paper'
              }}
            >
              {/* Greeting & Name */}
              <Typography
                variant="h6"
                color="primary"
                sx={{ 
                  fontWeight: 600, 
                  mb: 1,
                  fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' }
                }}
              >
                {t('hero.greeting')}
              </Typography>
              
              <Typography
                id="hero-heading"
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem', lg: '4.5rem' }
                }}
              >
                {t('hero.name')}
              </Typography>

              {/* תמונה של ארלט */}
              <Avatar
                src="/arlet.png"
                alt="ארלט"
                sx={{
                  width: { xs: 128, sm: 144, md: 160 },
                  height: { xs: 128, sm: 144, md: 160 },
                  mx: 'auto',
                  mb: { xs: 2, sm: 3 },
                  border: 4,
                  borderColor: 'primary.main',
                  boxShadow: 3
                }}
              />

              {/* Role & Description */}
              <Typography
                variant="h4"
                component="h2"
                color="text.secondary"
                sx={{
                  fontWeight: 600,
                  mb: { xs: 2, sm: 3 },
                  fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem', lg: '1.875rem' }
                }}
              >
                {t('hero.role')}
              </Typography>
              
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: { xs: 3, sm: 4 },
                  maxWidth: 'md',
                  mx: 'auto',
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' }
                }}
              >
                {t('hero.description')}
              </Typography>

              {/* CTA Buttons */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
                sx={{ mt: 3 }}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Button
                    component="a"
                    href="#contact"
                    variant="contained"
                    size="large"
                    sx={{
                      px: { xs: 3, sm: 4 },
                      py: { xs: 1.5, sm: 2 },
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      textTransform: 'none'
                    }}
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
                    component="a"
                    href="#projects"
                    variant="outlined"
                    size="large"
                    sx={{
                      px: { xs: 3, sm: 4 },
                      py: { xs: 1.5, sm: 2 },
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      textTransform: 'none'
                    }}
                  >
                    {t('projects.title')}
                  </Button>
                </motion.div>
              </Stack>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
