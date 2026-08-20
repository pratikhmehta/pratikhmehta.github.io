import React from 'react';
import { skills } from '../data/resume';
import { Reveal, RevealItem } from './shared/Reveal';

const generalSkills = skills.filter(
  (group) => group.category !== 'eCommerce' && group.category !== 'AI & Agents'
);

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-28 md:py-40 bg-paper-100 dark:bg-ink-900 text-slate-900 dark:text-white border-t border-slate-200/70 dark:border-ink-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-5xl mx-auto">
          <RevealItem className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">Technical Expertise</h2>
          </RevealItem>

          <div className="grid md:grid-cols-2 gap-8">
            {generalSkills.map((group) => (
              <RevealItem key={group.category}>
                <h3 className="text-lg font-semibold mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm font-medium rounded-full border border-slate-200 dark:border-ink-700 text-slate-700 dark:text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/50 hover:text-accent-600 dark:hover:text-accent-300 hover:shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
