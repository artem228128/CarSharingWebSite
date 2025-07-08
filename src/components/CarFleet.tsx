import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaLeaf, FaCity, FaStar } from 'react-icons/fa';

const CarFleet: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cars = [
    {
      name: 'Volkswagen ID.3',
      price: '5.5 грн/хв',
      mileage: '450 км',
      category: 'ECO',
      type: 'electric',
      image: '🚗', // В реальному проекті це буде URL зображення
      features: ['Електричний', 'Швидка зарядка', 'Просторий салон']
    },
    {
      name: 'Renault Zoe',
      price: '4.5 грн/хв',
      mileage: '390 км',
      category: 'ECO',
      type: 'electric',
      image: '🚙',
      features: ['Електричний', 'Компактний', 'Економічний']
    },
    {
      name: 'Toyota Yaris Hybrid',
      price: '6.0 грн/хв',
      mileage: '1000 км',
      category: 'City',
      type: 'hybrid',
      image: '🚐',
      features: ['Гібрид', 'Надійний', 'Економічний']
    },
    {
      name: 'Tesla Model 3',
      price: '8.0 грн/хв',
      mileage: '560 км',
      category: 'Comfort',
      type: 'electric',
      image: '🏎️',
      features: ['Преміум', 'Автопілот', 'Швидкий']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ECO':
        return <FaLeaf className="text-green-400" />;
      case 'City':
        return <FaCity className="text-blue-400" />;
      case 'Comfort':
        return <FaStar className="text-yellow-400" />;
      default:
        return <FaCity className="text-blue-400" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ECO':
        return 'from-green-400 to-emerald-400';
      case 'City':
        return 'from-blue-400 to-cyan-400';
      case 'Comfort':
        return 'from-yellow-400 to-orange-400';
      default:
        return 'from-blue-400 to-cyan-400';
    }
  };

  return (
    <section className="py-20 bg-graphite relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-electric-blue/5 rounded-full blur-3xl"></div>
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
            Наш{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">
              автопарк
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Сучасні автомобілі на будь-який смак та бюджет
          </p>
        </motion.div>

        {/* Car slider */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cars.map((car, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 mx-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Car image */}
                      <div className="text-center">
                        <div className="text-9xl mb-4 animate-float">{car.image}</div>
                        <div className="flex justify-center space-x-4">
                          {car.features.map((feature, i) => (
                            <span key={i} className="bg-gray-700/50 px-3 py-1 rounded-full text-sm text-gray-300">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Car details */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getCategoryColor(car.category)} flex items-center justify-center`}>
                            {getCategoryIcon(car.category)}
                          </div>
                          <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                            {car.category}
                          </span>
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-2">{car.name}</h3>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-700/30 rounded-xl p-4">
                            <div className="text-sm text-gray-400 mb-1">Вартість</div>
                            <div className="text-2xl font-bold text-neon-green">{car.price}</div>
                          </div>
                          <div className="bg-gray-700/30 rounded-xl p-4">
                            <div className="text-sm text-gray-400 mb-1">Пробіг</div>
                            <div className="text-2xl font-bold text-electric-blue">{car.mileage}</div>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-neon-green text-graphite py-4 rounded-xl font-semibold text-lg hover:bg-neon-green/90 transition-all duration-300 shadow-lg hover:shadow-neon-green/25"
                        >
                          Обрати це авто
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800/70 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 hover:scale-110"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800/70 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 hover:scale-110"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        {/* Car indicators */}
        <div className="flex justify-center space-x-2 mb-16">
          {cars.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-neon-green' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-neon-green mb-2">150+</div>
            <div className="text-gray-300">Авто в парку</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-electric-blue mb-2">24/7</div>
            <div className="text-gray-300">Доступність</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
            <div className="text-gray-300">Електричних</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2023</div>
            <div className="text-gray-300">Середній рік</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarFleet; 