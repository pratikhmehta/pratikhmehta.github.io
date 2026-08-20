import React from 'react';
import { projects } from '../data/resume';
import { ExternalLink } from 'lucide-react';
import { Reveal, RevealItem } from './shared/Reveal';
import MotionCard from './shared/MotionCard';

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-28 md:py-40 bg-paper-100 dark:bg-ink-900 text-slate-900 dark:text-white border-t border-slate-200/70 dark:border-ink-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-6xl mx-auto">
          <RevealItem className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">Featured Enterprise Projects</h2>
          </RevealItem>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <RevealItem key={index}>
                <MotionCard className="h-full rounded-xl overflow-hidden border border-slate-200 dark:border-ink-700 hover:border-accent-500/40 dark:hover:border-accent-400/40 hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/20 transition-[border-color,box-shadow] duration-300 bg-white dark:bg-ink-900">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded-full text-accent-500 dark:text-accent-400 hover:text-accent-600 dark:hover:text-accent-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                          aria-label={`Visit ${project.title}`}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>

                    <p className="text-sm mb-4 text-accent-500 dark:text-accent-400">{project.subtitle}</p>

                    <ul className="mb-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      {project.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-ink-700 flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs font-medium rounded-full border border-slate-200 dark:border-ink-700 text-slate-700 dark:text-slate-300 transition-colors duration-300 hover:border-accent-500/50 hover:text-accent-600 dark:hover:text-accent-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Projects;
