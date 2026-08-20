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
        <Reveal className="max-w-4xl mx-auto">
          <RevealItem className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
              Career
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">Work Experience</h2>
          </RevealItem>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-accent-500/30"
            ></div>

            {experiences.map((exp, index) => (
              <RevealItem
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 ml-12 md:ml-auto'
                } md:w-1/2`}
              >
                <div
                  className={`
                    absolute w-8 h-8 rounded-full flex items-center justify-center text-white
                    ${index % 2 === 0 ? 'left-0 md:right-0 md:left-auto md:-mr-4' : 'left-0 -ml-4'}
                    bg-accent-500
                  `}
                >
                  <Briefcase size={16} />
                </div>

                <div
                  className={`
                    p-6 rounded-xl border
                    ${exp.highlight ? 'border-accent-500/40' : 'border-slate-200 dark:border-ink-700'}
                    ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}
                  `}
                >
                  <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
                  <div className="font-medium mb-1 text-accent-500 dark:text-accent-400">{exp.company}</div>
                  <div className="text-sm mb-4 text-slate-500 dark:text-slate-400">
                    {exp.period}
                    {exp.location ? ` · ${exp.location}` : ''}
                  </div>

                  {exp.metrics && exp.metrics.length > 0 && (
                    <div
                      className={`flex flex-wrap gap-2 mb-4 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
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

                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 min-w-4">•</span>
                        <span className="text-left">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
