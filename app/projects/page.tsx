'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiExternalLink } from 'react-icons/fi';
import { SiDocker, SiProxmox, SiGitlab, SiGrafana, SiTerraform } from 'react-icons/si';

const projects = [
  {
    title: 'OzonSir.pl',
    description: 'Strona internetowa dla organizacji zajmującej się sportem osób niepełnosprawnych. Responsywny design, kalendarz wydarzeń, galeria zajęć sportowych i formularz kontaktowy dla zainteresowanych uczestników.',
    url: 'https://ozonsir.pl',
    image: '♿',
    technologies: ['WordPress', 'PHP', 'CSS'],
    category: 'Strony WWW',
  },
  {
    title: 'Ruczaj Elbląg',
    description: 'Strona centrum odnowy biologicznej Ruczaj w Elblągu. Prezentacja oferty odnowy, masaży, saun i zabiegów relaksacyjnych. System rezerwacji online i galeria zdjęć ośrodka.',
    url: 'https://ruczaj.elblag.pl',
    image: '🧘',
    technologies: ['WordPress', 'PHP', 'CSS'],
    category: 'Strony WWW',
  },
  {
    title: 'Piastowo55.pl',
    description: 'Strona zespołu domków letniskowych Piastowo 55 do wynajęcia. Prezentacja obiektów, infrastruktury sportowej (boiska, place zabaw), cennik i system rezerwacji. Idealne miejsce na aktywny wypoczynek.',
    url: 'https://piastowo55.pl',
    image: '🏡',
    technologies: ['WordPress', 'PHP', 'CSS'],
    category: 'Strony WWW',
  },
  {
    title: 'Reumatologia Elbląg',
    description: 'Strona gabinetu reumatologicznego w Elblągu. Informacje o usługach, cennik, możliwość umówienia wizyty online.',
    url: 'https://reumatologia.elblag.pl',
    image: '🏥',
    technologies: ['WordPress', 'PHP', 'CSS'],
    category: 'Strony WWW',
  },
  {
    title: 'Wawro Photography',
    description: 'Portfolio fotograficzne - fotografia nieruchomości, wideo z drona, zdjęcia 360°. Galeria projektów, cennik usług i formularz kontaktowy.',
    url: 'https://wawrophotography.eu',
    image: '📸',
    technologies: ['Vue', 'JavaScript', 'CSS'],
    category: 'Strony WWW',
  },
  {
    title: 'Agnieszka Wawro Portfolio',
    description: 'Strona portfolio dla architekta. Prezentacja projektów architektonicznych, realizacji i koncepcji. Portfolio zawiera galerię wykonanych prac, opis usług oraz formularz kontaktowy dla potencjalnych klientów.',
    url: 'https://agnieszka.wawro.ovh',
    image: '🏛️',
    technologies: ['Vue', 'JavaScript', 'CSS'],
    category: 'Strony WWW',
  },
  {
    title: 'Dam-Rob - Strona Testowa',
    description: 'Strona testowa hostowana w homelab. Wykorzystywana do testowania nowych funkcjonalności, deploymentów i konfiguracji CI/CD przed wdrożeniem produkcyjnym.',
    url: 'https://dam-rob.wawro.ovh',
    image: '🧪',
    technologies: ['Vue', 'JavaScript', 'CSS'],
    category: 'Homelab',
  },
  {
    title: 'Homelab Infrastructure',
    description: 'Kompleksowa infrastruktura homelab oparta o Proxmox VE oraz VPS. Self-hosted GitLab do zarządzania kodem, Semaphore UI do automatyzacji z Ansible, Wazuh SIEM do monitoringu bezpieczeństwa, stack Prometheus + Grafana do observability. Infrastructure as Code z Terraform. Wszystko konteneryzowane w Docker i zarządzane przez GitLab CI/CD pipelines.',
    url: 'https://gitlab.wawro.ovh',
    image: '🖥️',
    technologies: ['Proxmox', 'Docker', 'GitLab', 'Ansible', 'Terraform', 'Wazuh', 'Prometheus', 'Grafana', 'Semaphore UI'],
    category: 'Homelab',
  },
  {
    title: 'Family App',
    description: 'Rozwijana aplikacja rodzinna hostowana w homelab. Prywatna platforma do zarządzania wydarzeniami rodzinnymi, udostępniania zdjęć i organizacji spotkań. Projekt w aktywnym rozwoju z planami rozbudowy o kolejne funkcjonalności.',
    url: 'https://family.wawro.ovh',
    image: '👨‍👩‍👧‍👦',
    technologies: ['Vite', 'SQLite', 'Docker', 'TypeScript'],
    category: 'Aplikacje',
    status: 'W rozwoju',
  },
];

const categories = ['Wszystkie', 'Strony WWW', 'Homelab', 'Aplikacje'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('Wszystkie');

  const filteredProjects = selectedCategory === 'Wszystkie' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <Navbar />

      <div className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Moje Projekty
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Strony internetowe, infrastruktura homelab i aplikacje webowe, które stworzyłem
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl"
              >
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-8xl">
                  {project.image}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 min-h-[100px]">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Visit Button */}
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all w-full justify-center">
                    <FiExternalLink />
                    Odwiedź stronę
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Homelab Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20"
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Homelab Infrastructure
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Profesjonalna infrastruktura oparta o Proxmox i VPS, z pełną automatyzacją i monitoringiem
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <TechCard 
                icon={<SiProxmox />} 
                label="Proxmox VE" 
                description="Hypervisor wirtualizacji"
                color="from-orange-500 to-red-500"
              />
              <TechCard 
                icon={<SiGitlab />} 
                label="GitLab" 
                description="CI/CD & Git Repos"
                color="from-orange-600 to-red-600"
              />
              <TechCard 
                icon={<SiGrafana />} 
                label="Grafana" 
                description="Dashboards & Visualizations"
                color="from-orange-500 to-yellow-500"
              />
              <TechCard 
                icon={<SiDocker />} 
                label="Docker" 
                description="Container Platform"
                color="from-blue-500 to-cyan-500"
              />
              <TechCard 
                icon={<SiTerraform />} 
                label="Terraform" 
                description="Infrastructure as Code"
                color="from-purple-500 to-indigo-600"
              />
            </div>

            {/* Additional Tools */}
            <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Dodatkowe Narzędzia
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ToolBadge name="Wazuh SIEM" emoji="🛡️" />
                <ToolBadge name="Prometheus" emoji="📊" />
                <ToolBadge name="Ansible" emoji="⚙️" />
                <ToolBadge name="Semaphore UI" emoji="🎯" />
                <ToolBadge name="Zabbix" emoji="📈" />
                <ToolBadge name="Trivy" emoji="🔍" />
                <ToolBadge name="DefectDojo" emoji="🔐" />
                <ToolBadge name="Harbor" emoji="🚢" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function TechCard({ 
  icon, 
  label, 
  description,
  color 
}: { 
  icon: React.ReactNode; 
  label: string; 
  description: string;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 text-center"
    >
      <div className={`text-5xl mb-4 flex justify-center bg-gradient-to-br ${color} text-white w-20 h-20 rounded-2xl items-center mx-auto`}>
        {icon}
      </div>
      <div className="font-bold text-lg text-gray-900 dark:text-white mb-2">{label}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{description}</div>
    </motion.div>
  );
}

function ToolBadge({ name, emoji }: { name: string; emoji: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 text-center transition-all hover:shadow-md"
    >
      <div className="text-3xl mb-2">{emoji}</div>
      <div className="text-sm font-semibold text-gray-900 dark:text-white">{name}</div>
    </motion.div>
  );
}