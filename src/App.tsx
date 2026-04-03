import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Explanation from './components/Explanation';
import Services from './components/Services';
import Capabilities from './components/Capabilities';
import Workflow from './components/Workflow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero3D from './components/Hero3D';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './App.css';

function App() {
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

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black selection:bg-purple-500/30 selection:text-white antialiased relative">
      <Hero3D />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Explanation />
        <Services />

        <Capabilities />
        <Workflow />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
