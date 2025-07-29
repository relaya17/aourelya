# 🤝 Contributing to Slice of Home

תודה על התעניינותך בתרומה לפרויקט! אנחנו שמחים לקבל תרומות מכל סוג.

## 📋 תוכן עניינים

- [איך לתרום](#איך-לתרום)
- [הגדרת סביבת פיתוח](#הגדרת-סביבת-פיתוח)
- [כללי קוד](#כללי-קוד)
- [בדיקות](#בדיקות)
- [תרגומים](#תרגומים)
- [דיווח באגים](#דיווח-באגים)
- [בקשות תכונות](#בקשות-תכונות)

## 🚀 איך לתרום

### 1. Fork את הפרויקט
לחץ על כפתור "Fork" בפינה הימנית העליונה של דף הפרויקט.

### 2. שכפול הרפוזיטורי
```bash
git clone https://github.com/YOUR_USERNAME/aourelya.git
cd aourelya/slice-of-home-delivery-main
```

### 3. התקנת תלויות
```bash
npm install
```

### 4. יצירת branch חדש
```bash
git checkout -b feature/your-feature-name
# או
git checkout -b fix/your-bug-fix
```

### 5. ביצוע שינויים
ערוך את הקבצים הרצויים ובדוק שהקוד עובד:
```bash
npm run dev
npm run lint
```

### 6. Commit השינויים
```bash
git add .
git commit -m "feat: add new feature description"
```

### 7. Push ל-branch
```bash
git push origin feature/your-feature-name
```

### 8. יצירת Pull Request
לך לרפוזיטורי שלך ב-GitHub ולחץ על "New Pull Request".

## 🛠️ הגדרת סביבת פיתוח

### דרישות מקדימות
- Node.js 18+
- npm או yarn
- Git

### התקנה
```bash
# שכפול הפרויקט
git clone https://github.com/YOUR_USERNAME/aourelya.git
cd aourelya/slice-of-home-delivery-main

# התקנת תלויות
npm install

# הפעלת שרת פיתוח
npm run dev
```

### פקודות שימושיות
```bash
npm run dev          # הפעלת שרת פיתוח
npm run build        # בנייה לפריסה
npm run lint         # בדיקת קוד
npm run preview      # תצוגה מקדימה
```

## 📝 כללי קוד

### TypeScript
- השתמש בטיפוסים חזקים
- הימנע מ-`any` ככל האפשר
- השתמש ב-interfaces עבור אובייקטים

### React
- השתמש ב-functional components
- השתמש ב-hooks במקום class components
- שמור על רכיבים קטנים ופשוטים

### Styling
- השתמש ב-Tailwind CSS classes
- הימנע מ-inline styles
- השתמש ב-shadcn/ui components

### Naming Conventions
```typescript
// Components
const MyComponent = () => { ... }

// Hooks
const useMyHook = () => { ... }

// Types
interface MyInterface { ... }

// Constants
const MY_CONSTANT = 'value'
```

### Commit Messages
השתמש ב-Conventional Commits:
```
feat: add new feature
fix: fix bug
docs: update documentation
style: formatting changes
refactor: code refactoring
test: add tests
chore: maintenance tasks
```

## 🧪 בדיקות

### הרצת בדיקות
```bash
npm run lint         # בדיקת קוד
npm run build        # בדיקת בנייה
```

### כתיבת בדיקות
```typescript
// src/components/MyComponent.test.tsx
import { render, screen } from '@testing-library/react'
import MyComponent from './MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
```

## 🌍 תרגומים

### הוספת תרגומים חדשים

1. **עברית** - `src/i18n/locales/he/translation.json`
```json
{
  "newKey": "ערך חדש"
}
```

2. **אנגלית** - `src/i18n/locales/en/translation.json`
```json
{
  "newKey": "New value"
}
```

### שימוש בתרגומים
```typescript
import { useTranslation } from 'react-i18next'

const MyComponent = () => {
  const { t } = useTranslation()
  
  return <div>{t('newKey')}</div>
}
```

## 🐛 דיווח באגים

### לפני דיווח באג
1. בדוק שהבאג לא דווח כבר
2. נסה לשחזר את הבאג
3. בדוק שהבאג קיים בגרסה האחרונה

### דיווח באג
השתמש בתבנית הבאה:

```markdown
## תיאור הבאג
תיאור קצר וברור של הבאג.

## צעדים לשחזור
1. לך ל-'...'
2. לחץ על '...'
3. גלול ל-'...'
4. ראה שגיאה

## התנהגות צפויה
תיאור של מה שצריך לקרות.

## התנהגות בפועל
תיאור של מה שקורה בפועל.

## מידע נוסף
- מערכת הפעלה: [Windows/macOS/Linux]
- דפדפן: [Chrome/Firefox/Safari]
- גרסה: [מספר גרסה]
```

## 💡 בקשות תכונות

### לפני בקשה
1. בדוק שהתכונה לא קיימת כבר
2. בדוק שהתכונה מתאימה לפרויקט
3. חשב על השימושיות של התכונה

### בקשה לתכונה
השתמש בתבנית הבאה:

```markdown
## תיאור התכונה
תיאור מפורט של התכונה הרצויה.

## בעיה שזה פותר
תיאור של הבעיה שהתכונה פותרת.

## פתרון מוצע
תיאור של איך התכונה אמורה לעבוד.

## חלופות שנבחנו
רשימת חלופות שנבחנו.

## מידע נוסף
כל מידע נוסף שיכול לעזור.
```

## 📞 יצירת קשר

- **Issues**: [GitHub Issues](https://github.com/YOUR_USERNAME/aourelya/issues)
- **Discussions**: [GitHub Discussions](https://github.com/YOUR_USERNAME/aourelya/discussions)
- **Email**: [your-email@example.com]

## 🙏 תודה

תודה לכל התורמים שתורמים לפרויקט זה! כל תרומה, קטנה כגדולה, מוערכת מאוד.

---

⭐ אם הפרויקט עזר לך, אנא תן לו כוכב ב-GitHub!