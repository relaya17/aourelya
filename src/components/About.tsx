import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarCheck } from 'lucide-react'; // אייקון לקביעת תור
import { Box, Typography, Paper, Grid } from '@mui/material'; // Import Box, Typography, and Paper from Material UI
import { HelpOutline } from '@mui/icons-material'; // Import HelpOutline icon

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="pb-16 bg-accent/5" style={{ marginTop: 0, paddingTop: 0 }}>
      {/* תמונה מרובעת בראש הדף, הכי צמודה לעליון */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box
          component="img"
          src="/Designer.png"
          alt={t('about.imageAlt') as string}
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
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full"
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              background: 'linear-gradient(45deg, #2196F3 30%, #1565C0 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              mb: 2,
              textAlign: 'center' // Ensure title is centered
            }}
          >
              {t('about.title')}
            </Typography>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <Paper
            elevation={6} // Consistent shadow with Hero
            sx={{
              p: { xs: 3, sm: 5, md: 8 }, // Consistent padding
              borderRadius: 3, // Consistent border radius
              bgcolor: 'background.paper', // Consistent background color
              mx: 'auto', // Center the card
              maxWidth: '100%', // Ensure it takes full width within its container
              textAlign: 'center', // Changed to center
              display: 'flex', // Added display flex
              flexDirection: 'column', // Added flex direction column
              alignItems: 'center' // Added align items center
            }}
          >
            {/* 👩‍💻 ...קצת עלי */}
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 1, justifyContent: 'flex-start' }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 600,
                  fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem' },
                  color: 'primary.main',
                  // Removed textAlign: 'left' to allow inheritance from document.dir
                }}
              >
                {t('about.subtitles.aboutMe')}
              </Typography>
              {/* Icon after text for dynamic RTL/LTR */} 
              <Box sx={{ fontSize: { xs: '1.8rem', sm: '2rem' }, color: 'secondary.main', marginLeft: '0.5rem' }}>
                ✨
              </Box>
            </Box>
            <Box className="space-y-4" sx={{ mb: 4 }}> {/* Removed text-right, added margin-bottom */} 
              <div>
                <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.6 }}>
                  {t('about.content').split('\n\n')[0]}
                </Typography>
              </div>
            </Box>

            {/* 💼 השירותים שלי */}
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 1, justifyContent: 'flex-start' }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 600,
                  fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem' },
                  color: 'primary.main',
                  // Removed textAlign: 'left' to allow inheritance from document.dir
                }}
              >
                {t('about.subtitles.services')}
              </Typography>
              {/* Icon after text for dynamic RTL/LTR */} 
              <Box sx={{ fontSize: { xs: '1.8rem', sm: '2rem' }, color: 'secondary.main', marginLeft: '0.5rem' }}>
                💼
              </Box>
            </Box>
            <Box component="ul" sx={{
                listStyle: 'none',
                p: 0,
                m: 0,
                color: 'text.primary', // Ensure list items have consistent text color
                textAlign: 'right',
                fontSize: { xs: '0.9rem', sm: '1rem' }, // Consistent font size
                lineHeight: 1.6
            }}>
              <Typography component="li" variant="body1">{t('about.services.webDevelopment')}</Typography>
              <Typography component="li" variant="body1">{t('about.services.aiFirebaseSystems')}</Typography>
              <Typography component="li" variant="body1">{t('about.services.reactTypeScriptComponents')}</Typography>
              <Typography component="li" variant="body1">{t('about.services.wordpressCustomization')}</Typography>
              <Typography component="li" variant="body1">{t('about.services.apiIntegrations')}</Typography>
              <Typography component="li" variant="body1">{t('about.services.uxSeoDesign')}</Typography>
            </Box>

            {/* 🌟 למה לעבוד איתי */}
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 6, mb: 1, justifyContent: 'flex-start' }}> {/* Changed mt to 6 for more spacing */}
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 600,
                  fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem' },
                  color: 'primary.main',
                  // Removed textAlign: 'left' to allow inheritance from document.dir
                }}
              >
                {t('about.subtitles.whyWorkWithMe')}
              </Typography>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 10 }} // Subtle animation on hover
                style={{ marginLeft: '0.5rem' }} // Ensure icon is to the right of text with spacing
              >
                <HelpOutline sx={{ fontSize: { xs: '2rem', sm: '2.5rem' }, color: 'secondary.main' }} /> {/* Large and colored icon */}
              </motion.div>
            </Box>
            <Grid container spacing={2} sx={{ mt: 2 }}> {/* Use Grid for individual cards and add spacing */}
              <Grid item xs={12} sm={6}> {/* Use Grid item for each card */}
                <Paper
                  elevation={3} // Lighter shadow for inner cards
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: '#e3f2fd', // Light blue background
                    textAlign: 'center', // Centered content
                    height: '100%', // Ensure consistent height
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for hover
                    '&:hover': {
                      boxShadow: 6, // Increase shadow on hover for light organ effect
                      transform: 'scale(1.02)', // Slight scale up on hover
                    }
                  }}
                >
                  <Typography component="span" sx={{ fontWeight: 'bold', color: 'text.primary' }}>{t('about.whyMe.techCreativityBusiness')}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}> {/* Use Grid item for each card */}
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: '#e8f5e9', // Light green background
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'scale(1.02)',
                    }
                  }}
                >
                  <Typography component="span" sx={{ fontWeight: 'bold', color: 'text.primary' }}>{t('about.whyMe.provenExperience')}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}> {/* Use Grid item for each card */}
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: '#fce4ec', // Light pink background
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'scale(1.02)',
                    }
                  }}
                >
                  <Typography component="span" sx={{ fontWeight: 'bold', color: 'text.primary' }}>{t('about.whyMe.personalGuidance')}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}> {/* Use Grid item for each card */}
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: '#fffde7', // Light yellow background
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'scale(1.02)',
                    }
                  }}
                >
                  <Typography component="span" sx={{ fontWeight: 'bold', color: 'text.primary' }}>{t('about.whyMe.mobileSeoPerformance')}</Typography>
                </Paper>
              </Grid>
            </Grid>

            {/* 📞 צור קשר */}
            <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  color: 'primary.main', // Solid blue color like Hero
                  textAlign: 'center',
                  mb: 2
                }}
              >
                {t('nextProjectTitle')}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center', mb: 4, color: 'text.primary' }}>{t('contact.invitation')}</Typography>
              <a
                href="/booking"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 hover:text-white transition-colors shadow-lg mb-4 mt-12"
              >
                <CalendarCheck className="h-6 w-6" />
                {t('contact.ctaButton')}
              </a>
            </Box>
            </Paper>
          </motion.div>
      </div>
    </section>
  );
};

export default About;