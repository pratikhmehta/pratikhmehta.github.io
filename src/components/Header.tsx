import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-scroll';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-gray-900 shadow-lg'
            : 'bg-white shadow-lg'
          : darkMode
          ? 'bg-transparent'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="hero" 
              smooth={true} 
              duration={500} 
              className={`text-xl md:text-2xl font-bold cursor-pointer ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Pratik Mehta
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <motion.nav 
            className="hidden md:flex space-x-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`
                  text-base font-medium cursor-pointer transition-colors duration-300
                  ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}
                  relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                  after:transition-all after:duration-300 hover:after:w-full
                  ${darkMode ? 'after:bg-purple-500' : 'after:bg-blue-600'}
                `}
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>

          <div className="flex items-center">
            <motion.button
              className={`p-2 rounded-full ${darkMode ? 'text-yellow-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-200'}`}
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              className={`md:hidden ml-3 p-2 rounded-md ${
                darkMode ? 'text-white hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`fixed inset-0 z-40 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-end p-4">
              <button
                className={`p-2 rounded-md ${
                  darkMode ? 'text-white hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-200'
                }`}
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`text-xl font-medium cursor-pointer ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;