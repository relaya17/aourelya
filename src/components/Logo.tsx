import React, { FC, memo } from 'react';
import { Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface LogoProps {
  /** URL או import של קובץ SVG/PNG */
  logoSrc?: string;
  /** מפתח תרגום לטקסט האלטרנטיבי */
  logoAltKey?: string;
}

const Logo: FC<LogoProps> = memo(({ logoSrc, logoAltKey = 'logo.alt' }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={t(logoAltKey) as string}
          className="h-6 w-6 object-contain"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <Code className="h-6 w-6 text-primary" aria-hidden="true" />
      )}
      <span className="text-xl font-bold">{t('hero.name')}</span>
    </div>
  );
});

export default Logo;
