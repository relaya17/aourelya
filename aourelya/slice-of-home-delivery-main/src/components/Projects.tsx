
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';

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
    }
  ];

  return (
    <section id="projects" className="py-16 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
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
      </div>
    </section>
  );
};

export default Projects;
