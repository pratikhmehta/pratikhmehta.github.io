import React from 'react';
import { achievements } from '../data/resume';
import { Reveal, RevealItem } from './shared/Reveal';
import AnimatedNumber from './shared/AnimatedNumber';

const ImpactAchievements: React.FC = () => {
  return (
    <section
      id="impact"
      className="py-28 md:py-40 bg-paper-100 dark:bg-ink-900 text-slate-900 dark:text-white border-t border-slate-200/70 dark:border-ink-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-5xl mx-auto">
          <RevealItem className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
              Impact
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">Achievements That Speak in Numbers</h2>
          </RevealItem>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {achievements.map((item) => (
              <RevealItem key={item.label} className="text-center md:text-left">
                <div className="font-display text-4xl md:text-5xl font-semibold text-slate-900 dark:text-white tabular-nums mb-2">
                  <AnimatedNumber value={item.value} />
                </div>
                <div className="text-base font-medium mb-1">{item.label}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{item.context}</div>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ImpactAchievements;
