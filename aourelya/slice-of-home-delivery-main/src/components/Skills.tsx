
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    <section id="skills" className="py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 bg-blue-50 px-8 py-4 rounded-2xl border-b-4 border-blue-300 inline-block mb-4 font-serif flex items-center justify-center gap-2">
            <span className="text-3xl">⭐</span>
            {t('skills.title')}
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frontend Skills */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="bg-card rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-center text-blue-600 font-serif italic">{t('skills.frontend')}</h3>
            <ul className="space-y-2">
              {skills.frontend.map((skill, index) => (
                <motion.li 
                  key={index} 
                  variants={item}
                  className="flex flex-row-reverse items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full ml-2"></span>
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-center text-blue-600 font-serif italic">{t('skills.backend')}</h3>
            <ul className="space-y-2">
              {skills.backend.map((skill, index) => (
                <motion.li 
                  key={index} 
                  variants={item}
                  className="flex flex-row-reverse items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full ml-2"></span>
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Database Skills */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-center text-blue-600 font-serif italic">{t('skills.databases')}</h3>
            <ul className="space-y-2">
              {skills.databases.map((skill, index) => (
                <motion.li 
                  key={index} 
                  variants={item}
                  className="flex flex-row-reverse items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full ml-2"></span>
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Tools */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.6 }}
            className="bg-card rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-center text-blue-600 font-serif italic">{t('skills.tools')}</h3>
            <ul className="space-y-2">
              {skills.tools.map((skill, index) => (
                <motion.li 
                  key={index} 
                  variants={item}
                  className="flex flex-row-reverse items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full ml-2"></span>
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
