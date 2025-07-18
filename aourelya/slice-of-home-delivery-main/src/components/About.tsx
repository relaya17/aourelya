import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarCheck } from 'lucide-react'; // אייקון לקביעת תור

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Split the about content into sections for better formatting
  const aboutContent = t('about.content');
  // Split by double newlines for paragraphs
  const paragraphs = aboutContent.split(/\n\n/);

  return (
    <section id="about" className="py-16 bg-accent/5">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full"
        >
          {/* Centered circular image */}
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            alt="About Me"
            className="rounded-full shadow-lg w-40 h-40 object-cover border-4 border-primary mb-6 mx-auto"
            style={{ objectPosition: 'center' }}
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <div className="text-lg text-muted-foreground leading-relaxed space-y-5 text-right rtl text-pretty bg-white/80 rounded-xl p-6 shadow-md">
            {paragraphs.map((para, idx) => {
              // הדגשת כותרות משנה
              if (para.startsWith('תחומי התמחות עיקריים:')) {
                return (
                  <div key={idx}>
                    <span className="font-bold text-primary">תחומי התמחות עיקריים:</span>
                    <ul className="mt-2 space-y-1 text-right pl-6" dir="rtl">
                      {para
                        .replace('תחומי התמחות עיקריים:', '')
                        .split('•')
                        .filter(Boolean)
                        .map((item, i) => (
                          <li key={i} className="flex flex-row-reverse items-start gap-2">
                            <span className="mt-1 text-primary">•</span>
                            <span>{item.trim()}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                );
              }
              if (para.startsWith('מה אני מציעה:')) {
                return (
                  <div key={idx}>
                    <span className="font-bold text-primary">מה אני מציעה:</span>
                    <ul className="mt-2 space-y-1 text-right pl-6" dir="rtl">
                      {para
                        .replace('מה אני מציעה:', '')
                        .split('•')
                        .filter(Boolean)
                        .map((item, i) => (
                          <li key={i} className="flex flex-row-reverse items-start gap-2">
                            <span className="mt-1 text-primary">•</span>
                            <span>{item.trim()}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                );
              }
              // פסקאות רגילות
              return <p key={idx}>{para}</p>;
            })}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="/booking"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors shadow-lg"
            >
              <CalendarCheck className="h-5 w-5" />
              {t('about.bookAppointment', 'Book an Appointment')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
