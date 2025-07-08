import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaShieldAlt, FaUnlock, FaGlobe, FaMoneyBillWave, FaBolt } from 'react-icons/fa';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: FaCar,
      title: 'Нові авто',
      description: 'Автомобілі не старше 2 років',
      color: 'from-neon-green to-green-400'
    },
    {
      icon: FaShieldAlt,
      title: 'Страхування включено',
      description: 'Повне покриття КАСКО та ОСАГО',
      color: 'from-electric-blue to-blue-400'
    },
    {
      icon: FaUnlock,
      title: 'Відкривай авто телефоном',
      description: 'Без ключів та документів',
      color: 'from-purple-500 to-pink-400'
    },
    {
      icon: FaGlobe,
      title: '24/7 по всьому місту',
      description: 'Доступно у будь-який час',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: FaMoneyBillWave,
      title: 'Без застав і абонплат',
      description: 'Плати тільки за використання',
      color: 'from-red-400 to-pink-400'
    },
    {
      icon: FaBolt,
      title: 'Електрокари в парку',
      description: 'Екологічно та економно',
      color: 'from-green-400 to-teal-400'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-graphite relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-electric-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
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
            Чому{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">
              CardDrive
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Всі переваги сучасного каршерингу в одному сервісі
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-gray-800/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="text-2xl text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-neon-green transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-neon-green/10 to-electric-blue/10 backdrop-blur-sm rounded-2xl p-8 border border-neon-green/20">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Переконайся сам!
            </h3>
            <p className="text-gray-300 mb-6">
              Спробуй CardDrive вже сьогодні та отримай знижку 50% на першу поїздку
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-neon-green text-graphite px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neon-green/90 transition-all duration-300 shadow-lg hover:shadow-neon-green/25"
            >
              Отримати знижку
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits; 