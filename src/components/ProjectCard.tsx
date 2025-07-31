import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GitHub, OpenInNew } from '@mui/icons-material';
import { Box, Typography, Card, CardMedia, CardContent, Button, Chip } from '@mui/material';

interface ProjectProps {
  project: {
    id: string;
    image: string;
    github: string;
    demo: string;
    technologies: string[];
  };
  index: number;
  inView: boolean;
}

const ProjectCard = ({ project, index, inView }: ProjectProps) => {
  const { t } = useTranslation();
  
  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      sx={{ 
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          boxShadow: 6
        }
      }}
    >
      <Box sx={{ position: 'relative', height: 200, overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={t(`projects.${project.id}.title`)}
          sx={{
            objectFit: 'cover',
            objectPosition: project.id === 'moving-quote' ? 'center top 60%' : 'center',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
      </Box>
      
      <CardContent sx={{ flexGrow: 1, p: 3, textAlign: 'right' }}>
        <Typography variant="h6" gutterBottom>
          {t(`projects.${project.id}.title`)}
        </Typography>
        
        {(project.id === 'moving-quote' || project.id === 'residents-management') && (
          <Typography variant="subtitle2" color="primary" sx={{ mb: 1, fontWeight: 'bold' }}>
            {t('projects.aiChatbot')}
          </Typography>
        )}
        
        <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
          {t(`projects.${project.id}.description`)}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'flex-end', mb: 2 }}>
          {project.technologies.map((tech, i) => (
            <Chip
              key={i}
              label={tech}
              size="small"
              variant="outlined"
              color="primary"
            />
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
          <Button
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<OpenInNew />}
            variant="text"
            size="small"
          >
            {t('projects.viewProject')}
          </Button>
          <Button
            href={`/project/${project.id}`}
            variant="contained"
            size="small"
          >
            {t('projects.moreInfo')}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;