import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarsBackground from './components/StarsBackground';
import './styles/App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [visibleSections, setVisibleSections] = useState(new Set(['home']));

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollY = window.scrollY + 100;

      // Update active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollY >= element.offsetTop && scrollY < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }

      // Update visible sections
      const newVisibleSections = new Set();
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
            newVisibleSections.add(section);
          }
        }
      });
      setVisibleSections(newVisibleSections);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <StarsBackground />
      <Header activeSection={activeSection} />
      <main>
        <Hero isVisible={visibleSections.has('home')} />
        <Skills isVisible={visibleSections.has('skills')} />
        <Projects isVisible={visibleSections.has('projects')} />
        <Contact isVisible={visibleSections.has('contact')} />
      </main>
    </div>
  );
}

export default App;