import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-scroll';

interface HeaderProps {
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    { name: 'Expertise', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper-50 dark:bg-ink-950 shadow-lg' : 'bg-transparent'
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
              href="#hero"
              smooth={true}
              duration={500}
              className="text-lg md:text-xl font-semibold cursor-pointer text-slate-900 dark:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            >
              Pratik Mehta
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <motion.nav
            className="hidden lg:flex space-x-5 xl:space-x-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                href={`#${item.to}`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="
                  text-sm font-medium cursor-pointer transition-colors duration-300
                  text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white
                  relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0
                  after:transition-all after:duration-300 hover:after:w-full
                  after:bg-accent-500 dark:after:bg-accent-400
                  rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500
                "
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>

          <div className="flex items-center">
            <motion.button
              className="p-2 rounded-full text-slate-600 hover:bg-slate-200 dark:text-yellow-400 dark:hover:bg-ink-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Sun size={20} className="hidden dark:block" />
              <Moon size={20} className="block dark:hidden" />
            </motion.button>

            <motion.button
              className={`lg:hidden ml-3 p-2 rounded-md text-slate-700 hover:bg-slate-200 dark:text-white dark:hover:bg-ink-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
                isMenuOpen ? 'invisible' : ''
              }`}
              onClick={toggleMenu}
              aria-label="Open menu"
              aria-hidden={isMenuOpen}
              tabIndex={isMenuOpen ? -1 : 0}
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
            className="fixed inset-0 z-40 bg-paper-50 dark:bg-ink-950"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-end p-4">
              <button
                className="p-2 rounded-md text-slate-700 hover:bg-slate-200 dark:text-white dark:hover:bg-ink-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 h-[calc(100%-72px)] overflow-y-auto py-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    href={`#${item.to}`}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') toggleMenu();
                    }}
                    className="text-xl font-medium cursor-pointer text-slate-900 dark:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
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
