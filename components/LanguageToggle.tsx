'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import type { Lang } from '@/lib/translations';

const languages: { code: Lang; flag: string; label: string }[] = [
  { code: 'pl', flag: '🇵🇱', label: 'Polski' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
];

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === lang) || languages[0];
  const otherLang = languages.find((l) => l.code !== lang) || languages[1];

  const handleSwitch = () => {
    setLang(otherLang.code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleSwitch}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-colors text-sm"
        title={`Switch to ${otherLang.label}`}
      >
        <span className="text-lg leading-none">{currentLang.flag}</span>
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
          {currentLang.code}
        </span>
      </motion.button>
    </div>
  );
}
