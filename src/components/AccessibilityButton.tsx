import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  ZoomIn, 
  ZoomOut, 
  Contrast, 
  Eye, 
  EyeOff,
  X,
  Settings,
  Keyboard,
  MousePointer
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  focusIndicator: boolean;
  cursorSize: 'normal' | 'large';
}

const AccessibilityButton: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 16,
    highContrast: false,
    reducedMotion: false,
    focusIndicator: true,
    cursorSize: 'normal'
  });

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, []);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    const body = document.body;

    // Apply font size
    root.style.fontSize = `${newSettings.fontSize}px`;

    // Apply high contrast
    if (newSettings.highContrast) {
      body.classList.add('high-contrast');
      root.style.setProperty('--background', '#000000');
      root.style.setProperty('--foreground', '#ffffff');
      root.style.setProperty('--primary', '#ffff00');
      root.style.setProperty('--primary-foreground', '#000000');
    } else {
      body.classList.remove('high-contrast');
      root.style.removeProperty('--background');
      root.style.removeProperty('--foreground');
      root.style.removeProperty('--primary');
      root.style.removeProperty('--primary-foreground');
    }

    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.style.setProperty('--reduced-motion', 'reduce');
    } else {
      root.style.removeProperty('--reduced-motion');
    }

    // Apply focus indicator
    if (newSettings.focusIndicator) {
      root.style.setProperty('--focus-ring', '2px solid #3b82f6');
    } else {
      root.style.setProperty('--focus-ring', 'none');
    }

    // Apply cursor size
    if (newSettings.cursorSize === 'large') {
      body.classList.add('large-cursor');
    } else {
      body.classList.remove('large-cursor');
    }

    // Save to localStorage
    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings));
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 16,
      highContrast: false,
      reducedMotion: false,
      focusIndicator: true,
      cursorSize: 'normal'
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('accessibility.openSettings')}
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-20 right-6 z-50 bg-card border border-border rounded-lg shadow-xl p-6 w-80 max-h-96 overflow-y-auto"
            id="accessibility-panel"
            role="dialog"
            aria-labelledby="accessibility-title"
            aria-describedby="accessibility-description"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-primary" />
                <h3 id="accessibility-title" className="text-lg font-semibold">
                  {t('accessibility.title')}
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={t('accessibility.close')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div id="accessibility-description" className="sr-only">
              {t('accessibility.description')}
            </div>

            {/* Font Size Control */}
            <div className="mb-4">
              <label className="flex items-center gap-2 mb-2 text-sm font-medium">
                <ZoomIn className="w-4 h-4" />
                {t('accessibility.fontSize')}
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateSetting('fontSize', Math.max(12, settings.fontSize - 2))}
                  className="p-1 rounded hover:bg-muted transition-colors"
                  aria-label={t('accessibility.decreaseFont')}
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-sm min-w-[3rem] text-center">{settings.fontSize}px</span>
                <button
                  onClick={() => updateSetting('fontSize', Math.min(32, settings.fontSize + 2))}
                  className="p-1 rounded hover:bg-muted transition-colors"
                  aria-label={t('accessibility.increaseFont')}
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="mb-4">
              <label className="flex items-center gap-2 mb-2 text-sm font-medium">
                <Contrast className="w-4 h-4" />
                {t('accessibility.highContrast')}
              </label>
              <button
                onClick={() => updateSetting('highContrast', !settings.highContrast)}
                className={`flex items-center gap-2 p-2 rounded transition-colors ${
                  settings.highContrast 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted hover:bg-muted/80'
                }`}
                aria-pressed={settings.highContrast}
              >
                {settings.highContrast ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                <span className="text-sm">{settings.highContrast ? t('accessibility.on') : t('accessibility.off')}</span>
              </button>
            </div>

            {/* Reduced Motion Toggle */}
            <div className="mb-4">
              <label className="flex items-center gap-2 mb-2 text-sm font-medium">
                <Settings className="w-4 h-4" />
                {t('accessibility.reducedMotion')}
              </label>
              <button
                onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                className={`flex items-center gap-2 p-2 rounded transition-colors ${
                  settings.reducedMotion 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted hover:bg-muted/80'
                }`}
                aria-pressed={settings.reducedMotion}
              >
                <span className="text-sm">{settings.reducedMotion ? t('accessibility.on') : t('accessibility.off')}</span>
              </button>
            </div>

            {/* Focus Indicator Toggle */}
            <div className="mb-4">
              <label className="flex items-center gap-2 mb-2 text-sm font-medium">
                <Keyboard className="w-4 h-4" />
                {t('accessibility.focusIndicator')}
              </label>
              <button
                onClick={() => updateSetting('focusIndicator', !settings.focusIndicator)}
                className={`flex items-center gap-2 p-2 rounded transition-colors ${
                  settings.focusIndicator 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted hover:bg-muted/80'
                }`}
                aria-pressed={settings.focusIndicator}
              >
                <span className="text-sm">{settings.focusIndicator ? t('accessibility.on') : t('accessibility.off')}</span>
              </button>
            </div>

            {/* Cursor Size Toggle */}
            <div className="mb-4">
              <label className="flex items-center gap-2 mb-2 text-sm font-medium">
                <MousePointer className="w-4 h-4" />
                {t('accessibility.cursorSize')}
              </label>
              <button
                onClick={() => updateSetting('cursorSize', settings.cursorSize === 'normal' ? 'large' : 'normal')}
                className={`flex items-center gap-2 p-2 rounded transition-colors ${
                  settings.cursorSize === 'large'
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted hover:bg-muted/80'
                }`}
                aria-pressed={settings.cursorSize === 'large'}
              >
                <span className="text-sm">
                  {settings.cursorSize === 'large' ? t('accessibility.large') : t('accessibility.normal')}
                </span>
              </button>
            </div>

            {/* Reset Button */}
            <div className="pt-2 border-t">
              <button
                onClick={resetSettings}
                className="w-full p-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label={t('accessibility.resetSettings')}
              >
                {t('accessibility.resetSettings')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityButton;