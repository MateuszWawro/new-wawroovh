'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShield, FiCheck, FiX, FiInfo } from 'react-icons/fi';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-4xl mx-auto relative">
            {/* Gradient glow behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-lg opacity-30 dark:opacity-40" />

            <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
              {/* Gradient top bar */}
              <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />

              <div className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                  {/* Cookie icon with gradient bg */}
                  <motion.div
                    initial={{ rotate: -10 }}
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                    className="hidden md:flex shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 items-center justify-center shadow-lg"
                  >
                    <FiShield className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-1.5">
                      🍪 Prywatność i pliki cookie
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Ta strona korzysta z plików cookie wyłącznie do zapamiętania Twoich preferencji (np. motyw).
                      Nie zbieramy danych analitycznych ani nie udostępniamy ich stronom trzecim.
                    </p>

                    {/* Expandable details */}
                    <AnimatePresence>
                      {showDetails && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <span className="w-2 h-2 rounded-full bg-green-500" />
                              <span className="text-gray-700 dark:text-gray-300 font-medium">Niezbędne</span>
                              <span className="text-xs text-gray-500 dark:text-gray-500">— preferencje motywu, zgoda cookie</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="w-2 h-2 rounded-full bg-red-400" />
                              <span className="text-gray-700 dark:text-gray-300 font-medium">Analityczne</span>
                              <span className="text-xs text-gray-500 dark:text-gray-500">— nie używamy</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="w-2 h-2 rounded-full bg-red-400" />
                              <span className="text-gray-700 dark:text-gray-300 font-medium">Reklamowe</span>
                              <span className="text-xs text-gray-500 dark:text-gray-500">— nie używamy</span>
                            </div>
                            <div className="mt-2">
                              <Link
                                href="/cookies"
                                className="text-xs text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors underline underline-offset-2"
                              >
                                Przeczytaj pełną politykę cookies →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="mt-2 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <FiInfo className="w-3.5 h-3.5" />
                      {showDetails ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}
                    </button>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 w-full md:w-auto shrink-0">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={rejectCookies}
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all text-sm"
                    >
                      <FiX className="w-4 h-4" />
                      Odrzuć
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={acceptCookies}
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all text-sm"
                    >
                      <FiCheck className="w-4 h-4" />
                      Akceptuję
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}