# מדריך ביצועים ואופטימיזציה

## שיפורי ביצועים שבוצעו

### 1. אופטימיזציית טעינה
- **הסרת סקריפטים מיותרים**: הוסר הסקריפט החיצוני `gptengineer.js`
- **טעינת פונטים מותאמת**: הוספת `preload` לפונטים עם fallback
- **DNS Prefetch**: הוספת DNS prefetch לפונטים חיצוניים

### 2. אופטימיזציית בנייה
- **Code Splitting**: חלוקה אוטומטית של הקוד לחבילות נפרדות
- **Manual Chunks**: חלוקה ידנית של ספריות גדולות
- **Tree Shaking**: הסרת קוד לא נדרש
- **Minification**: דחיסת קוד עם Terser

### 3. Lazy Loading
- **React.lazy()**: טעינה עצלה של דפים
- **Suspense**: תצוגת loading בזמן טעינה
- **Route-based splitting**: חלוקה לפי נתיבים

### 4. אופטימיזציית React Query
- **Cache Configuration**: הגדרת זמני cache מותאמים
- **Stale Time**: מניעת בקשות מיותרות
- **GC Time**: ניהול זיכרון יעיל

### 5. אופטימיזציית i18n
- **Preload Languages**: טעינה מוקדמת של שפות
- **Language Detection**: זיהוי שפה יעיל
- **Cache Configuration**: שמירת הגדרות ב-localStorage

## פקודות לבדיקת ביצועים

```bash
# בנייה עם ניתוח חבילות
npm run build:analyze

# בדיקת ביצועים עם Lighthouse
npm run performance

# בדיקת גודל חבילות
npm run bundle-size

# בדיקת טיפוסים
npm run type-check
```

## מדדי ביצועים מומלצים

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### מדדים נוספים
- **First Contentful Paint**: < 1.8s
- **Speed Index**: < 3.4s
- **Total Blocking Time**: < 200ms

## טיפים לשיפור נוסף

### 1. אופטימיזציית תמונות
```bash
# התקנת כלי אופטימיזציה
npm install --save-dev imagemin imagemin-webp
```

### 2. Service Worker
```javascript
// הוספת Service Worker לאחסון במטמון
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

### 3. Preloading
```html
<!-- טעינה מוקדמת של משאבים קריטיים -->
<link rel="preload" href="/critical.css" as="style">
<link rel="preload" href="/main.js" as="script">
```

### 4. Compression
```nginx
# הגדרת דחיסה בשרת
gzip on;
gzip_types text/plain text/css application/json application/javascript;
```

## ניטור ביצועים

### כלים מומלצים
- **Lighthouse**: בדיקת ביצועים מקיפה
- **WebPageTest**: ניתוח מפורט של טעינה
- **Chrome DevTools**: ניתוח בזמן אמת
- **Bundle Analyzer**: ניתוח גודל חבילות

### מדדי ניטור
- זמן טעינה ראשוני
- זמן טעינת דפים
- שימוש בזיכרון
- גודל חבילות JavaScript

## פתרון בעיות נפוצות

### 1. טעינה איטית
- בדוק גודל חבילות JavaScript
- בדוק טעינת תמונות
- בדוק בקשות רשת מיותרות

### 2. Layout Shift
- הגדר גובה ורוחב לתמונות
- השתמש ב-placeholder
- הימנע מטקסטים ללא גובה מוגדר

### 3. זיכרון גבוה
- בדוק memory leaks
- השתמש ב-React.memo
- נקה event listeners

## עדכונים עתידיים

- [ ] הוספת Service Worker
- [ ] אופטימיזציית תמונות אוטומטית
- [ ] Progressive Web App (PWA)
- [ ] Server-Side Rendering (SSR)
- [ ] Static Site Generation (SSG)