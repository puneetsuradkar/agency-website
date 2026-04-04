import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  setView: (view: 'home' | 'services' | 'contact') => void;
  currentView: 'home' | 'services' | 'contact';
}

const Navbar = ({ setView, currentView }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', view: 'home' as const, href: '#home' },
    { name: 'Services', view: 'services' as const, href: '#services' },
    { name: 'Contact', view: 'contact' as const, href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setView(link.view);
    setIsMobileMenuOpen(false);
    
    if (link.view === 'home' && link.href.includes('#')) {
       const element = document.querySelector(link.href);
       if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
       }
    } else {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-4 transition-all duration-500 border rounded-full backdrop-blur-3xl ${
        isScrolled ? 'bg-black/80 border-white/10 shadow-2xl' : 'bg-white/[0.03] border-white/5'
      }`}>
        
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="p-2 glass bg-primary/10 border border-primary/20 rounded-xl">
            <Zap className="text-primary" size={20} fill="currentColor" strokeWidth={1} />
          </div>
          <span className="text-lg md:text-xl font-black tracking-tighter text-white uppercase">
            RecruitFlow<span className="text-white/20 italic">AI</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative group ${
                currentView === link.view ? 'text-white' : 'text-slate-500 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all ${currentView === link.view ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </a>
          ))}
          
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); setView('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-8 py-3 rounded-full bg-white text-black font-black text-[10px] tracking-[0.2em] uppercase transition-all hover:bg-primary hover:text-white flex items-center gap-2"
          >
            Start Audit <ArrowUpRight size={14} />
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 p-8 glass-card bg-black/95 border-white/10 shadow-2xl"
          >
            <div className="flex flex-col gap-8 items-center text-center text-center items-center flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-[11px] font-black uppercase tracking-[0.4em] ${currentView === link.view ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); setView('contact'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-full py-5 rounded-full bg-primary text-white font-black text-[11px] tracking-[0.3em] uppercase flex items-center justify-center gap-4"
              >
                Book Discovery Call <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
