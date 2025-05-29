import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-10 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-center md:text-left">
              © {currentYear} Pratik Mehta. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer inline-block"
            >
              <motion.div
                className={`
                  p-3 rounded-full
                  ${darkMode ? 'bg-gray-700 text-purple-400 hover:bg-gray-600' : 'bg-gray-200 text-blue-600 hover:bg-gray-300'}
                `}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUp size={20} />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;