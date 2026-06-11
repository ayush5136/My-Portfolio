import { useEffect } from 'react';
import AOS from 'aos';

// Components
import Navbar from './components/navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      once: false,
      offset: 50,
      duration: 800,
      easing: 'ease-out-cubic',
    });
    
    // Refresh AOS when navigating/scrolling to ensure everything triggers correctly
    AOS.refresh();
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-cyan selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
