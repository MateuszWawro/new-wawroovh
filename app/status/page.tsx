'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiServer, FiShield, FiMonitor, FiTool, FiRefreshCw, FiCpu } from 'react-icons/fi';

interface Service {
  name: string;
  url: string;
  category: string;
  status: 'online' | 'offline';
  checkedAt: string;
}

interface StatusData {
  services: Service[];
  lastCheck: string;
}

const categoryIcons: Record<string, React.ReactNode> = {
  DevOps: <FiServer />,
  Infrastructure: <FiServer />,
  Monitoring: <FiMonitor />,
  Security: <FiShield />,
  Collaboration: <FiTool />,
  Testowe: <FiTool />,
  Produkcja: <FiCpu />,
};

const categoryColors: Record<string, string> = {
  DevOps: 'from-blue-500 to-cyan-500',
  Infrastructure: 'from-purple-500 to-indigo-500',
  Monitoring: 'from-green-500 to-emerald-500',
  Security: 'from-red-500 to-pink-500',
  Collaboration: 'from-orange-500 to-yellow-500',
  Testowe: 'from-gray-500 to-slate-500',
  Produkcja: 'from-pink-500 to-red-500',
};

export default function StatusPage() {
  const [statusData, setStatusData] = useState<StatusData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchStatus = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/status');
      const data = await response.json();
      setStatusData(data);
    } catch (error) {
      console.error('Failed to fetch status:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const groupedServices = statusData?.services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  const onlineCount = statusData?.services.filter((s) => s.status === 'online').length || 0;
  const totalCount = statusData?.services.length || 0;

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Homelab Status
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Status usług w moim homelab
            </p>

            {/* Overall Status Card */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold shadow-lg ${
                  onlineCount === totalCount
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                    : onlineCount > 0
                    ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                    : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                }`}
              >
                <span className={`w-4 h-4 rounded-full ${
                  onlineCount === totalCount
                    ? 'bg-green-500 animate-pulse'
                    : onlineCount > 0
                    ? 'bg-yellow-500 animate-pulse'
                    : 'bg-red-500 animate-pulse'
                }`} />
                <span className="text-sm md:text-base">
                  {onlineCount === totalCount
                    ? 'Wszystkie systemy działają'
                    : `${onlineCount}/${totalCount} systemów online`}
                </span>
              </motion.div>

              <motion.button
                onClick={fetchStatus}
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold disabled:opacity-50 flex items-center gap-2 shadow-lg transition-all"
              >
                <FiRefreshCw className={loading ? 'animate-spin' : ''} size={18} />
                <span className="text-sm md:text-base">Odśwież</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Services by Category */}
          {loading && !statusData ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">Sprawdzanie statusu...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedServices &&
                Object.entries(groupedServices).map(([category, services], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <div className={`text-2xl bg-gradient-to-r ${categoryColors[category]} text-white p-3 rounded-xl`}>
                        {categoryIcons[category]}
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        {category}
                      </h2>
                    </div>

                    {/* Services List */}
                    <div className="space-y-4">
                      {services.map((service, serviceIndex) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + serviceIndex * 0.05 }}
                          whileHover={{ x: 5 }}
                          className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 transition-all hover:shadow-md"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                              {service.name}
                            </h3>
                            
                            {/* Status Badge */}
                            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
                                service.status === 'online'
                                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                                  : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                              }`}>
                              <span className={`w-2 h-2 rounded-full ${
                                  service.status === 'online' ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                                }`} />
                              {service.status === 'online' ? 'Online' : 'Offline'}
                            </div>
                          </div>
                          
                          <a 
                            href={service.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline block truncate"
                          >
                            {service.url.replace('https://', '')}
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}