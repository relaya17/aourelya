
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-xs sm:text-sm text-muted-foreground">
              &copy; {currentYear} {t('hero.name')} {t('footer.rights')}
            </p>
          </div>
          
          <div className="flex space-x-4 sm:space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
        
        {/* Legal Links */}
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-muted">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs text-muted-foreground">
            <a 
              href="/privacy-policy.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              מדיניות פרטיות
            </a>
            <a 
              href="/terms-of-service.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              תנאי שימוש
            </a>
            <a 
              href="/accessibility-statement.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              הצהרת נגישות
            </a>
            <a 
              href="/cookie-policy.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              מדיניות עוגיות
            </a>
          </div>
        </div>
        
        <div className="mt-3 sm:mt-4 text-center text-xs text-muted-foreground">
          <p>{t('footer.madeWith')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
