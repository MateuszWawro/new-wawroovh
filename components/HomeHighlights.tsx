'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCode, FiServer, FiShield, FiTrendingUp } from 'react-icons/fi';

export default function HomeHighlights() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Portfolio w liczbach
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Doświadczenie i realizacje
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="5+" label="Lat doświadczenia" delay={0.1} />
            <StatCard number="30+" label="Technologii" delay={0.2} />
            <StatCard number="8" label="Projektów" delay={0.3} />
            <StatCard number="3" label="Usługi 24/7" delay={0.4} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Co robię?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Specjalizacje i obszary działania
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon={<FiCode />} title="CI/CD Automation" description="GitLab CI/CD, GitHub Actions, automatyzacja deploymentów i testów" color="from-blue-500 to-cyan-500" delay={0.1} />
            <ServiceCard icon={<FiServer />} title="Infrastructure as Code" description="Terraform, Ansible, Proxmox" color="from-purple-500 to-indigo-500" delay={0.2} />
            <ServiceCard icon={<FiShield />} title="Security & Monitoring" description="Wazuh, Trivy, DefectDojo" color="from-red-500 to-pink-500" delay={0.3} />
            <ServiceCard icon={<FiTrendingUp />} title="Observability" description="Prometheus, Grafana, Zabbix" color="from-green-500 to-emerald-500" delay={0.4} />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/projects">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
              Zobacz projekty
              <FiArrowRight />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function StatCard({ number, label, delay }: { number: string; label: string; delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay }} whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
      <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">{number}</div>
      <div className="text-gray-600 dark:text-gray-300 font-medium">{label}</div>
    </motion.div>
  );
}

function ServiceCard({ icon, title, description, color, delay }: { icon: React.ReactNode; title: string; description: string; color: string; delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay }} whileHover={{ y: -8 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8">
      <div className={`text-4xl bg-gradient-to-br ${color} text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}
