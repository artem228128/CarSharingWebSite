import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaTelegram, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact: React.FC = () => {
  const contacts = [
    {
      icon: FaPhone,
      title: 'Телефон підтримки',
      info: '+38 (050) 123-45-67',
      subtitle: 'Безкоштовно по Україні',
      action: 'tel:+380501234567'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      info: 'support@carddrive.ua',
      subtitle: 'Відповідь до 1 години',
      action: 'mailto:support@carddrive.ua'
    },
    {
      icon: FaTelegram,
      title: 'Telegram-бот',
      info: '@CardDriveBot',
      subtitle: 'Миттєві відповіді',
      action: 'https://t.me/CardDriveBot'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Офіс у Києві',
      info: 'вул. Хрещатик, 10',
      subtitle: 'Пн-Пт: 9:00-18:00',
      action: 'https://maps.google.com'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-graphite relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-electric-blue/5 rounded-full blur-3xl"></div>
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
            Зв'язок{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">
              з нами
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Завжди готові допомогти та відповісти на ваші запитання
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => window.open(contact.action, '_blank')}
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-green to-electric-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="text-2xl text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">{contact.title}</h3>
                <p className="text-neon-green font-medium mb-1">{contact.info}</p>
                <p className="text-gray-400 text-sm">{contact.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Working hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <FaClock className="text-neon-green text-2xl mr-3" />
            <h3 className="text-2xl font-semibold text-white">Режим роботи</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Служба підтримки</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Телефон та чат:</span>
                  <span className="text-neon-green font-medium">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Email:</span>
                  <span className="text-electric-blue font-medium">До 1 години</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Офіс</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Понеділок - П'ятниця:</span>
                  <span className="text-white font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Вихідні:</span>
                  <span className="text-gray-400">Вихідний</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Наш офіс на карті</h3>
          <div className="bg-gray-700/30 rounded-xl h-64 flex items-center justify-center">
            <div className="text-center">
              <FaMapMarkerAlt className="text-4xl text-neon-green mb-4 mx-auto" />
              <p className="text-gray-300 mb-2">Київ, вул. Хрещатик, 10</p>
              <p className="text-gray-400 text-sm">Клікніть, щоб відкрити в Google Maps</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-neon-green text-graphite px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neon-green/90 transition-all duration-300 shadow-lg hover:shadow-neon-green/25"
            onClick={() => window.open('https://maps.google.com', '_blank')}
          >
            Відкрити в Google Maps
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 