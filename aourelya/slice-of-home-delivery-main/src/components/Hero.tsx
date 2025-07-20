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

              {/* תמונה של ארלט */}
              <img
                src="/arlet.png"
                alt="ארלט"
                className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-primary object-cover shadow-lg"
                style={{ objectPosition: 'center 20%' }}
              />

              {/* Role & Description */}
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 text-center">
                מפתחת מערכות חכמות מבוססות טכנולוגיה מתקדמת  פול סטאק ובינה מלאכותית
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto text-center">
                {t('hero.description')}
              </p>

              {/* CTA Buttons */}
              <div className="flex space-x-4 rtl:space-x-reverse justify-center">
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

          {/* תמונה של ארלט - גדולה, ריבועית, בצד */}
          {/* תמונה זו הוסרה לחלוטין */}

        </div>
      </div>
    </section>
  );
};

export default Hero;
