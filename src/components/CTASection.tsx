import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay, FaMapMarkerAlt } from 'react-icons/fa';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-graphite relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-electric-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Готовий сісти за кермо{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">
                вже зараз?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Завантажуй додаток та отримуй доступ до сотень авто по всьому місту
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            {/* Download buttons */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-4 bg-neon-green text-graphite px-8 py-5 rounded-xl font-semibold text-lg hover:bg-neon-green/90 transition-all duration-300 shadow-lg hover:shadow-neon-green/25 min-w-[200px]"
            >
              <FaApple className="text-3xl" />
              <div className="text-left">
                <div className="text-sm">Завантажити в</div>
                <div className="text-xl font-bold">App Store</div>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-4 bg-neon-green text-graphite px-8 py-5 rounded-xl font-semibold text-lg hover:bg-neon-green/90 transition-all duration-300 shadow-lg hover:shadow-neon-green/25 min-w-[200px]"
            >
              <FaGooglePlay className="text-3xl" />
              <div className="text-left">
                <div className="text-sm">Завантажити в</div>
                <div className="text-xl font-bold">Google Play</div>
              </div>
            </motion.button>

            {/* Map button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-transparent border-2 border-electric-blue text-electric-blue px-8 py-5 rounded-xl font-semibold text-lg hover:bg-electric-blue hover:text-graphite transition-all duration-300 min-w-[200px]"
            >
              <FaMapMarkerAlt className="text-2xl" />
              Карта автопарку
            </motion.button>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative max-w-md mx-auto">
              <div className="bg-gradient-to-r from-neon-green/20 to-electric-blue/20 rounded-3xl p-8 backdrop-blur-sm border border-neon-green/20">
                <div className="text-8xl mb-4 animate-float">📱</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Відкрий авто телефоном
                </h3>
                <p className="text-gray-300">
                  Просто наведи камеру на QR-код і починай їздити
                </p>
              </div>
            </div>
          </motion.div>

          {/* Benefits highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg font-semibold text-white mb-2">Швидка реєстрація</h4>
              <p className="text-gray-300 text-sm">Лише 5 хвилин — і ти готовий їздити</p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔐</div>
              <h4 className="text-lg font-semibold text-white mb-2">Безпека</h4>
              <p className="text-gray-300 text-sm">Всі авто застраховані та технічно справні</p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="text-lg font-semibold text-white mb-2">Вигідно</h4>
              <p className="text-gray-300 text-sm">Плати тільки за хвилини використання</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 