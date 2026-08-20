import React from 'react';
import { education } from '../data/resume';
import { GraduationCap } from 'lucide-react';
import { Reveal, RevealItem } from './shared/Reveal';
import MotionCard from './shared/MotionCard';

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-28 md:py-40 bg-paper-50 dark:bg-ink-950 text-slate-900 dark:text-white border-t border-slate-200/70 dark:border-ink-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl mx-auto">
          <RevealItem className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
              Background
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">Education</h2>
          </RevealItem>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <RevealItem key={index}>
                <MotionCard className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 rounded-xl border border-slate-200 dark:border-ink-700 hover:border-accent-500/40 dark:hover:border-accent-400/40 hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/20 transition-[border-color,box-shadow] duration-300">
                  <div className="p-4 rounded-full bg-blue-100 text-blue-600 dark:bg-accent-500/10 dark:text-accent-400">
                    <GraduationCap size={32} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-lg text-accent-500 dark:text-accent-400">{edu.school}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{edu.period}</p>
                  </div>
                </MotionCard>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Education;
