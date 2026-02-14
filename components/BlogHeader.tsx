'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';

export default function BlogHeader() {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
        {t.blog.title}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
        {t.blog.subtitle}
      </p>
    </div>
  );
}
