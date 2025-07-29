import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Container,
  Box,
  Typography,
  Paper,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
  Stack
} from '@mui/material';
import { Event } from '@mui/icons-material';
import i18n from 'i18next';

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      component="section"
      id="about"
      sx={{
        pb: 8,
        backgroundColor: 'grey.50',
        mt: 0,
        pt: 0
      }}
    >
      {/* תמונה מרובעת בראש הדף */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: -4 }}>
        <Avatar
          src="/Designer.png"
          alt="תמונה אישית"
          sx={{
            width: { xs: 192, sm: 256, md: 320 },
            height: { xs: 192, sm: 256, md: 320 },
            borderRadius: 2,
            boxShadow: 6,
            mb: { xs: 3, sm: 5 },
            '& img': {
              objectPosition: 'center 20%'
            }
          }}
        />
      </Box>
      
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                color: '#1e3a8a', // כחול כהה
                mb: 4,
                textAlign: 'center',
                fontFamily: i18n.language === 'he' 
                  ? 'Rubik, Arial, sans-serif' 
                  : 'Playfair Display, serif',
                letterSpacing: '-0.02em',
              }}
            >
              {t('about.title')}
            </Typography>
            <Box
              sx={{
                width: { xs: 64, sm: 80, md: 96 },
                height: 4,
                bgcolor: 'primary.main',
                mx: 'auto',
                mb: { xs: 3, sm: 4 }
              }}
            />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
            style={{ width: '100%' }}
          >
            <Stack spacing={4} sx={{ width: '100%' }}>
              {/* קצת עליי */}
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  textAlign: 'right',
                  direction: 'rtl',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 2,
                  borderColor: '#1e3a8a',
                  '&:hover': {
                    elevation: 6,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: '#1e3a8a', // כחול כהה כמו ביתר
                    fontStyle: 'italic',
                    textAlign: 'right'
                  }}
                >
                  {t('about.aboutMe')}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    lineHeight: 1.8,
                    color: '#1e3a8a', // כחול כהה כמו ביתר
                    textAlign: 'right',
                    fontFamily: i18n.language === 'he' 
                      ? 'Rubik, Arial, sans-serif' 
                      : 'Inter, Arial, sans-serif'
                  }}
                >
                  {t('about.aboutMeContent')}
                </Typography>
              </Paper>

              {/* השירותים שלי */}
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  textAlign: 'right',
                  direction: 'rtl',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 2,
                  borderColor: '#1e3a8a',
                  '&:hover': {
                    elevation: 6,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: '#1e3a8a', // כחול כהה כמו ביתר
                    fontStyle: 'italic',
                    textAlign: 'right'
                  }}
                >
                  {t('about.services')}
                </Typography>
                <List sx={{ py: 0 }}>
                  {(t('about.servicesList', { returnObjects: true }) as string[]).map((service: string, index: number) => (
                    <ListItem key={index} sx={{ py: 0.5, justifyContent: 'flex-end' }}>
                      <ListItemText
                        primary={service}
                        primaryTypographyProps={{
                          variant: 'body2',
                          textAlign: 'right',
                          color: '#1e3a8a', // כחול כהה כמו ביתר
                          fontFamily: i18n.language === 'he' 
                            ? 'Rubik, Arial, sans-serif' 
                            : 'Inter, Arial, sans-serif'
                        }}
                        sx={{ textAlign: 'right' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>

              {/* למה לעבוד איתי */}
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  textAlign: 'right',
                  direction: 'rtl',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 2,
                  borderColor: '#1e3a8a',
                  '&:hover': {
                    elevation: 6,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: '#1e3a8a', // כחול כהה כמו ביתר
                    fontStyle: 'italic',
                    textAlign: 'right'
                  }}
                >
                  {t('about.whyWorkWithMe')}
                </Typography>
                <Stack spacing={2}>
                  {(t('about.whyWorkWithMeList', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'flex-end' }}>
                      <Typography variant="body2" sx={{ 
                        fontWeight: 'bold', 
                        textAlign: 'right',
                        color: '#1e3a8a', // כחול כהה כמו ביתר
                        fontFamily: i18n.language === 'he' 
                          ? 'Rubik, Arial, sans-serif' 
                          : 'Inter, Arial, sans-serif'
                      }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>

              {/* צור קשר */}
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 2,
                  borderColor: '#1e3a8a',
                  '&:hover': {
                    elevation: 6,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontWeight: 'bold',
                    color: '#1e3a8a', // כחול כהה כמו כותר ראשית
                    mb: 2,
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                    fontStyle: 'italic',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                    bgcolor: 'primary.50',
                    px: { xs: 2, sm: 3, md: 4 },
                    py: { xs: 1, sm: 1.5, md: 2 },
                    borderRadius: 2,
                    borderBottom: 4,
                    borderColor: '#1e3a8a' // כחול כהה
                  }}
                >
                  {t('about.nextProject')}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{ 
                    mb: 2, 
                    px: 2,
                    color: '#1e3a8a', // כחול כהה כמו ביתר
                    fontFamily: i18n.language === 'he' 
                      ? 'Rubik, Arial, sans-serif' 
                      : 'Inter, Arial, sans-serif'
                  }}
                >
                  {t('about.nextProjectDescription')}
                </Typography>
                
                <Button
                  component="a"
                href="/booking"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: { xs: 3, sm: 4, md: 5 },
                    py: { xs: 1.5, sm: 2, md: 2.5 },
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    fontWeight: 'bold',
                    borderWidth: 2,
                    borderColor: '#1e3a8a', // כחול כהה
                    color: '#1e3a8a', // כחול כהה
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: '#1e40af',
                      backgroundColor: 'rgba(30, 58, 138, 0.1)'
                    }
                  }}
                >
                  {t('contact.title')}
                </Button>
              </Paper>
            </Stack>
        </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
