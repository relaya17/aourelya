import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Container,
  Box,
  Typography,
  Paper,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
  Stack
} from '@mui/material';
import { Event } from '@mui/icons-material';

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      component="section"
      id="about"
      sx={{
        pb: 8,
        backgroundColor: 'grey.50',
        mt: 0,
        pt: 0
      }}
    >
      {/* תמונה מרובעת בראש הדף */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: -4 }}>
        <Avatar
          src="/Designer.png"
          alt="תמונה אישית"
          sx={{
            width: { xs: 192, sm: 256, md: 320 },
            height: { xs: 192, sm: 256, md: 320 },
            borderRadius: 2,
            boxShadow: 6,
            mb: { xs: 3, sm: 5 },
            '& img': {
              objectPosition: 'center 20%'
            }
          }}
        />
      </Box>
      
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                textAlign: 'center',
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                color: '#1e3a8a' // כחול כהה
              }}
            >
              {t('about.title')}
            </Typography>
            <Box
              sx={{
                width: { xs: 64, sm: 80, md: 96 },
                height: 4,
                bgcolor: 'primary.main',
                mx: 'auto',
                mb: { xs: 3, sm: 4 }
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ width: '100%' }}
          >
            <Paper
              elevation={2}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: 3,
                textAlign: 'right',
                direction: 'rtl',
                backgroundColor: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              {/* קצת עליי */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  ✨ קצת עליי
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.8 }}
                >
                  מפתחת מערכות ואתרי אינטרנט חכמים עם התמחות בטכנולוגיות המובילות בעולם הפיתוח — JavaScript, React, TypeScript, Node.js, WordPress ו־Firebase.
                  <br /><br />
                  אני בונה פתרונות דיגיטליים מותאמים אישית, שמחברים בין טכנולוגיה מתקדמת, עיצוב מדויק ו־חוויית משתמש חלקה.
                  <br /><br />
                  מלווה עסקים, יזמים ופרויקטים מיוחדים משלב הרעיון ועד השקה מוצלחת — עם תשתיות חזקות, אופטימיזציה ל־SEO, והתאמה מלאה למובייל ולדסקטופ.
                </Typography>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* השירותים שלי */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: 'primary.main',
                    fontStyle: 'italic',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  💼 השירותים שלי
                </Typography>
                <List sx={{ py: 0 }}>
                  {[
                    'פיתוח אתרי תדמית, חנויות, בלוגים ואתרי פורטפוליו',
                    'פיתוח מערכות מורכבות עם Firebase, MongoDB, Express ו־AI',
                    'בניית רכיבים מותאמים אישית ב־React ו־TypeScript',
                    'פיתוח תוספים/תבניות ייעודיים ל־WordPress',
                    'שילוב מערכות תשלום, CRM, APIs ו־Webhooks',
                    'אופטימיזציה ל־SEO, מהירות ונגישות (WCAG)',
                    'עיצוב UX/UI מוקפד מבוסס מחקר והתנהגות משתמשים'
                  ].map((service, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemText
                        primary={`✅ ${service}`}
                        primaryTypographyProps={{
                          variant: 'body2',
                          color: 'text.secondary'
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* למה לעבוד איתי */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: 'primary.main',
                    fontStyle: 'italic',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  🚀 למה לעבוד איתי?
                </Typography>
                <Stack spacing={2}>
                  {[
                    { icon: '💡', text: 'שילוב של טכנולוגיה מתקדמת, עיצוב חווייתי וחשיבה תכל\'סית' },
                    { icon: '🛠', text: 'ניסיון מוכח בפיתוח מערכות חכמות עם תוצאות בשטח' },
                    { icon: '🤝', text: 'ליווי אישי, שקיפות ותקשורת בגובה העיניים' },
                    { icon: '📱', text: 'התאמה מלאה למובייל, נגישות ואופטימיזציית SEO' },
                    { icon: '🧠', text: 'ראייה רחבה – גם כמפתחת וגם כיועצת מוצר וטכנולוגיה' }
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="h6">{item.icon}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {item.text}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* צור קשר */}
              <Box sx={{ mt: 6, textAlign: 'center' }}>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    fontWeight: 'bold',
                    color: 'primary.dark',
                    mb: 2,
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
                    fontStyle: 'italic',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                    bgcolor: 'primary.50',
                    px: { xs: 2, sm: 3, md: 4 },
                    py: { xs: 1, sm: 1.5, md: 2 },
                    borderRadius: 2,
                    borderBottom: 4,
                    borderColor: 'primary.dark'
                  }}
                >
                  הפרויקט הבא שלך מתחיל כאן
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{ mb: 2, px: 2 }}
                >
                  אני מזמינה אותך ליצור קשר ולגלות איך אפשר להפוך רעיון חכם למציאות חכמה
                </Typography>
                
                <Button
                  component="a"
                  href="/booking"
                  variant="outlined"
                  size="large"
                  startIcon={<Event />}
                  sx={{
                    px: { xs: 3, sm: 4, md: 5 },
                    py: { xs: 1.5, sm: 2, md: 2.5 },
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    fontWeight: 'bold',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2
                    }
                  }}
                >
                  צור קשר
                </Button>
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
