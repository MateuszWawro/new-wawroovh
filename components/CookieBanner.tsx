'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
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
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  🍪 Używamy plików cookie
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Ta strona używa plików cookie wyłącznie do zapamiętania Twoich preferencji (np. tryb ciemny). 
                  Nie zbieramy danych analitycznych ani nie udostępniamy ich stronom trzecim.
                </p>
              </div>

              <div className="flex gap-3 w-full md:w-auto">
                <button
                  onClick={rejectCookies}
                  className="flex-1 md:flex-none px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                >
                  Odrzuć
                </button>
                <button
                  onClick={acceptCookies}
                  className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  Akceptuję
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}