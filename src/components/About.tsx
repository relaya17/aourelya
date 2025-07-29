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
                elevation={2}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  textAlign: i18n.language === 'he' ? 'right' : 'left',
                  direction: i18n.language === 'he' ? 'rtl' : 'ltr',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    elevation: 4,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
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
                    textAlign: i18n.language === 'he' ? 'right' : 'center'
                  }}
                >
                  {t('about.aboutMe')}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    lineHeight: 1.8,
                    color: 'text.secondary',
                    textAlign: i18n.language === 'he' ? 'right' : 'left',
                    fontWeight: 'normal',
                    fontSize: '1rem',
                    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
                  }}
                >
                  {t('about.aboutMeContent')}
                </Typography>
              </Paper>

              {/* השירותים שלי */}
              <Paper
                elevation={2}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  textAlign: i18n.language === 'he' ? 'right' : 'left',
                  direction: i18n.language === 'he' ? 'rtl' : 'ltr',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    elevation: 4,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
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
                    textAlign: i18n.language === 'he' ? 'right' : 'center'
                  }}
                >
                  {t('about.services')}
                </Typography>
                <List sx={{ py: 0 }}>
                  {(t('about.servicesList', { returnObjects: true }) as string[]).map((service: string, index: number) => (
                    <ListItem key={index} sx={{ 
                      py: 0.5, 
                      justifyContent: i18n.language === 'he' ? 'flex-end' : 'flex-start',
                      flexDirection: i18n.language === 'he' ? 'row' : 'row-reverse'
                    }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#1e3a8a',
                          fontWeight: 'bold',
                          minWidth: '20px',
                          textAlign: i18n.language === 'he' ? 'right' : 'left',
                          mr: i18n.language === 'he' ? 1 : 0,
                          ml: i18n.language === 'he' ? 0 : 1
                        }}
                      >
                        {index + 1}.
                      </Typography>
                      <ListItemText
                        primary={service}
                        primaryTypographyProps={{
                          variant: 'body1',
                          textAlign: i18n.language === 'he' ? 'right' : 'left',
                          color: 'text.secondary',
                          fontWeight: 'normal',
                          fontSize: '1rem',
                          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
                        }}
                        sx={{ textAlign: i18n.language === 'he' ? 'right' : 'left' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>

              {/* למה לעבוד איתי */}
              <Paper
                elevation={2}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  textAlign: i18n.language === 'he' ? 'right' : 'left',
                  direction: i18n.language === 'he' ? 'rtl' : 'ltr',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    elevation: 4,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
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
                    textAlign: i18n.language === 'he' ? 'right' : 'center'
                  }}
                >
                  {t('about.whyWorkWithMe')}
                </Typography>
                <Stack spacing={2}>
                  {(t('about.whyWorkWithMeList', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                    <Box key={index} sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1, 
                      justifyContent: i18n.language === 'he' ? 'flex-end' : 'flex-start' 
                    }}>
                      <Typography variant="body1" sx={{ 
                        fontWeight: 'normal', 
                        textAlign: i18n.language === 'he' ? 'right' : 'left',
                        color: 'text.secondary',
                        fontSize: '1rem',
                        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
                      }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>

              {/* צור קשר */}
              <Paper
                elevation={2}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    elevation: 4,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
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
                    color: 'text.secondary',
                    fontWeight: 'normal',
                    fontSize: '1rem',
                    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
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
