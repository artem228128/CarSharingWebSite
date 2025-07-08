import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCar, FaStar, FaCrown } from 'react-icons/fa';

const Pricing: React.FC = () => {
  const tariffs = [
    {
      name: 'City',
      price: '4.5',
      description: 'Для щоденних поїздок по місту',
      icon: FaCar,
      color: 'from-blue-400 to-cyan-400',
      features: [
        'Компактні авто',
        'Економна витрата палива',
        'Ідеально для коротких поїздок',
        'Базове страхування'
      ]
    },
    {
      name: 'Comfort',
      price: '6.0',
      description: 'Комфортні поїздки з додатковими опціями',
      icon: FaStar,
      color: 'from-purple-400 to-pink-400',
      popular: true,
      features: [
        'Авто вищого класу',
        'Кондиціонер',
        'Підігрів сидінь',
        'Розширене страхування'
      ]
    },
    {
      name: 'Premium',
      price: '8.0',
      description: 'Преміум авто для особливих випадків',
      icon: FaCrown,
      color: 'from-yellow-400 to-orange-400',
      features: [
        'Tesla та преміум авто',
        'Автопілот',
        'Швидке заряджання',
        'Повне страхування'
      ]
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
            Наші{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">
              тарифи
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Обирай тариф, що підходить саме тобі
          </p>
        </motion.div>

        {/* Tariff cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tariffs.map((tariff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-gray-800/50 transition-all duration-300 hover:transform hover:scale-105 ${
                tariff.popular ? 'ring-2 ring-neon-green' : ''
              }`}
            >
              {tariff.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-neon-green text-graphite px-4 py-1 rounded-full text-sm font-semibold">
                    Популярний
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tariff.color} flex items-center justify-center`}>
                  <tariff.icon className="text-2xl text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2">{tariff.name}</h3>
              <p className="text-gray-300 mb-6">{tariff.description}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-neon-green">{tariff.price}</span>
                  <span className="text-gray-300 ml-2">грн/хв</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {tariff.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-left">
                    <FaCheck className="text-neon-green mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg ${
                  tariff.popular
                    ? 'bg-neon-green text-graphite hover:bg-neon-green/90 hover:shadow-neon-green/25'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Обрати тариф
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Що включено в усі тарифи:</h3>
              <div className="space-y-2">
                {[
                  'Страхування КАСКО та ОСАГО',
                  'Заправка/зарядка включена',
                  'Мийка авто',
                  'Технічна підтримка 24/7',
                  'Мобільний додаток'
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <FaCheck className="text-neon-green mr-3" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Денний кеп:</h3>
              <p className="text-gray-300 mb-4">
                Максимальна вартість за день — 1400 грн. Користуйся авто цілий день за фіксованою ціною!
              </p>
              <div className="bg-neon-green/10 border border-neon-green/20 rounded-xl p-4">
                <div className="text-neon-green font-semibold">💡 Корисно знати:</div>
                <div className="text-gray-300 text-sm mt-1">
                  При досягненні денного кепу подальші хвилини безкоштовні
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 