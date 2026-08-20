import React from 'react';
import { pocs } from '../data/resume';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, RevealItem } from './shared/Reveal';

const PersonalProjects: React.FC = () => {
  return (
    <section
      id="personal-projects"
      className="py-28 md:py-40 bg-paper-50 dark:bg-ink-950 text-slate-900 dark:text-white border-t border-slate-200/70 dark:border-ink-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-5xl mx-auto">
          <RevealItem className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
              Self-Initiated
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">Personal Projects &amp; POCs</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Independent builds outside client work — exploring product ideas end-to-end,
              from concept to a live deployment.
            </p>
          </RevealItem>

          <div className="grid md:grid-cols-2 gap-6">
            {pocs.map((poc) => (
              <RevealItem
                key={poc.title}
                className="rounded-xl border border-slate-200 dark:border-ink-700 p-6 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-xl font-semibold">{poc.title}</h3>
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                      poc.status === 'Live'
                        ? 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-300'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-800/30 dark:text-amber-300'
                    }`}
                  >
                    {poc.status === 'Live' ? 'Live' : 'Under Progress'}
                  </span>
                </div>

                <p className="text-sm mb-4 text-accent-500 dark:text-accent-400">{poc.tagline}</p>

                <p className="text-sm mb-5 flex-1 text-slate-600 dark:text-slate-300 leading-relaxed">
                  {poc.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {poc.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-ink-700 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={poc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent-500 dark:text-accent-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded self-start"
                >
                  Visit project
                  <ArrowUpRight size={16} />
                </a>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default PersonalProjects;
