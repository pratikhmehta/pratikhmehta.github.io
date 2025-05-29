import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { summary, contactInfo } from '../data/resume';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`}>
              About Me
            </h2>
            <div className={`h-1 w-20 mx-auto rounded-full ${darkMode ? 'bg-purple-500' : 'bg-blue-600'}`}></div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 space-y-6">
              {summary.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div className="md:w-1/2">
              <motion.div
                variants={itemVariants}
                className={`p-6 rounded-lg shadow-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                }`}
              >
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`}>
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className={`font-semibold mr-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email:
                    </span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className={`hover:underline ${darkMode ? 'text-purple-400' : 'text-blue-600'}`}
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className={`font-semibold mr-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Phone:
                    </span>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className={`hover:underline ${darkMode ? 'text-purple-400' : 'text-blue-600'}`}
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className={`font-semibold mr-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Website:
                    </span>
                    <a
                      href={`https://${contactInfo.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:underline ${darkMode ? 'text-purple-400' : 'text-blue-600'}`}
                    >
                      {contactInfo.website}
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`}>
                    Expertise
                  </h3>
                  <ul className={`list-disc pl-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>Magento 2 Custom Module Development</li>
                    <li>E-commerce Solution Architecture</li>
                    <li>API Development & Integration</li>
                    <li>Team Leadership & Project Management</li>
                    <li>Performance Optimization</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;