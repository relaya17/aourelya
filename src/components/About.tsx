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
          className="w-80 h-80 rounded-xl object-cover shadow-2xl mb-10 mt-0"
          style={{ marginTop: '-4rem', paddingTop: 0, position: 'relative', top: 0 }}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <div className="text-lg text-muted-foreground leading-relaxed space-y-8 text-right rtl text-pretty bg-white/80 rounded-xl p-6 shadow-md">
            {/* 👩‍💻 ...קצת עלי */}
            <div className="space-y-4 text-right">
              <div>
                <span className="text-2xl mr-1">✨</span>
                <span className="font-bold">קצת עליי</span>
              </div>
              <div>
                <span>
                  אני מפתחת אתרים ומערכות עם התמחות עמוקה ב־JavaScript, React, TypeScript, Node.js, WordPress ו־Firebase.<br/>
                  הניסיון שלי כולל פיתוח צד לקוח ושרת (Full Stack), בניית ממשקים רספונסיביים, התאמה אישית לפי צרכי הלקוח, עם דגש על חוויית משתמש (UX/UI) מדויקת ואופטימיזציה מתקדמת למנועי חיפוש (SEO).<br/>
                  אני מתמחה בפיתוח פתרונות חכמים שמשלבים בינה מלאכותית (AI) – בין אם מדובר בצ'אטבוטים, מערכות ניתוח נתונים, אוטומציה חכמה או אלגוריתמים מותאמים אישית. הכל כדי שהמערכת תעבוד בשבילך – מהר, מדויק וחכם.
                </span>
              </div>
            </div>

            {/* 💼 השירותים שלי */}
            <h3 className="text-2xl font-bold mt-8 mb-2 text-right text-blue-600 font-serif italic"><span className="text-2xl mr-1">💼</span>השירותים שלי</h3>
            <div className="space-y-2 text-right">
              <div>פיתוח אתרי תדמית, בלוגים, חנויות ואתרי פורטפוליו</div>
              <div>בניית מערכות חכמות מבוססות Firebase ו-AI</div>
              <div>פיתוח רכיבים מותאמים אישית ב־React ו־TypeScript</div>
              <div>בניית תוספים ותבניות מותאמות אישית ל־WordPress</div>
              <div>אינטגרציה עם API, מערכות CRM, מערכות תשלום ועוד</div>
              <div>עיצוב חוויית משתמש (UX) וכתיבה מונחית SEO</div>
            </div>

            {/* 🌟 למה לעבוד איתי */}
            <h3 className="text-2xl font-bold mt-8 mb-2 text-right text-blue-600 font-serif italic">למה לעבוד איתי</h3>
            <div className="space-y-4 text-right">
              <div>
                <span className="font-bold">שילוב של טכנולוגיה מתקדמת, קריאייטיב וחשיבה עסקית</span>
              </div>
              <div>
                <span className="font-bold">ניסיון מוכח בבניית מערכות מורכבות שמביאות תוצאות אמיתיות</span>
              </div>
              <div>
                <span className="font-bold">ליווי אישי, תקשורת פתוחה ושקיפות מלאה לכל אורך הדרך</span>
              </div>
              <div>
                <span className="font-bold">התאמה מושלמת למובייל, SEO ושיפור ביצועים</span>
              </div>
            </div>

            {/* 📞 צור קשר */}
            <div className="mt-16 flex flex-col items-center">
              <h2 className="text-5xl md:text-6xl font-extrabold text-blue-700 text-center mb-4 font-serif shadow-lg bg-blue-100 px-8 py-4 rounded-2xl border-b-4 border-blue-700" style={{marginTop: '2rem'}}>
                הפרויקט הבא שלך מתחיל כאן
              </h2>
              <p className="text-lg text-center mb-4">אני מזמינה אותך ליצור קשר ולגלות איך אפשר להפוך רעיון חכם למציאות חכמה</p>
              <a
                href="/booking"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 hover:text-white transition-colors shadow-lg mb-4 mt-12"
              >
                <CalendarCheck className="h-6 w-6" />
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
