'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiShield, FiCheck, FiX, FiTrash2 } from 'react-icons/fi';
import { useLanguage } from '@/app/contexts/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function CookiesPage() {
  const { t } = useLanguage();
  const tc = t.cookiesPage;

  const clearCookieConsent = () => {
    localStorage.removeItem('cookieConsent');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 mb-6 shadow-lg shadow-purple-500/25">
              <FiShield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4">
              {tc.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              {tc.subtitle}
            </p>
          </motion.div>

          {/* Content sections */}
          <div className="space-y-8">

            {/* Section 1 */}
            <motion.section {...fadeInUp} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-10" />
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold">1</span>
                  {tc.whatAreCookies}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {tc.whatAreCookiesDesc}
                </p>
              </div>
            </motion.section>

            {/* Section 2 - Cookie types */}
            <motion.section {...fadeInUp} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-10" />
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-sm font-bold">2</span>
                  {tc.whatWeUse}
                </h2>

                <div className="space-y-4">
                  {/* cookieConsent */}
                  <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800/30">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
                      <FiCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{tc.cookieConsentName}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {tc.cookieConsentDesc} <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">accepted</code> / <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">rejected</code>.
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{tc.cookieConsentLifetime}</p>
                    </div>
                  </div>

                  {/* theme */}
                  <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800/30">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
                      <FiCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{tc.themeName}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {tc.themeDesc}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{tc.themeLifetime}</p>
                    </div>
                  </div>

                  {/* Analytics - not used */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-700/50">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-gray-400 dark:bg-gray-600 flex items-center justify-center">
                      <FiX className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{tc.analyticsCookies}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {tc.analyticsCookiesDesc}
                      </p>
                    </div>
                  </div>

                  {/* Advertising - not used */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-xl border border-gray-200 dark:border-gray-700/50">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-gray-400 dark:bg-gray-600 flex items-center justify-center">
                      <FiX className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{tc.adCookies}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {tc.adCookiesDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section {...fadeInUp} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-10" />
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold">3</span>
                  {tc.howToManage}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {tc.howToManageDesc}
                </p>
                <button
                  onClick={clearCookieConsent}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all text-sm"
                >
                  <FiTrash2 className="w-4 h-4" />
                  {tc.resetConsent}
                </button>
              </div>
            </motion.section>

            {/* Section 4 */}
            <motion.section {...fadeInUp} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-10" />
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-sm font-bold">4</span>
                  {tc.contactSection}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {tc.contactDesc}{' '}
                  <a
                    href="mailto:mateusz@wawro.ovh"
                    className="text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors underline underline-offset-2"
                  >
                    mateusz@wawro.ovh
                  </a>.
                </p>
              </div>
            </motion.section>

            {/* Last updated */}
            <motion.p {...fadeInUp} className="text-center text-xs text-gray-400 dark:text-gray-600 mt-8">
              {tc.lastUpdated}
            </motion.p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
