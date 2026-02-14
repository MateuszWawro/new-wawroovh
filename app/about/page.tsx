'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { 
  FiCode, 
  FiServer, 
  FiShield, 
  FiMonitor,
  FiTool,
  FiGitBranch,
  FiDatabase,
  FiAward,
  FiBriefcase
} from 'react-icons/fi';
import { 
  SiDocker, 
  SiGitlab, 
  SiKubernetes, 
  SiAnsible, 
  SiTerraform,
  SiLinux,
  SiVuedotjs,
  SiJavascript,
  SiWordpress,
  SiGrafana,
  SiPrometheus,
  SiPostgresql,
  SiGithub,
  SiNextdotjs,
  SiCloudflare,
  SiNginx
} from 'react-icons/si';

const techStack = [
  {
    category: 'DevOps & CI/CD',
    icon: <FiGitBranch />,
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'GitLab CI/CD', icon: <SiGitlab /> },
      { name: 'GitHub Actions', icon: <SiGithub /> },
      { name: 'Ansible', icon: <SiAnsible /> },
      { name: 'Terraform', icon: <SiTerraform /> },
      { name: 'Semaphore UI', icon: <FiTool /> },
      { name: 'Cloudflare', icon: <SiCloudflare /> },
    ],
  },
  {
    category: 'Monitoring & Security',
    icon: <FiShield />,
    color: 'from-red-500 to-pink-500',
    technologies: [
      { name: 'Zabbix', icon: <FiMonitor /> },
      { name: 'Wazuh', icon: <FiShield /> },
      { name: 'Prometheus', icon: <SiPrometheus /> },
      { name: 'Grafana', icon: <SiGrafana /> },
      { name: 'Trivy', icon: <FiShield /> },
      { name: 'DefectDojo', icon: <FiShield /> },
      { name: 'WAF', icon: <FiShield /> },
    ],
  },
  {
    category: 'Infrastructure',
    icon: <FiServer />,
    color: 'from-purple-500 to-indigo-500',
    technologies: [
      { name: 'Linux', icon: <SiLinux /> },
      { name: 'Proxmox', icon: <FiServer /> },
      { name: 'Harbor', icon: <FiDatabase /> },
      { name: 'Portainer', icon: <FiServer /> },
      { name: 'Nginx PM', icon: <SiNginx /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
    ],
  },
  {
    category: 'Development',
    icon: <FiCode />,
    color: 'from-green-500 to-emerald-500',
    technologies: [
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Vue.js', icon: <SiVuedotjs /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Cypress', icon: <FiCode /> },
      { name: 'Playwright', icon: <FiCode /> },
      { name: 'WordPress', icon: <SiWordpress /> },
    ],
  },
];

export default function AboutPage() {
  const { t } = useLanguage();
  const education = t.about.educationData;
  const experience = t.about.experienceData;

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            <StatCard number="5+" label={t.about.yearsExp} />
            <StatCard number="30+" label={t.about.technologies} />
            <StatCard number="4" label={t.about.positions} />
            <StatCard number="2" label={t.about.itCompanies} />
          </motion.div>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <div className="flex items-center mb-8">
              <FiAward className="text-3xl text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t.about.education}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-t-4 border-blue-600 dark:border-blue-400 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        (edu.status as string) === 'W trakcie' || (edu.status as string) === 'In progress'
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      }`}>
                        {edu.status}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                        {edu.field}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                        {edu.school}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {edu.years}
                  </p>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                      {t.about.thesisTopic}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                      {edu.thesis}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <div className="flex items-center mb-8">
              <FiBriefcase className="text-3xl text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t.about.experience}
              </h2>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 transition-all ${
                    exp.current 
                      ? 'border-green-500 dark:border-green-400' 
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-semibold">
                            {t.about.currently}
                          </span>
                        )}
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.location} · {exp.type}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                      {exp.period}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">✓</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center mb-8">
              <FiCode className="text-3xl text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t.about.techStack}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {techStack.map((stack, index) => (
                <motion.div
                  key={stack.category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all"
                >
                  <div className="flex items-center mb-6">
                    <div className={`text-2xl bg-gradient-to-r ${stack.color} text-white p-3 rounded-lg mr-4`}>
                      {stack.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {stack.category}
                    </h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {stack.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 + index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700 cursor-pointer transition-all hover:shadow-md"
                      >
                        <div className="text-2xl text-blue-600 dark:text-blue-400 mb-2">
                          {tech.icon}
                        </div>
                        <p className="text-xs font-medium text-gray-900 dark:text-white text-center">
                          {tech.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transition-all"
    >
      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
        {number}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300">
        {label}
      </div>
    </motion.div>
  );
}