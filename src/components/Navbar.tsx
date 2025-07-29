
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
  useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon, Language as LanguageIcon } from '@mui/icons-material';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'he' : 'en';
    i18n.changeLanguage(newLang);
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
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography 
            variant="h6" 
            component="a" 
            href="#" 
            sx={{ 
              textDecoration: 'none', 
              color: 'primary.main',
              fontWeight: 'bold'
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
                  '&:hover': { color: 'primary.main' }
                }}
              >
                {t(`header.${item.key}`)}
              </Button>
            ))}
            
            <Button
              onClick={toggleLanguage}
              variant="contained"
              startIcon={<LanguageIcon />}
              size="small"
              sx={{ ml: 2 }}
            >
              {t('languageSwitch')}
            </Button>
          </Box>
          
          {/* Mobile Navigation Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
            <IconButton
              onClick={toggleLanguage}
              color="inherit"
              size="small"
            >
              <LanguageIcon />
            </IconButton>
            <IconButton
              onClick={() => setIsOpen(!isOpen)}
              color="inherit"
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
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
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
                color: 'inherit',
                '&:hover': { backgroundColor: 'action.hover' }
              }}
            >
              <ListItemText 
                primary={t(`header.${item.key}`)}
                primaryTypographyProps={{ 
                  variant: 'body1',
                  fontWeight: 'medium'
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
