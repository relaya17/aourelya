
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem
} from '@mui/material';
import { Menu as MenuIcon, Language as LanguageIcon } from '@mui/icons-material';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'he', name: 'Hebrew', nativeName: 'עברית' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' }
  ];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setLanguageMenuAnchor(null);
  };

  const getCurrentLanguageName = () => {
    const currentLang = i18n.language;
    const language = languages.find(lang => currentLang.startsWith(lang.code));
    return language ? language.nativeName : 'English';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' },
    { key: 'blog', href: '#blog' },
    { key: 'booking', href: '/booking' },
    { key: 'services', href: '#services' },
  ];

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={scrolled ? 8 : 2}
        sx={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.05)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: '#1e3a8a', // כחול כהה
              fontWeight: 'bold',
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}
          >
            Aurelia
          </Typography>
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.key}
                href={item.href}
                color="inherit"
                sx={{ 
                  textTransform: 'none',
                  color: '#1e3a8a', // כחול כהה
                  fontWeight: 500,
                  '&:hover': { 
                    color: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)'
                  }
                }}
              >
                {t(`header.${item.key}`)}
              </Button>
            ))}
            
            <Button
              onClick={(event) => setLanguageMenuAnchor(event.currentTarget)}
              variant="contained"
              size="small"
              startIcon={<LanguageIcon />}
              sx={{ 
                ml: 2,
                backgroundColor: '#1e3a8a', // כחול כהה
                color: 'white',
                '&:hover': {
                  backgroundColor: '#1e40af'
                }
              }}
            >
              {getCurrentLanguageName()}
            </Button>
            
            {/* Language Menu */}
            <Menu
              anchorEl={languageMenuAnchor}
              open={Boolean(languageMenuAnchor)}
              onClose={() => setLanguageMenuAnchor(null)}
              sx={{
                '& .MuiPaper-root': {
                  mt: 1,
                  minWidth: 120
                }
              }}
            >
              {languages.map((language) => (
                <MenuItem
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  selected={i18n.language.startsWith(language.code)}
                  sx={{
                    direction: language.code === 'he' || language.code === 'ar' ? 'rtl' : 'ltr',
                    textAlign: language.code === 'he' || language.code === 'ar' ? 'right' : 'left'
                  }}
                >
                  {language.nativeName}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          {/* Mobile Navigation Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
            <Button
              onClick={(event) => setLanguageMenuAnchor(event.currentTarget)}
              variant="outlined"
              size="small"
              startIcon={<LanguageIcon />}
              sx={{
                color: '#1e3a8a', // כחול כהה
                borderColor: '#1e3a8a',
                '&:hover': {
                  borderColor: '#1e40af',
                  backgroundColor: 'rgba(30, 58, 138, 0.1)'
                }
              }}
            >
              {getCurrentLanguageName()}
            </Button>
            
            {/* Language Menu for Mobile */}
            <Menu
              anchorEl={languageMenuAnchor}
              open={Boolean(languageMenuAnchor)}
              onClose={() => setLanguageMenuAnchor(null)}
              sx={{
                '& .MuiPaper-root': {
                  mt: 1,
                  minWidth: 120
                }
              }}
            >
              {languages.map((language) => (
                <MenuItem
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  selected={i18n.language.startsWith(language.code)}
                  sx={{
                    direction: language.code === 'he' || language.code === 'ar' ? 'rtl' : 'ltr',
                    textAlign: language.code === 'he' || language.code === 'ar' ? 'right' : 'left'
                  }}
                >
                  {language.nativeName}
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              onClick={() => setIsOpen(!isOpen)}
              sx={{
                color: '#1e3a8a', // כחול כהה
                '&:hover': {
                  backgroundColor: 'rgba(30, 58, 138, 0.1)'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="top"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            top: '64px',
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }
        }}
      >
        <List sx={{ pt: 1, pb: 3 }}>
          {navItems.map((item) => (
            <ListItem 
              key={item.key}
              component="a"
              href={item.href}
              onClick={() => setIsOpen(false)}
              sx={{ 
                textDecoration: 'none',
                color: '#1e3a8a', // כחול כהה
                '&:hover': { 
                  backgroundColor: 'rgba(30, 58, 138, 0.1)',
                  color: '#1e40af'
                }
              }}
            >
              <ListItemText 
                primary={t(`header.${item.key}`)}
                primaryTypographyProps={{ 
                  variant: 'body1',
                  fontWeight: 500
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
};

export default Navbar;
