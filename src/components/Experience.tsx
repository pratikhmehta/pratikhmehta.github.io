import React from 'react';
import { experiences } from '../data/resume';
import { Briefcase } from 'lucide-react';
import { Reveal, RevealItem } from './shared/Reveal';

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-28 md:py-40 bg-paper-50 dark:bg-ink-950 text-slate-900 dark:text-white border-t border-slate-200/70 dark:border-ink-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mx-auto">
          <RevealItem className="text-center mb-20">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
              Career
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">Work Experience</h2>
          </RevealItem>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-5 md:left-6 top-2 bottom-2 w-px bg-slate-200 dark:bg-ink-700"
            />

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <RevealItem key={index} className="relative pl-14 md:pl-16">
                  <div
                    className={`absolute left-0 top-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${
                      exp.highlight
                        ? 'bg-accent-500 text-white'
                        : 'bg-white dark:bg-ink-900 border border-slate-200 dark:border-ink-700 text-accent-500 dark:text-accent-400'
                    }`}
                  >
                    <Briefcase size={18} />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400 md:text-right whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-baseline gap-x-2 mb-5 text-sm">
                    <span className="font-medium text-accent-500 dark:text-accent-400">{exp.company}</span>
                    {exp.location && (
                      <span className="text-slate-500 dark:text-slate-400">· {exp.location}</span>
                    )}
                  </div>

                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {exp.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-3 mt-2 w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
