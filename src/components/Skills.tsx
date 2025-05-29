import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills, toolsAndCertifications } from '../data/resume';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (percentage: number) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section
      id="skills"
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
              Skills & Technologies
            </h2>
            <div className={`h-1 w-20 mx-auto rounded-full ${darkMode ? 'bg-purple-500' : 'bg-blue-600'}`}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <motion.h3 
                variants={itemVariants} 
                className={`text-xl font-bold mb-6 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`}
              >
                Technical Skills
              </motion.h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="flex justify-between mb-1">
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{skill.name}</span>
                      <span className={`font-medium ${darkMode ? 'text-purple-400' : 'text-blue-600'}`}>
                        {skill.percentage}%
                      </span>
                    </div>
                    <div 
                      className={`h-2 rounded-full overflow-hidden ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}
                    >
                      <motion.div
                        className={`h-full rounded-full ${
                          darkMode 
                            ? 'bg-gradient-to-r from-purple-600 to-purple-400' 
                            : 'bg-gradient-to-r from-blue-600 to-blue-400'
                        }`}
                        variants={progressVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        custom={skill.percentage}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h3 
                variants={itemVariants} 
                className={`text-xl font-bold mb-6 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`}
              >
                Tools & Certifications
              </motion.h3>
              
              <motion.div 
                variants={itemVariants}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}
              >
                <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {toolsAndCertifications.map((tool, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center"
                      variants={itemVariants}
                      custom={index}
                    >
                      <div className={`mr-3 w-2 h-2 rounded-full ${darkMode ? 'bg-purple-400' : 'bg-blue-500'}`}></div>
                      <span>{tool}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.h3 
                variants={itemVariants} 
                className={`text-xl font-bold mt-8 mb-6 ${darkMode ? 'text-purple-400' : 'text-blue-600'}`}
              >
                Core Competencies
              </motion.h3>

              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-2"
              >
                {[
                  "Magento 2",
                  "Adobe Commerce",
                  "PHP",
                  "JavaScript",
                  "React",
                  "NodeJS",
                  "REST API",
                  "GraphQL",
                  "MySQL",
                  "Git",
                  "Docker",
                  "AWS",
                  "Agile",
                  "Team Leadership"
                ].map((tag, index) => (
                  <motion.span
                    key={index}
                    variants={itemVariants}
                    className={`
                      px-3 py-1 text-sm font-medium rounded-full
                      ${darkMode 
                        ? 'bg-purple-900/50 text-purple-200 border border-purple-700' 
                        : 'bg-blue-50 text-blue-800 border border-blue-200'
                      }
                    `}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;