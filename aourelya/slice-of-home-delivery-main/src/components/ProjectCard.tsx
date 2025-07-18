
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={t(`projects.${project.id}.title`)}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{t(`projects.${project.id}.title`)}</h3>
        <p className="text-muted-foreground mb-4">{t(`projects.${project.id}.description`)}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <a 
            href={project.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-primary hover:underline"
          >
            <Github className="h-4 w-4" />
            {t('projects.viewCode')}
          </a>
          <a 
            href={project.demo} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-primary hover:underline"
          >
            <ExternalLink className="h-4 w-4" />
            {t('projects.viewProject')}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
