
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Chip,
  Stack
} from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';

const Skills = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = {
    frontend: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap Material Design', 'Redux'],
    backend: ['Node.js', 'Express.js', 'NestJS', 'GraphQL', 'REST API'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
    tools: ['Git', 'Docker', 'Webpack', 'Vite', 'Jest', 'CI/CD', 'Agile']
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 3, sm: 4 },
        mt: { xs: 3, sm: 4 }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 2, sm: 3 } }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 'bold',
                color: 'primary.dark',
                mb: 2,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                fontStyle: 'italic',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                bgcolor: 'primary.50',
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 1, sm: 1.5, md: 2 },
                borderRadius: 2,
                borderBottom: 4,
                borderColor: 'primary.main',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <StarIcon sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.875rem' } }} />
              {t('skills.title')}
            </Typography>
          </Box>
        </motion.div>
        
        <Box
          display="grid"
          gridTemplateColumns={{ xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={3}
        >
          {/* Frontend Skills */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <Card elevation={1} sx={{ height: '100%' }}>
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    textAlign: 'center',
                    color: 'primary.main',
                    fontStyle: 'italic'
                  }}
                >
                  {t('skills.frontend')}
                </Typography>
                <List dense>
                  {skills.frontend.map((skill, index) => (
                    <motion.div key={index} variants={item}>
                      <ListItem sx={{ py: 0.5, direction: 'rtl' }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            bgcolor: 'primary.main',
                            borderRadius: '50%',
                            mr: 1
                          }}
                        />
                        <ListItemText
                          primary={skill}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: { textAlign: 'right' }
                          }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <Card elevation={1} sx={{ height: '100%' }}>
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    textAlign: 'center',
                    color: 'primary.main',
                    fontStyle: 'italic'
                  }}
                >
                  {t('skills.backend')}
                </Typography>
                <List dense>
                  {skills.backend.map((skill, index) => (
                    <motion.div key={index} variants={item}>
                      <ListItem sx={{ py: 0.5, direction: 'rtl' }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            bgcolor: 'primary.main',
                            borderRadius: '50%',
                            mr: 1
                          }}
                        />
                        <ListItemText
                          primary={skill}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: { textAlign: 'right' }
                          }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Database Skills */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <Card elevation={1} sx={{ height: '100%' }}>
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    textAlign: 'center',
                    color: 'primary.main',
                    fontStyle: 'italic'
                  }}
                >
                  {t('skills.databases')}
                </Typography>
                <List dense>
                  {skills.databases.map((skill, index) => (
                    <motion.div key={index} variants={item}>
                      <ListItem sx={{ py: 0.5, direction: 'rtl' }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            bgcolor: 'primary.main',
                            borderRadius: '50%',
                            mr: 1
                          }}
                        />
                        <ListItemText
                          primary={skill}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: { textAlign: 'right' }
                          }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Tools */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.6 }}
          >
            <Card elevation={1} sx={{ height: '100%' }}>
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    textAlign: 'center',
                    color: 'primary.main',
                    fontStyle: 'italic'
                  }}
                >
                  {t('skills.tools')}
                </Typography>
                <List dense>
                  {skills.tools.map((skill, index) => (
                    <motion.div key={index} variants={item}>
                      <ListItem sx={{ py: 0.5, direction: 'rtl' }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            bgcolor: 'primary.main',
                            borderRadius: '50%',
                            mr: 1
                          }}
                        />
                        <ListItemText
                          primary={skill}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: { textAlign: 'right' }
                          }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
