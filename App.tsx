import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer isDark={isDark} toggleTheme={toggleTheme} />
      </main>
    </div>
  );
}

export default App;