import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ResultsSection from './components/ResultsSection';
import Services from './components/Services';
import Workflow from './components/Workflow';
import AutomationUseCases from './components/AutomationUseCases';
import CaseStudy from './components/CaseStudy';
import WhyChooseUs from './components/WhyChooseUs';
import AboutSection from './components/AboutSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './App.css';

function App() {
  const [view, setView] = useState<'home' | 'services' | 'contact'>('home');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.scrollTo(0, 0);

    return () => {
      lenis.destroy();
    };
  }, [view]);

  return (
    <div className="min-h-screen bg-black selection:bg-primary/30 selection:text-white antialiased relative">
      <Navbar setView={setView} currentView={view} />
      
      <main className="relative z-10">
        {view === 'home' && (
          <div className="flex flex-col">
            <div id="home"><Hero /></div>
            <div id="problem"><ProblemSection /></div>
            <div id="solution"><SolutionSection /></div>
            <div id="results"><ResultsSection /></div>
            <div id="services"><Services /></div>
            <div id="how-it-works"><Workflow /></div>
            <div id="use-cases"><AutomationUseCases /></div>
            <div id="case-study"><CaseStudy /></div>
            <div id="why-choose-us"><WhyChooseUs /></div>
            <div id="about"><AboutSection /></div>
            <div id="contact"><Contact /></div>
          </div>
        )}
        {view === 'services' && <ServicesPage />}
        {view === 'contact' && <ContactPage />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
