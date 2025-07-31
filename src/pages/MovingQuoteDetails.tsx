import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

const MovingQuoteDetails = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-4 py-2 rounded-md bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200 transition-colors"
      >
        חזור
      </button>
      <h1 className="text-4xl font-extrabold text-blue-700 mb-4 flex items-center gap-2 text-center justify-center">
        <span className="text-3xl">🚚</span>
        מערכת חכמה להצעות מחיר בתחום ההובלות
      </h1>
      <div className="text-sm text-blue-700 font-bold mb-4 text-center">כולל צ'אטבוט חכם מבוסס בינה מלאכותית!</div>
      <Box
            component="img"
            src="/Designer11.png"
            alt="אפליקציית הזמנות חכמה להובלות"
            sx={{
              width: '100%',
              maxHeight: '300px',
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: 2,
              boxShadow: 1,
              mb: 4
            }}
          />
      <p className="text-lg mb-6 text-right">
        ברוך הבא לעתיד עולם ההובלות – אפליקציה חכמה ודיגיטלית שנבנתה מהיסוד כדי לשרת אותך בצורה הנוחה, המהירה והיעילה ביותר.<br/>
        בין אם אתה גולש מהמחשב או מהנייד – תיהנה מחוויית שירות דיגיטלית מלאה, זמינה 24/7 וללא צורך בנציג אנושי.
      </p>
      <p className="text-lg mb-6 text-right">
        בנוסף, האפליקציה כוללת צ'אטבוט חכם מבוסס בינה מלאכותית, המלווה את הלקוח בתהליך ההזמנה, עונה על שאלות ומסייע בקבלת החלטות – לחוויית שירות מתקדמת וחדשנית
      </p>
      <div className="mb-6 text-right">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">🧠 איך זה עובד?</h2>
        <p className="mb-4">באמצעות ממשק אינטואיטיבי וידידותי, תוכל להזין את פרטי ההובלה שלך – ולקבל תוך שניות הצעת מחיר מותאמת אישית, מדויקת ושקופה.<br/>אין צורך בטלפונים. אין המתנה. רק תוצאה מיידית.</p>
        <h2 className="text-2xl font-bold text-blue-700 mb-2 mt-6">✨ מה מייחד את המערכת?</h2>
        <ul className="list-none space-y-2">
          <li><span className="mr-2">🤖</span>צ'אטבוט חכם מבוסס AI שמלווה את המשתמשים לכל אורך הדרך</li>
          <li><span className="mr-2">⚙️</span>מנגנון חישוב מתקדם להצעת מחיר מדויקת בלחיצת כפתור</li>
          <li><span className="mr-2">⚡</span>ביצועים גבוהים – טעינה מהירה וחוויית משתמש חלקה</li>
          <li><span className="mr-2">🔐</span>אבטחת מידע ברמה הגבוהה ביותר</li>
          <li><span className="mr-2">📱</span>רספונסיביות מלאה – מותאם לכל מכשיר ודפדפן</li>
          <li><span className="mr-2">🔗</span>שילוב קל ופשוט באתרים קיימים, אפליקציות ו-CRM</li>
        </ul>
        <p className="mt-6">האפליקציה פועלת כאתר חי ונושם, עם חיבור מהיר ונגישות מלאה, ומבוססת על טכנולוגיות מתקדמות כמו React ו-TypeScript – מה שמבטיח יציבות, חדשנות ואמינות.<br/><br/>🚀 זה הרבה יותר מאפליקציה. זה פתרון שלם, חכם ומודרני לעולם ההובלות.</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gold-700 mb-2">טכנולוגיות עיקריות:</h2>
        <ul className="list-disc pr-6 text-right">
          <li>React</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Framer Motion</li>
        </ul>
      </div>
      <div className="bg-blue-50 border-r-4 border-blue-300 p-4 rounded-xl text-right">
        <strong>יתרונות עיקריים:</strong>
        <ul className="list-disc pr-6 mt-2">
          <li>שאלון דינמי וחכם</li>
          <li>הצעת מחיר מיידית ומותאמת אישית</li>
          <li>חוויית משתמש מתקדמת ורספונסיבית</li>
          <li>צמצום טעויות אנוש</li>
          <li>התאמה מלאה לצרכי הלקוח</li>
        </ul>
      </div>
    </section>
  );
};

export default MovingQuoteDetails; 