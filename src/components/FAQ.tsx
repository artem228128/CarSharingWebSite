import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Як підтвердити особу?',
      answer: 'Завантажте фото водійських прав та зробіть селфі в додатку. Наша система автоматично перевірить документи за кілька хвилин.'
    },
    {
      question: 'Що робити у випадку ДТП?',
      answer: 'Негайно зателефонуйте в службу підтримки CardDrive та викличте поліцію. Всі наші авто застраховані, тому ми допоможемо вам у вирішенні ситуації.'
    },
    {
      question: 'Чи можна їздити за місто?',
      answer: 'Так, ви можете їздити за межі міста в межах України. Тарифікація залишається стандартною — за хвилини використання.'
    },
    {
      question: 'Як завершити поїздку?',
      answer: 'Припаркуйте авто в дозволеному місці, перевірте, що всі вікна закриті, і натисніть "Завершити поїздку" в додатку. Авто автоматично заблокується.'
    },
    {
      question: 'Чи потрібно заправляти авто?',
      answer: 'Ні, заправка та зарядка електрокарів включена в тариф. Якщо рівень пального менше 25%, просто знайдіть найближчу заправку — карта для оплати в авто.'
    },
    {
      question: 'Який мінімальний вік для користування?',
      answer: '21 рік та стаж водіння не менше 2 років. Також потрібні дійсні водійські права України або міжнародні.'
    },
    {
      question: 'Що робити, якщо авто несправне?',
      answer: 'Зателефонуйте в службу підтримки через додаток. Ми відправимо технічну допомогу або надамо інше авто безкоштовно.'
    },
    {
      question: 'Чи можна бронювати авто заздалегідь?',
      answer: 'Так, ви можете забронювати авто на 15 хвилин безкоштовно. Після закінчення цього часу почне нараховуватися стандартний тариф.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-graphite relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-electric-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Часті{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">
              питання
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Відповіді на найпоширеніші запитання про CardDrive
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <FaChevronUp className="text-neon-green" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-neon-green/10 to-electric-blue/10 backdrop-blur-sm rounded-2xl p-8 border border-neon-green/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Не знайшли відповідь?
            </h3>
            <p className="text-gray-300 mb-6">
              Наша служба підтримки працює 24/7 і завжди готова допомогти
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neon-green text-graphite px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neon-green/90 transition-all duration-300 shadow-lg hover:shadow-neon-green/25"
              >
                Написати в чат
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-electric-blue text-electric-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-electric-blue hover:text-graphite transition-all duration-300"
              >
                Подзвонити
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 