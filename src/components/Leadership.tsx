import React from 'react';
import { experiences, certifications } from '../data/resume';
import { Reveal, RevealItem } from './shared/Reveal';

const leadershipHighlight = experiences[0].description[3];
const sfc = certifications.find((cert) => cert.name.includes('Scrum'));

const facts = [
  '5+ engineers mentored',
  '8+ developers led across 3 time zones',
  sfc ? `${sfc.name} · ${sfc.year}` : null,
].filter((fact): fact is string => Boolean(fact));

const Leadership: React.FC = () => {
  return (
    <section
      id="leadership"
      className="py-28 md:py-40 bg-paper-50 dark:bg-ink-950 text-slate-900 dark:text-white border-t border-slate-200/70 dark:border-ink-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mx-auto text-center">
          <RevealItem className="mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
              Leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">Engineering Approach</h2>
          </RevealItem>

          <RevealItem className="mb-10">
            <p className="font-display text-2xl md:text-3xl leading-snug text-slate-900 dark:text-white">
              {leadershipHighlight}
            </p>
          </RevealItem>

          <RevealItem className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-600 dark:text-slate-400">
            {facts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
};

export default Leadership;
