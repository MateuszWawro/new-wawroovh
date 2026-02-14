'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-gray-400 dark:text-gray-500">
            <p>© {currentYear} Mateusz Wawro</p>
            <p className="text-xs mt-1">
              Part of <a href="https://wawrophotography.eu" target="_blank" rel="noopener noreferrer" className="text-blue-400 dark:text-blue-300 hover:text-blue-300 dark:hover:text-blue-200 transition-colors">Wawro Photography</a>
              <span className="mx-2 text-gray-600">·</span>
              <Link href="/cookies" className="text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                {t.footer.cookiePolicy}
              </Link>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <SocialIcon href="https://github.com/MateuszWawro" icon={<FiGithub />} />
            <SocialIcon href="https://linkedin.com/in/mateuszwawro" icon={<FiLinkedin />} />
            <SocialIcon href="mailto:mateusz@wawro.ovh" icon={<FiMail />} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 text-xl transition-colors"
    >
      {icon}
    </motion.a>
  );
}