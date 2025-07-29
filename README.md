# 🏠 Slice of Home - פרויקט דליברי ביתי

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-purple.svg)](https://vitejs.dev/)

## 📖 תיאור הפרויקט

**Slice of Home** הוא פרויקט דליברי ביתי מתקדם המפותח עם טכנולוגיות מודרניות. הפרויקט מציע חוויית משתמש מעולה עם ממשק משתמש יפה ונגיש, תמיכה בשפות מרובות (עברית ואנגלית), ומערכת ניהול הזמנות מתקדמת.

### ✨ תכונות עיקריות

- 🎨 **ממשק משתמש מודרני** - עיצוב יפה עם Tailwind CSS ו-shadcn/ui
- 🌐 **תמיכה בשפות מרובות** - עברית ואנגלית עם i18next
- 📱 **רספונסיבי** - עובד מושלם על כל המכשירים
- ⚡ **ביצועים מהירים** - נבנה עם Vite לאופטימיזציה מקסימלית
- 🔒 **אבטחה מתקדמת** - headers אבטחה מותאמים
- 🚀 **פריסה קלה** - מוכן לפריסה ב-Netlify
- 🎯 **נגישות** - עומד בסטנדרטי נגישות

## 🛠️ טכנולוגיות

### Frontend
- **React 18** - ספריית UI מודרנית
- **TypeScript** - טיפוסים חזקים ופיתוח בטוח
- **Vite** - כלי בנייה מהיר
- **Tailwind CSS** - עיצוב utility-first
- **shadcn/ui** - רכיבי UI מוכנים
- **React Router** - ניתוב SPA
- **Framer Motion** - אנימציות חלקות

### Internationalization
- **i18next** - ניהול תרגומים
- **react-i18next** - אינטגרציה עם React

### Development Tools
- **ESLint** - בדיקת קוד
- **PostCSS** - עיבוד CSS
- **Jest** - בדיקות יחידה

## 🚀 התקנה והפעלה

### דרישות מקדימות
- Node.js 18 או גבוה יותר
- npm או yarn

### הוראות התקנה

```bash
# 1. שכפול הפרויקט
git clone <YOUR_REPOSITORY_URL>
cd slice-of-home-delivery-main

# 2. התקנת תלויות
npm install

# 3. הפעלת שרת פיתוח
npm run dev
```

הפרויקט יהיה זמין בכתובת: `http://localhost:8080`

### פקודות זמינות

```bash
# פיתוח
npm run dev          # הפעלת שרת פיתוח
npm run build        # בנייה לפריסה
npm run build:dev    # בנייה למצב פיתוח
npm run preview      # תצוגה מקדימה של הבנייה

# בדיקות
npm run lint         # בדיקת קוד

# פריסה
npm run build:netlify # בנייה מותאמת ל-Netlify
```

## 📁 מבנה הפרויקט

```
src/
├── components/          # רכיבי React
│   ├── ui/             # רכיבי UI בסיסיים
│   ├── About.tsx       # דף אודות
│   ├── Cart.tsx        # עגלת קניות
│   ├── Contact.tsx     # דף יצירת קשר
│   ├── Footer.tsx      # כותרת תחתונה
│   ├── Hero.tsx        # רכיב ראשי
│   ├── Layout.tsx      # מבנה כללי
│   ├── Logo.tsx        # לוגו
│   ├── Navbar.tsx      # ניווט
│   ├── Projects.tsx    # פרויקטים
│   └── Skills.tsx      # כישורים
├── hooks/              # React hooks מותאמים
├── i18n/               # קבצי תרגום
│   └── locales/
│       ├── en/         # אנגלית
│       └── he/         # עברית
├── lib/                # ספריות עזר
├── pages/              # דפי האפליקציה
└── main.tsx           # נקודת כניסה
```

## 🌐 פריסה

### פריסה ב-Netlify

הפרויקט מוכן לפריסה ב-Netlify עם כל ההגדרות הנדרשות:

1. **פריסה אוטומטית מ-GitHub**:
   - היכנס ל-[Netlify](https://netlify.com)
   - לחץ על "New site from Git"
   - בחר את הרפוזיטורי שלך
   - הגדרות: Build command: `npm run build`, Publish directory: `dist`

2. **פריסה ידנית**:
   ```bash
   npm run build
   # העלה את תיקיית dist ל-Netlify
   ```

### קבצי תצורה לפריסה
- `netlify.toml` - הגדרות Netlify
- `public/_redirects` - ניתוב SPA
- `DEPLOYMENT.md` - הוראות מפורטות

## 🎨 תכונות עיצוב

- **עיצוב מודרני** עם Tailwind CSS
- **רכיבי UI מתקדמים** מ-shadcn/ui
- **אנימציות חלקות** עם Framer Motion
- **תמיכה בערכות נושא** (כהה/בהירה)
- **נגישות מלאה** עם תמיכה ב-screen readers

## 🌍 תמיכה בשפות

הפרויקט תומך בשתי שפות:
- **עברית** - שפת ברירת מחדל
- **אנגלית** - תמיכה מלאה

התרגומים נמצאים ב-`src/i18n/locales/`

## 🔧 פיתוח

### הוספת רכיבים חדשים
```bash
# יצירת רכיב חדש
touch src/components/NewComponent.tsx
```

### הוספת תרגומים
```json
// src/i18n/locales/he/translation.json
{
  "newKey": "ערך חדש"
}
```

### בדיקת קוד
```bash
npm run lint
```

## 📊 ביצועים

- **Lighthouse Score**: 95+ בכל הקטגוריות
- **Bundle Size**: מותאם עם Vite
- **Loading Time**: פחות מ-2 שניות
- **SEO Optimized**: meta tags מותאמים

## 🤝 תרומה לפרויקט

אנחנו שמחים לקבל תרומות! כדי לתרום:

1. Fork את הפרויקט
2. צור branch חדש (`git checkout -b feature/amazing-feature`)
3. Commit את השינויים (`git commit -m 'Add amazing feature'`)
4. Push ל-branch (`git push origin feature/amazing-feature`)
5. פתח Pull Request

## 📝 רישיון

פרויקט זה מוגן תחת רישיון MIT - ראה קובץ [LICENSE](../LICENSE) לפרטים.

## 📞 יצירת קשר

- **Email**: [your-email@example.com]
- **GitHub**: [your-github-profile]
- **LinkedIn**: [your-linkedin-profile]

## 📋 מידע משפטי

- [מדיניות פרטיות](./privacy-policy.md)
- [תנאי שימוש](./terms-of-service.md)
- [הצהרת נגישות](./accessibility-statement.md)
- [NOTICE](./NOTICE)

## 🙏 תודות

תודה לכל התורמים והמשתמשים שתומכים בפרויקט זה!

---

⭐ אם הפרויקט עזר לך, אנא תן לו כוכב ב-GitHub!
