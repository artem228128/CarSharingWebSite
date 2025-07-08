import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { HiPlay } from 'react-icons/hi';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-graphite via-graphite to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-electric-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-green/5 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Керуй авто —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">
                як смартфоном
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 font-light">
              Відкрий. Сідай. Їдь.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 bg-neon-green text-graphite px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neon-green/90 transition-all duration-300 shadow-lg hover:shadow-neon-green/25"
              >
                <FaApple className="text-2xl" />
                <div className="text-left">
                  <div className="text-sm">Завантажити в</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 bg-neon-green text-graphite px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neon-green/90 transition-all duration-300 shadow-lg hover:shadow-neon-green/25"
              >
                <FaGooglePlay className="text-2xl" />
                <div className="text-left">
                  <div className="text-sm">Завантажити в</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </motion.button>
            </div>

            {/* Watch how it works button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-transparent border-2 border-neon-green text-neon-green px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neon-green hover:text-graphite transition-all duration-300"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <HiPlay className="text-2xl" />
              Дивитися, як це працює
            </motion.button>
          </motion.div>

          {/* Animated car illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="w-full h-32 bg-gradient-to-r from-neon-green/20 to-electric-blue/20 rounded-2xl blur-xl animate-pulse-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl animate-float">🚗</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-green rounded-full mt-2 animate-bounce"></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">Прокрути вниз</p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 