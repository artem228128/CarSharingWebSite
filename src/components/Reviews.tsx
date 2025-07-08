import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const Reviews: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: 'Олексій М.',
      rating: 5,
      text: 'Зручніше ніж таксі! Машина завжди під боком. Особливо подобається, що можна відкрити авто телефоном.',
      avatar: '👨‍💼',
      location: 'Київ'
    },
    {
      name: 'Марія К.',
      rating: 5,
      text: 'Крутий парк авто, люблю кататись на ID.3! Електрокар дуже тихий та економний.',
      avatar: '👩‍💻',
      location: 'Львів'
    },
    {
      name: 'Дмитро П.',
      rating: 5,
      text: 'Реально дешевше, ніж володіти власним авто. Плачу тільки за те, що використовую.',
      avatar: '👨‍🎓',
      location: 'Одеса'
    },
    {
      name: 'Анна В.',
      rating: 5,
      text: 'Швидка реєстрація, зручний додаток. Тепер не уявляю життя без CardDrive!',
      avatar: '👩‍🎨',
      location: 'Харків'
    },
    {
      name: 'Ігор Т.',
      rating: 5,
      text: 'Підтримка працює 24/7, завжди допоможуть. Авто завжди чисті та справні.',
      avatar: '👨‍🔧',
      location: 'Дніпро'
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-graphite relative overflow-hidden">
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
            Що кажуть{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">
              клієнти
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Реальні відгуки від наших користувачів
          </p>
        </motion.div>

        {/* Reviews carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentReview * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 text-center max-w-2xl mx-auto"
                  >
                    {/* Avatar */}
                    <div className="text-6xl mb-4">{review.avatar}</div>
                    
                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-xl mx-1" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                      "{review.text}"
                    </p>

                    {/* Author info */}
                    <div className="text-center">
                      <div className="text-white font-semibold text-lg">{review.name}</div>
                      <div className="text-gray-400 text-sm">{review.location}</div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800/70 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 hover:scale-110"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800/70 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 hover:scale-110"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        {/* Review indicators */}
        <div className="flex justify-center space-x-2 mb-16">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview ? 'bg-neon-green' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-neon-green mb-2">4.9</div>
            <div className="text-gray-300">Рейтинг в App Store</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-electric-blue mb-2">10K+</div>
            <div className="text-gray-300">Відгуків</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
            <div className="text-gray-300">Задоволених клієнтів</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">50K+</div>
            <div className="text-gray-300">Активних користувачів</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews; 