import React from 'react';
import { Layers, Gauge } from 'lucide-react';
import { Reveal, RevealItem } from './shared/Reveal';

const capabilityGroups = [
  {
    title: 'Platform & APIs',
    icon: Layers,
    items: [
      'Magento 2 / Adobe Commerce (2.4.3–2.4.8)',
      'App Builder & API Mesh',
      'Commerce Starter Kit & Admin UI SDK',
      'PWA Studio & multi-store architecture',
      'Adobe Experience Cloud integration',
    ],
  },
  {
    title: 'Performance & Scale',
    icon: Gauge,
    items: [
      'Redis & Varnish caching strategy',
      'OpenSearch / Elasticsearch tuning',
      'Load testing & performance profiling',
      'API monitoring & security hardening',
    ],
  },
];

const CommerceArchitecture: React.FC = () => {
  return (
    <section
      id="commerce-architecture"
      className="py-28 md:py-40 bg-paper-50 dark:bg-ink-950 text-slate-900 dark:text-white border-t border-slate-200/70 dark:border-ink-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <RevealItem>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
                Adobe Commerce
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Enterprise Architecture Depth</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                A decade of hands-on Adobe Commerce architecture — from multi-store platforms serving
                national retail chains to headless storefronts for global brands. Delivering measurable
                performance gains through advanced system design, caching strategy, and API engineering.
              </p>
            </RevealItem>

            <div className="space-y-10">
              {capabilityGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <RevealItem key={group.title}>
                    <div className="flex items-center gap-2 mb-4">
                      <Icon size={18} className="text-accent-500 dark:text-accent-400" />
                      <h3 className="text-lg font-semibold">{group.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-slate-700 dark:text-slate-300 pl-4 border-l border-slate-200 dark:border-ink-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </RevealItem>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CommerceArchitecture;
