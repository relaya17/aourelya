
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl font-medium mb-8">Page not found</p>
      <Link to="/" className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
        {t('header.home')}
      </Link>
    </div>
  );
};

export default NotFound;
