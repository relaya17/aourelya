import React from 'react';
import { useTranslation } from 'react-i18next';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Paper, Typography } from '@mui/material';
// import { visuallyHidden } from '@mui/material/utils'; // Removed import

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: 'background.default',
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Paper
        elevation={6} // Increased elevation for consistency
        sx={{
          mx: 'auto',
          maxWidth: '1280px', // Equivalent to max-w-7xl
          p: { xs: 3, sm: 5, lg: 8 }, // Consistent padding
          borderRadius: 3, // Consistent border radius
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Typography variant="body2" color="text.primary" sx={{ mb: { xs: 2, md: 0 } }}>
            &copy; {currentYear} {t('hero.name')}. {t('footer.rights')}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: { xs: 2, sm: 3 } }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'inherit' }}
            >
              <GitHub sx={{ fontSize: '1.5rem' }} />
              <span className="sr-only">GitHub</span> {/* Reverted to span with sr-only */}
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'inherit' }}
            >
              <LinkedIn sx={{ fontSize: '1.5rem' }} />
              <span className="sr-only">LinkedIn</span> {/* Reverted to span with sr-only */}
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'inherit' }}
            >
              <Twitter sx={{ fontSize: '1.5rem' }} />
              <span className="sr-only">Twitter</span> {/* Reverted to span with sr-only */}
            </a>
          </Box>
        </Box>
        
        <Typography variant="caption" color="text.primary" sx={{ mt: 2 }}>
          {t('footer.madeWith')}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Footer;