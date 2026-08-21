import React from 'react';
import { summary, contactInfo } from '../data/resume';
import { Reveal, RevealItem } from './shared/Reveal';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-28 md:py-40 bg-paper-100 dark:bg-ink-900 text-slate-900 dark:text-white border-t border-slate-200/70 dark:border-ink-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl mx-auto">
          <RevealItem className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">Professional Introduction</h2>
          </RevealItem>

          <RevealItem className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 space-y-6">
              {summary.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-slate-700 dark:text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="md:w-1/2">
              <div className="p-6 rounded-xl border border-slate-200 dark:border-ink-700">
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="font-semibold mr-2 text-slate-700 dark:text-slate-300">Email:</span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="hover:underline text-accent-500 dark:text-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2 text-slate-700 dark:text-slate-300">Phone:</span>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="hover:underline text-accent-500 dark:text-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2 text-slate-700 dark:text-slate-300">Location:</span>
                    <span className="text-slate-700 dark:text-slate-300">{contactInfo.location}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold mr-2 text-slate-700 dark:text-slate-300">Website:</span>
                    <a
                      href={`https://${contactInfo.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-accent-500 dark:text-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded"
                    >
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
