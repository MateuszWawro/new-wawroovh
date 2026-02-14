'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.blog, href: '/blog' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.status, href: '/status' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 cursor-pointer">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/me.jpg"
                  alt="Mateusz Wawro"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              {/* Nazwa */}
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Mateusz Wawro
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <div className="relative cursor-pointer">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-700 dark:text-gray-300 transition-colors"
                    >
                      {item.name}
                    </motion.span>

                    {/* Active underline */}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                      />
                    )}

                    {/* Hover underline */}
                    <motion.div
                      className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </Link>
              );
            })}
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-in Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className={`block py-3 px-4 text-gray-700 dark:text-gray-300 border-l-4 ${
                        isActive
                          ? 'border-blue-600 dark:border-blue-400 font-semibold'
                          : 'border-transparent'
                      } hover:border-blue-600 dark:hover:border-blue-400 transition-all`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
