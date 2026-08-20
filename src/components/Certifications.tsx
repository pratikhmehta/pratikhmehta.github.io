import React from 'react';
import { certifications } from '../data/resume';
import { Award, Clock, ExternalLink } from 'lucide-react';
import { Reveal, RevealItem } from './shared/Reveal';

const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-28 md:py-40 bg-paper-50 dark:bg-ink-950 text-slate-900 dark:text-white border-t border-slate-200/70 dark:border-ink-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-5xl mx-auto">
          <RevealItem className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
              Credentials
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">Certifications</h2>
          </RevealItem>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <RevealItem
                key={cert.name}
                className="p-6 rounded-xl border border-slate-200 dark:border-ink-700 flex flex-col"
              >
                <div className="p-3 rounded-full mb-4 self-start bg-blue-100 text-blue-600 dark:bg-accent-500/10 dark:text-accent-400">
                  {cert.status === 'Completed' ? <Award size={22} /> : <Clock size={22} />}
                </div>
                <h3 className="text-lg font-semibold mb-1">{cert.name}</h3>
                <p className="text-sm mb-3 text-accent-500 dark:text-accent-400">
                  {cert.issuer} · {cert.year}
                </p>
                <p className="text-sm mb-4 flex-1 text-slate-600 dark:text-slate-300">{cert.details}</p>
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      cert.status === 'Completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-300'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-800/30 dark:text-amber-300'
                    }`}
                  >
                    {cert.status}
                  </span>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent-500 dark:text-accent-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded"
                    >
                      Verify
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Certifications;
