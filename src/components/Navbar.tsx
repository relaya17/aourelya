import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, Drawer, MenuItem } from '@mui/material';
import { Menu as MenuIcon, Close } from '@mui/icons-material';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { key: 'contact', href: '#contact' },
  ];

  return (
    <AppBar 
      position="fixed" 
      elevation={scrolled ? 4 : 0} 
      sx={{ 
        bgcolor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent', 
        backdropFilter: 'blur(10px)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography 
            variant="h6" 
            component="a" 
            href="#" 
            sx={{ 
              textDecoration: 'none', 
              color: 'primary.main',
              flexGrow: 0,
              cursor: 'pointer'
            }}
          >
            {t('header.siteTitle')}
          </Typography>

          {/* Desktop Navigation */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              gap: 2, 
              alignItems: 'center'
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector(item.href);
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{ color: 'text.primary' }}
              >
                {t(`header.${item.key}`)}
              </Button>
            ))}
          </Box>

          {/* Language & Menu Buttons */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1
            }}
          >
            {/* Language Button */}
            <Button
              onClick={toggleLanguage}
              variant="contained"
              size="small"
              component="button"
            >
              {t('languageSwitch')}
            </Button>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={() => setIsOpen(!isOpen)}
              color="primary"
              component="button"
              aria-label={(isOpen ? t('closeMenu') : t('openMenu')) as string}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {isOpen ? <Close /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Menu */}
      <Drawer
        anchor={isRTL ? "right" : "left"}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          {navItems.map((item) => (
            <MenuItem
              key={item.key}
              onClick={() => {
                setIsOpen(false);
                const section = document.querySelector(item.href);
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              component="a"
              href={item.href}
            >
              {t(`header.${item.key}`)}
            </MenuItem>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;