import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-paper-100 text-slate-700 dark:bg-ink-900 dark:text-slate-300 border-t border-slate-200/70 dark:border-ink-800">
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
              href="#hero"
              smooth={true}
              duration={500}
              className="cursor-pointer inline-block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              aria-label="Scroll to top"
            >
              <motion.div
                className="p-3 rounded-full bg-slate-200 text-blue-600 hover:bg-slate-300 dark:bg-ink-800 dark:text-accent-400 dark:hover:bg-ink-700"
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
