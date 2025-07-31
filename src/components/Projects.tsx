
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Paper } from '@mui/material';

const Projects = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 'project1',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      github: 'https://github.com',
      demo: 'https://example.com',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      id: 'project2',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      github: 'https://github.com',
      demo: 'https://example.com',
      technologies: ['React', 'Redux', 'Socket.io', 'Express']
    },
    {
      id: 'project3',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      github: 'https://github.com',
      demo: 'https://example.com',
      technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Framer Motion']
    },
    {
      id: 'moving-quote',
      image: '/Designer5.png',
      github: '',
      demo: '',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      id: 'residents-management',
      image: '/mitzpe.png',
      github: '',
      demo: 'https://my-monorepo-1pzh.onrender.com',
      technologies: ['React', 'Node.js', 'TypeScript'],
    },
  ];

  return (
    <section id="projects" className="py-8 bg-accent/5 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 bg-blue-50 px-8 py-4 rounded-2xl border-b-4 border-blue-300 inline-block mb-4 font-serif flex items-center justify-center gap-2">
            <span className="text-3xl">📁</span>
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <Paper
          elevation={6} // Consistent shadow
          sx={{
            p: { xs: 3, sm: 5, md: 8 }, // Consistent padding
            borderRadius: 3, // Consistent border radius
            bgcolor: 'background.paper', // Consistent background color
            mx: 'auto', // Center the card
            maxWidth: '100%', // Ensure it takes full width within its container
            textAlign: 'center' // Ensure content inside is centered
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </Paper>
      </div>
    </section>
  );
};

export default Projects;
