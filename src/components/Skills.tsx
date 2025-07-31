import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Container, Typography, Grid, Paper, Divider } from '@mui/material';

const Skills = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillPairs = [
    {
      title1: 'skills.frontend',
      skills1: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Material UI', 'Tailwind CSS'],
      title2: 'skills.backend',
      skills2: ['Node.js', 'Express.js', 'NestJS', 'GraphQL', 'REST API', 'WebSocket']
    },
    {
      title1: 'skills.databases',
      skills1: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis'],
      title2: 'skills.tools',
      skills2: ['Git', 'Docker', 'Webpack', 'Vite', 'Jest', 'CI/CD', 'Agile']
    },
    {
      title1: 'skills.ai',
      skills1: ['OpenAI API', 'LangChain', 'Hugging Face', 'TensorFlow.js', 'Natural Language Processing'],
      title2: 'skills.cloud',
      skills2: ['AWS', 'Google Cloud', 'Firebase', 'Netlify', 'Vercel', 'Docker']
    }
  ];

  const SectionTitle = ({ children }) => (
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
        mb: 2
      }}
    >
      {children}
    </Typography>
  );

  const CardTitle = ({ children }) => (
    <Typography
      variant="h5"
      sx={{
        fontFamily: '"Playfair Display", serif',
        fontWeight: 600,
        fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
        background: 'linear-gradient(45deg, #2196F3 30%, #1565C0 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        mb: 3
      }}
    >
      {children}
    </Typography>
  );

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        bgcolor: 'background.default',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6, md: 8 } }}>
            <SectionTitle>{t('skills.title')}</SectionTitle>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              {t('skills.subtitle')}
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {/* Main Skills Card */}
            <Grid item xs={12}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                elevation={6} // Increased elevation for consistency
                sx={{
                  p: { xs: 3, sm: 5, md: 8 }, // Consistent padding
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #e8edf5 100%)',
                  borderRadius: 3, // Consistent border radius
                  height: '100%',
                  textAlign: 'right' // Ensure text is right-aligned if Hebrew
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <CardTitle>{t('skills.frontend')}</CardTitle>
                      <Box component="ul" sx={{
                        listStyle: 'none',
                        p: 0,
                        m: 0,
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                        gap: 2
                      }}>
                        {skillPairs[0].skills1.map((skill, index) => (
                          <Box
                            component="li"
                            key={index}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              fontSize: { xs: '0.9rem', sm: '1rem' },
                              color: 'text.primary', // Consistent text color
                              '&:before': {
                                content: '""',
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                bgcolor: 'primary.main',
                                mr: 1.5,
                                flexShrink: 0
                              }
                            }}
                          >
                            {skill}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <CardTitle>{t('skills.backend')}</CardTitle>
                      <Box component="ul" sx={{
                        listStyle: 'none',
                        p: 0,
                        m: 0,
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                        gap: 2
                      }}>
                        {skillPairs[0].skills2.map((skill, index) => (
                          <Box
                            component="li"
                            key={index}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              fontSize: { xs: '0.9rem', sm: '1rem' },
                              color: 'text.primary', // Consistent text color
                              '&:before': {
                                content: '""',
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                bgcolor: 'primary.main',
                                mr: 1.5,
                                flexShrink: 0
                              }
                            }}
                          >
                            {skill}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* Other Skills Cards */}
            {skillPairs.slice(1).map((pair, index) => (
              <Grid item xs={12} sm={6} key={index + 1}>
                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
                  elevation={6} // Increased elevation for consistency
                  sx={{
                    p: { xs: 3, sm: 5 }, // Consistent padding
                    height: '100%',
                    background: 'linear-gradient(135deg, #f5f7fa 0%, #e8edf5 100%)',
                    borderRadius: 3 // Consistent border radius
                  }}
                >
                  <CardTitle>{t(pair.title1)}</CardTitle>
                  <Box component="ul" sx={{
                    listStyle: 'none',
                    p: 0,
                    m: 0,
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 1.5
                  }}>
                    {pair.skills1.map((skill, i) => (
                      <Box
                        component="li"
                        key={i}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                          color: 'text.primary', // Consistent text color
                          '&:before': {
                            content: '""',
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            mr: 1.5,
                            flexShrink: 0
                          }
                        }}
                      >
                        {skill}
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;