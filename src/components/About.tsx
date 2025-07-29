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
    <section id="about" className="pb-16 bg-accent/5" style={{ marginTop: 0, paddingTop: 0 }}>
      {/* תמונה מרובעת בראש הדף, הכי צמודה לעליון */}
      <div className="w-full flex justify-center">
        <img
          src="/Designer.png"
          alt="תמונה אישית"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-xl object-cover shadow-2xl mb-6 sm:mb-10 mt-0"
          style={{ marginTop: '-2rem', paddingTop: 0, position: 'relative', top: 0 }}
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">{t('about.title')}</h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-6 sm:space-y-8 text-right rtl text-pretty bg-white/80 rounded-xl p-4 sm:p-6 shadow-md">
            {/* 👩‍💻 ...קצת עלי */}
            <div className="space-y-3 sm:space-y-4 text-right">
              <div>
                <span className="text-xl sm:text-2xl mr-1">✨</span>
                <span className="font-bold text-lg sm:text-xl">קצת עליי</span>
              </div>
              <div className="text-sm sm:text-base">
                <span>
                  מפתחת מערכות ואתרי אינטרנט חכמים עם התמחות בטכנולוגיות המובילות בעולם הפיתוח — JavaScript, React, TypeScript, Node.js, WordPress ו־Firebase.<br/>
                  אני בונה פתרונות דיגיטליים מותאמים אישית, שמחברים בין טכנולוגיה מתקדמת, עיצוב מדויק ו־חוויית משתמש חלקה.<br/>
                  מלווה עסקים, יזמים ופרויקטים מיוחדים משלב הרעיון ועד השקה מוצלחת — עם תשתיות חזקות, אופטימיזציה ל־SEO, והתאמה מלאה למובייל ולדסקטופ.
                </span>
              </div>
            </div>

            {/* 💼 השירותים שלי */}
            <div className="pt-6 sm:pt-8 border-t border-gray-200">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-right text-blue-600 font-serif italic"><span className="text-xl sm:text-2xl mr-1">💼</span>השירותים שלי</h3>
              <div className="space-y-1 sm:space-y-2 text-right text-sm sm:text-base">
                <div>✅ פיתוח אתרי תדמית, חנויות, בלוגים ואתרי פורטפוליו</div>
                <div>✅ פיתוח מערכות מורכבות עם Firebase, MongoDB, Express ו־AI</div>
                <div>✅ בניית רכיבים מותאמים אישית ב־React ו־TypeScript</div>
                <div>✅ פיתוח תוספים/תבניות ייעודיים ל־WordPress</div>
                <div>✅ שילוב מערכות תשלום, CRM, APIs ו־Webhooks</div>
                <div>✅ אופטימיזציה ל־SEO, מהירות ונגישות (WCAG)</div>
                <div>✅ עיצוב UX/UI מוקפד מבוסס מחקר והתנהגות משתמשים</div>
              </div>
            </div>

            {/* 🚀 למה לעבוד איתי */}
            <div className="pt-6 sm:pt-8 border-t border-gray-200">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-right text-blue-600 font-serif italic"><span className="text-xl sm:text-2xl mr-1">🚀</span>למה לעבוד איתי?</h3>
              <div className="space-y-3 sm:space-y-4 text-right text-sm sm:text-base">
                <div>
                  <span className="text-lg sm:text-xl mr-1">💡</span>
                  <span className="font-bold">שילוב של טכנולוגיה מתקדמת, עיצוב חווייתי וחשיבה תכל'סית</span>
                </div>
                <div>
                  <span className="text-lg sm:text-xl mr-1">🛠</span>
                  <span className="font-bold">ניסיון מוכח בפיתוח מערכות חכמות עם תוצאות בשטח</span>
                </div>
                <div>
                  <span className="text-lg sm:text-xl mr-1">🤝</span>
                  <span className="font-bold">ליווי אישי, שקיפות ותקשורת בגובה העיניים</span>
                </div>
                <div>
                  <span className="text-lg sm:text-xl mr-1">📱</span>
                  <span className="font-bold">התאמה מלאה למובייל, נגישות ואופטימיזציית SEO</span>
                </div>
                <div>
                  <span className="text-lg sm:text-xl mr-1">🧠</span>
                  <span className="font-bold">ראייה רחבה – גם כמפתחת וגם כיועצת מוצר וטכנולוגיה</span>
                </div>
              </div>
            </div>

            {/* 📞 צור קשר */}
            <div className="mt-12 sm:mt-16 flex flex-col items-center pt-6 sm:pt-8 border-t border-gray-200">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-blue-700 text-center mb-3 sm:mb-4 font-serif shadow-lg bg-blue-100 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border-b-4 border-blue-700" style={{marginTop: '1rem'}}>
                הפרויקט הבא שלך מתחיל כאן
              </h2>
              <p className="text-base sm:text-lg text-center mb-3 sm:mb-4 px-4">אני מזמינה אותך ליצור קשר ולגלות איך אפשר להפוך רעיון חכם למציאות חכמה</p>
              <a
                href="/booking"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-blue-700 text-blue-700 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-700 hover:text-white transition-colors shadow-lg mb-4 mt-8 sm:mt-12"
              >
                <CalendarCheck className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                צור קשר
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
