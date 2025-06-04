import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { contactInfo } from '../data/resume';
import { ArrowDown, Mail } from 'lucide-react';
import profileImg from '../assets/img/profile.jpeg';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span>Hi, I'm</span>
              <br />
              <span className={`${darkMode ? 'text-purple-400' : 'text-blue-600'}`}>
                Pratik Mehta
              </span>
            </motion.h1>

            <motion.h2
              className={`text-2xl sm:text-3xl font-semibold mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Tech Lead & Magento Expert
            </motion.h2>

            <motion.p
              className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Specialized in delivering exceptional e-commerce solutions with Magento and modern web technologies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className={`
                  px-8 py-3 text-lg font-medium rounded-full
                  flex items-center justify-center gap-2
                  transition-all duration-300
                  ${darkMode 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }
                `}
              >
                <Mail size={18} />
                Contact Me
              </Link>
              <a 
                href={`mailto:${contactInfo.email}`}
                className={`
                  px-8 py-3 text-lg font-medium rounded-full
                  flex items-center justify-center gap-2
                  transition-all duration-300
                  ${darkMode 
                    ? 'border-2 border-purple-600 text-purple-400 hover:bg-purple-900/30' 
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                  }
                `}
              >
                My Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative">
              {/* Abstract decorative background */}
              <div
                className={`absolute -top-16 -right-16 w-72 h-72 rounded-full ${
                  darkMode ? 'bg-purple-900/30' : 'bg-blue-100'
                }`}
              ></div>
              <div
                className={`absolute -bottom-12 -left-12 w-60 h-60 rounded-full ${
                  darkMode ? 'bg-indigo-900/30' : 'bg-blue-50'
                }`}
              ></div>
              
              {/* Profile image */}
              <div
                className={`
                  relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden
                  flex items-center justify-center z-10
                  ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}
                  border-8 ${darkMode ? 'border-gray-700' : 'border-white'}
                  shadow-xl
                `}
              >
                <img 
                  src={profileImg}
                  alt="Pratik Mehta"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer"
          >
            <ArrowDown size={32} className={darkMode ? "text-gray-400" : "text-gray-600"} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;