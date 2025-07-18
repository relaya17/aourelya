import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="home"
      role="region"
      aria-labelledby="hero-heading"
      className="py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <div className="bg-background rounded-2xl shadow-lg p-8">

              {/* Greeting & Name */}
              <p
                className="text-lg md:text-xl text-primary font-semibold mb-2 text-center"
                aria-live="polite"
              >
                {t('hero.greeting')}
              </p>
              <h1
                id="hero-heading"
                className="text-4xl md:text-6xl font-bold mb-4 text-center"
              >
                {t('hero.name')}
              </h1>

              {/* Card Image with border, shadow & hover animation */}
              <motion.img
                src={t('hero.cardImageSrc')}
                alt={t('hero.cardImageAlt')}
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="w-full h-auto rounded-md mx-auto mb-6 border-2 border-primary/30 p-1 shadow-md transition-transform"
              />

              {/* Role & Description */}
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 text-center">
                {t('hero.role')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto text-center">
                {t('hero.description')}
              </p>

              {/* CTA Buttons */}
              <div className="flex space-x-4 justify-center">
                <motion.a
                  href="#contact"
                  role="button"
                  aria-label={t('hero.cta')}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50 transition-colors"
                >
                  {t('hero.cta')}
                </motion.a>
                <motion.a
                  href="#projects"
                  role="link"
                  aria-label={t('projects.title')}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                  className="border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary/10 focus:outline-none focus:ring-4 focus:ring-primary/50 transition-colors"
                >
                  {t('projects.title')}
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Developer Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-2/5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt={t('hero.altDeveloperPortrait')}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-xl relative z-10 object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
