
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
      transition={{ duration: 0.5 }}
      className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={project.image} 
          alt={t(`projects.${project.id}.title`)}
          className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${project.id === 'moving-quote' ? 'object-[center_top_60%]' : 'object-center'}`}
        />
      </div>
      
      <div className="p-6" dir="rtl">
        <h3 className="text-xl font-semibold mb-2 text-right">{t(`projects.${project.id}.title`)}</h3>
        {(project.id === 'moving-quote' || project.id === 'residents-management') && (
          <div className="text-sm text-blue-700 font-bold mb-2 text-right">כולל צ'אטבוט חכם מבוסס בינה מלאכותית!</div>
        )}
        <p className="text-muted-foreground mb-4 text-right">{t(`projects.${project.id}.description`)}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 justify-end">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3 rtl:space-x-reverse justify-end">
          <a 
            href={project.demo} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-primary hover:underline"
          >
            <ExternalLink className="h-4 w-4" />
            {t('projects.viewProject')}
          </a>
          <a
            href={`/project/${project.id}`}
            className="ml-2 px-3 py-1 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 transition-colors"
          >
            למידע נוסף
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
