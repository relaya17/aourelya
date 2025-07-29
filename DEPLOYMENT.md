# פריסה ב-Netlify

## הוראות פריסה

### שיטה 1: פריסה אוטומטית מ-GitHub

1. היכנס ל-[Netlify](https://netlify.com) ויצור חשבון
2. לחץ על "New site from Git"
3. בחר את GitHub כספק Git
4. בחר את הרפוזיטורי שלך
5. הגדרות הבנייה:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. לחץ על "Deploy site"

### שיטה 2: פריסה ידנית

1. הרץ את הפקודה הבאה:
   ```bash
   npm run build
   ```

2. העלה את תיקיית `dist` ל-Netlify:
   - היכנס ל-Netlify
   - לחץ על "New site from Git"
   - בחר "Deploy manually"
   - גרור את תיקיית `dist` לאזור הפריסה

## הגדרות חשובות

- **Node.js version**: 18 (מוגדר ב-netlify.toml)
- **Build command**: `npm run build`
- **Publish directory**: `dist`

## קבצי תצורה

- `netlify.toml` - הגדרות הפריסה
- `public/_redirects` - ניתוב SPA
- `package.json` - סקריפטי בנייה

## פתרון בעיות נפוצות

### שגיאת 404 בדפים פנימיים
הקובץ `_redirects` ו-`netlify.toml` מטפלים בניתוב SPA. אם עדיין יש בעיות, ודא שהקבצים נמצאים במקום הנכון.

### שגיאות בנייה
1. ודא שכל התלויות מותקנות: `npm install`
2. בדוק שהפקודה `npm run build` עובדת מקומית
3. בדוק את לוגי הבנייה ב-Netlify

### בעיות ביצועים
הקבצים הסטטיים (JS, CSS, תמונות) מוגדרים עם cache headers מתאימים ב-`netlify.toml`.