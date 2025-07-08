import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaFacebook, FaApple, FaGooglePlay, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Продукт',
      links: [
        { name: 'Як це працює', href: '#how-it-works' },
        { name: 'Автопарк', href: '#fleet' },
        { name: 'Тарифи', href: '#pricing' },
        { name: 'Карта авто', href: '#map' }
      ]
    },
    {
      title: 'Компанія',
      links: [
        { name: 'Про нас', href: '#about' },
        { name: 'Вакансії', href: '#careers' },
        { name: 'Блог', href: '#blog' },
        { name: 'Новини', href: '#news' }
      ]
    },
    {
      title: 'Підтримка',
      links: [
        { name: 'Служба підтримки', href: '#support' },
        { name: 'Часті питання', href: '#faq' },
        { name: 'Інструкції', href: '#guides' },
        { name: 'Контакти', href: '#contact' }
      ]
    },
    {
      title: 'Правові',
      links: [
        { name: 'Політика конфіденційності', href: '#privacy' },
        { name: 'Умови використання', href: '#terms' },
        { name: 'Угода користувача', href: '#agreement' },
        { name: 'Cookies', href: '#cookies' }
      ]
    }
  ];

  const socialMedia = [
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://instagram.com/carddrive',
      color: 'hover:text-pink-400'
    },
    {
      name: 'TikTok',
      icon: FaTiktok,
      href: 'https://tiktok.com/@carddrive',
      color: 'hover:text-gray-900'
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      href: 'https://facebook.com/carddrive',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <footer className="bg-graphite border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Card<span className="text-neon-green">Drive</span>
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Сучасний каршеринг-сервіс для активних міських мешканців. 
                Керуй авто як смартфоном — легко, швидко, зручно.
              </p>
              
              {/* Download buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-white transition-colors duration-200"
                >
                  <FaApple className="text-xl" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Завантажити в</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-white transition-colors duration-200"
                >
                  <FaGooglePlay className="text-xl" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Завантажити в</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-neon-green transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Служба підтримки</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-neon-green" />
                  <span className="text-gray-300">+38 (050) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-neon-green" />
                  <span className="text-gray-300">support@carddrive.ua</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Слідкуйте за нами</h4>
              <div className="flex gap-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  >
                    <social.icon className="text-2xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 CardDrive. Усі права захищені.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-gray-400 hover:text-neon-green transition-colors duration-200 text-sm">
                Політика конфіденційності
              </a>
              <a href="#terms" className="text-gray-400 hover:text-neon-green transition-colors duration-200 text-sm">
                Умови використання
              </a>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">Сервіс працює</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 