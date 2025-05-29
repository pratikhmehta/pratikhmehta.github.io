import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '../data/resume';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
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
      id="education"
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
              Education
            </h2>
            <div className={`h-1 w-20 mx-auto rounded-full ${darkMode ? 'bg-purple-500' : 'bg-blue-600'}`}></div>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  flex flex-col md:flex-row items-start md:items-center gap-4
                  p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg
                `}
              >
                <div className={`
                  p-4 rounded-full 
                  ${darkMode ? 'bg-purple-900/50 text-purple-400' : 'bg-blue-100 text-blue-600'}
                `}>
                  <GraduationCap size={32} />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className={`text-lg ${darkMode ? 'text-purple-400' : 'text-blue-600'}`}>{edu.school}</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{edu.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;