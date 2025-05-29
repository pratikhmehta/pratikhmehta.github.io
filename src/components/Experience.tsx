import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../data/resume';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
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
      id="experience"
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
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
              Work Experience
            </h2>
            <div className={`h-1 w-20 mx-auto rounded-full ${darkMode ? 'bg-purple-500' : 'bg-blue-600'}`}></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div
              className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 ${
                darkMode ? 'bg-purple-500/30' : 'bg-blue-200'
              }`}
            ></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 ml-12 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div
                  className={`
                    absolute w-8 h-8 rounded-full flex items-center justify-center
                    ${index % 2 === 0 ? 'left-0 md:right-0 md:left-auto md:-mr-4' : 'left-0 -ml-4'}
                    ${darkMode ? 'bg-purple-500 text-white' : 'bg-blue-600 text-white'}
                  `}
                >
                  <Briefcase size={16} />
                </div>

                <div
                  className={`
                    p-6 rounded-lg shadow-lg
                    ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}
                    ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}
                  `}
                >
                  <h3 className="text-xl font-bold mb-2">{exp.position}</h3>
                  <div className={`font-medium mb-2 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`}>
                    {exp.company}
                  </div>
                  <div className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{exp.period}</div>
                  <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 min-w-4">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;