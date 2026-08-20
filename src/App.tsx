import React, { useState, useEffect } from 'react';
import PageIntro from './components/PageIntro';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import ImpactAchievements from './components/ImpactAchievements';
import CommerceArchitecture from './components/CommerceArchitecture';
import AIEngineering from './components/AIEngineering';
import Skills from './components/Skills';
import Projects from './components/Projects';
import PersonalProjects from './components/PersonalProjects';
import Leadership from './components/Leadership';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const getSystemPreference = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? savedMode === 'true' : getSystemPreference();
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Follow the OS theme live as long as the user hasn't manually overridden it.
  useEffect(() => {
    if (localStorage.getItem('darkMode')) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem('darkMode', String(next));
      return next;
    });
  };

  return (
    <div className="bg-paper-50 dark:bg-ink-950 min-h-screen transition-colors duration-500 ease-out">
      <PageIntro />
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-md focus:bg-accent-500 focus:text-white"
      >
        Skip to content
      </a>
      <Header toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Experience />
        <ImpactAchievements />
        <CommerceArchitecture />
        <AIEngineering />
        <Skills />
        <Projects />
        <PersonalProjects />
        <Leadership />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
