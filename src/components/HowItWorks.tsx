import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaIdCard, FaCar, FaCreditCard } from 'react-icons/fa';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Завантаж додаток',
      description: 'Скачай CardDrive з App Store або Google Play',
      icon: FaDownload,
      color: 'from-neon-green to-green-400'
    },
    {
      number: 2,
      title: 'Зареєструйся',
      description: 'Завантаж фото прав та зроби селфі',
      icon: FaIdCard,
      color: 'from-electric-blue to-blue-400'
    },
    {
      number: 3,
      title: 'Обери авто поблизу',
      description: 'Знайди найближчу машину на карті',
      icon: FaCar,
      color: 'from-purple-500 to-pink-400'
    },
    {
      number: 4,
      title: 'Керуй і плати',
      description: 'Плати лише за хвилини використання',
      icon: FaCreditCard,
      color: 'from-yellow-400 to-orange-400'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-graphite relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-neon-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Як це{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">
              працює
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Лише 4 простих кроки до твоєї першої поїздки
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-neon-green to-electric-blue transform -translate-y-1/2 z-0"></div>
              )}
              
              <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-gray-800/70 transition-all duration-300 group">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="text-2xl text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4 text-neon-green">
              Готовий розпочати?
            </h3>
            <p className="text-gray-300 mb-6">
              Вся процедура реєстрації займе не більше 5 хвилин
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-neon-green text-graphite px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neon-green/90 transition-all duration-300 shadow-lg hover:shadow-neon-green/25"
            >
              Завантажити додаток
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 