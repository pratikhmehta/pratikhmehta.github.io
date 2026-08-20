import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, Mail } from 'lucide-react';
import profileImg from '../assets/img/profile.jpeg';
import { achievements } from '../data/resume';

const heroStats = achievements.slice(0, 3);

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const circleOneY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 60]);
  const circleTwoY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -40]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-paper-50 dark:bg-ink-950 text-slate-900 dark:text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <motion.p
              className="text-sm font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Technical Lead · Adobe Commerce Architect · AI-Enabled Developer
            </motion.p>

            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Pratik Mehta
            </motion.h1>

            <motion.p
              className="text-lg mb-8 text-slate-600 dark:text-slate-400 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Architecting enterprise eCommerce platforms and shipping agentic AI workflows in production.
              Based in Pune, India — open to remote and relocation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                to="contact"
                href="#contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="px-8 py-3 text-base font-medium rounded-full flex items-center justify-center gap-2 transition-all duration-300 bg-accent-500 hover:bg-accent-600 text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-50 dark:focus-visible:ring-offset-ink-950"
              >
                <Mail size={18} />
                Contact Me
              </Link>
              <a
                href="/pratikmehta.pdf"
                download
                className="px-8 py-3 text-base font-medium rounded-full flex items-center justify-center gap-2 transition-all duration-300 border border-slate-300 dark:border-ink-700 text-slate-900 dark:text-white hover:border-accent-500 dark:hover:border-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-50 dark:focus-visible:ring-offset-ink-950"
              >
                My Resume
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-x-10 gap-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="min-w-[6rem]">
                  <div className="font-display text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                aria-hidden="true"
                style={{ y: circleOneY }}
                className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-blue-100 dark:bg-accent-500/10"
              />
              <motion.div
                aria-hidden="true"
                style={{ y: circleTwoY }}
                className="absolute -bottom-12 -left-12 w-60 h-60 rounded-full bg-blue-50 dark:bg-accent-600/10"
              />

              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden flex items-center justify-center z-10 bg-slate-100 dark:bg-ink-800 border-8 border-white dark:border-ink-700 shadow-xl">
                <img
                  src={profileImg}
                  alt="Pratik Mehta"
                  width={384}
                  height={384}
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
          transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        >
          <Link
            to="about"
            href="#about"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={32} className="text-slate-500 dark:text-slate-400" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
