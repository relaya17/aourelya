
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
    <section id="projects" className="py-8 sm:py-12 bg-accent/5 mt-6 sm:mt-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-700 bg-blue-50 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border-b-4 border-blue-300 inline-block mb-3 sm:mb-4 font-serif flex items-center justify-center gap-2">
            <span className="text-2xl sm:text-3xl">📁</span>
            {t('projects.title')}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
