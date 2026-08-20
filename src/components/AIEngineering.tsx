import React from 'react';
import { skills, experiences } from '../data/resume';
import { Reveal, RevealItem } from './shared/Reveal';

const aiSkills = skills.find((group) => group.category === 'AI & Agents')?.items ?? [];
const mcpHighlight = experiences[0].description[2];

const AIEngineering: React.FC = () => {
  return (
    <section
      id="ai-engineering"
      className="py-28 md:py-40 bg-paper-100 dark:bg-ink-900 text-slate-900 dark:text-white border-t border-slate-200/70 dark:border-ink-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl mx-auto">
          <RevealItem className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
              AI-Enabled Development
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Agentic Engineering, Shipped in Production
            </h2>
          </RevealItem>

          <RevealItem className="rounded-2xl border border-accent-500/20 bg-accent-500/5 p-8 md:p-10 mb-10">
            <p className="text-xl md:text-2xl font-display leading-snug text-slate-900 dark:text-white">
              &ldquo;{mcpHighlight}&rdquo;
            </p>
          </RevealItem>

          <RevealItem className="flex flex-wrap justify-center gap-3">
            {aiSkills.map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-sm font-medium rounded-full border border-slate-200 dark:border-ink-700 text-slate-700 dark:text-slate-300"
              >
                {item}
              </span>
            ))}
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
};

export default AIEngineering;
