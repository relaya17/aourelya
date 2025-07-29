# 🔒 Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

אנחנו לוקחים אבטחה ברצינות רבה. אם מצאת פגיעות אבטחה, אנא דווח עליה בהקדם האפשרי.

### איך לדווח על פגיעות אבטחה

**אל תפתח Issue רגיל ב-GitHub עבור פגיעות אבטחה!**

במקום זאת, שלח לנו דוא"ל ל: [security@your-domain.com]

### מה לכלול בדיווח

כדי שנוכל לטפל בפגיעות ביעילות, אנא כלול את המידע הבא:

1. **תיאור הפגיעות** - תיאור מפורט של הפגיעות
2. **צעדים לשחזור** - איך לשחזר את הפגיעות
3. **השפעה פוטנציאלית** - מה יכול לקרות בגלל הפגיעות
4. **הצעה לתיקון** - אם יש לך רעיון איך לתקן
5. **מידע נוסף** - כל מידע נוסף שיכול לעזור

### מה קורה אחרי הדיווח

1. **אישור קבלה** - נשלח אישור תוך 24 שעות
2. **בדיקה** - נבדוק את הפגיעות תוך 48 שעות
3. **תיקון** - נפתח תיקון בהקדם האפשרי
4. **עדכון** - נעדכן אותך על התקדמות התיקון
5. **פרסום** - נפרסם עדכון אבטחה עם פרטי התיקון

## Security Best Practices

### למפתחים

1. **עדכונים קבועים** - שמור על תלויות מעודכנות
2. **בדיקות אבטחה** - הרץ בדיקות אבטחה באופן קבוע
3. **קוד בטוח** - השתמש בפרקטיקות פיתוח בטוחות
4. **סודיות** - אל תכלול מידע רגיש בקוד

### למשתמשים

1. **עדכונים** - שמור על הגרסה המעודכנת ביותר
2. **סיסמאות חזקות** - השתמש בסיסמאות חזקות וייחודיות
3. **אימות דו-שלבי** - הפעל אימות דו-שלבי כשאפשר
4. **מודעות** - היה מודע לניסיונות הונאה

## Security Headers

הפרויקט כולל headers אבטחה מתקדמים:

```toml
# netlify.toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## Dependencies Security

### בדיקת תלויות
```bash
# בדיקת פגיעות אבטחה
npm audit

# תיקון פגיעות אוטומטי
npm audit fix

# תיקון פגיעות עם עדכונים גדולים
npm audit fix --force
```

### עדכון תלויות
```bash
# בדיקת עדכונים זמינים
npm outdated

# עדכון תלויות
npm update
```

## Security Checklist

### לפני כל release
- [ ] הרץ `npm audit`
- [ ] בדוק headers אבטחה
- [ ] בדוק תלויות מעודכנות
- [ ] בדוק קוד לא מכיל מידע רגיש
- [ ] בדוק SSL/TLS מופעל
- [ ] בדוק CORS מוגדר נכון

### בדיקות אבטחה
- [ ] בדיקת XSS
- [ ] בדיקת CSRF
- [ ] בדיקת SQL Injection
- [ ] בדיקת Authentication
- [ ] בדיקת Authorization
- [ ] בדיקת Data Validation

## Contact Information

- **Security Email**: [security@your-domain.com]
- **PGP Key**: [Link to PGP key]
- **Security Team**: [security-team@your-domain.com]

## Acknowledgments

תודה לכל החוקרים שתורמים לאבטחת הפרויקט!

---

**חשוב**: אל תכלול מידע רגיש או פרטי משתמשים בדיווחים ציבוריים.