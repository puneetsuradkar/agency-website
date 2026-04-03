import { useState, useRef } from 'react';
import { Menu, X, Zap, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    if (latest > 150 && direction === "down") {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setIsScrolled(latest > 50);
    lastScrollY.current = latest;
  });

  const navLinks = [
    { name: 'Architecture', href: '#explanation' },
    { name: 'Protocols', href: '#workflow' }
  ];

  return (
    <motion.nav 
      animate={{ y: isHidden ? -150 : 0, opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className="fixed w-full z-[100] px-3 md:px-8 py-3 md:py-8 pointer-events-none"
    >
      <div className={`container max-w-6xl mx-auto flex justify-between items-center transition-all duration-700 px-4 md:px-6 py-2 md:py-3 pointer-events-auto rounded-full border ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-2xl border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.4)]' 
          : 'bg-transparent border-transparent'
      }`}>
        {/* Brand/Logo - Mobile Pass */}
        <div className="flex items-center gap-2 md:gap-4 group cursor-pointer shrink-0">
          <div className="relative scale-90 md:scale-100">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="text-white bg-white/5 p-1.5 md:p-2 rounded-xl border border-white/10"
            >
              <Zap size={20} fill="currentColor" strokeWidth={1} />
            </motion.div>
          </div>
          <span className="text-lg md:text-xl font-black tracking-tighter font-heading text-white">
            Monolith<span className="text-white/20">Auto</span>
          </span>
        </div>

        {/* Desktop Menu - Mobile Pass */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { 
                e.preventDefault(); 
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); 
              }}
              className="group relative flex items-center gap-2 text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-[0.4em] transition-all duration-300"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => { 
              e.preventDefault(); 
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); 
            }}
            className="flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black hover:bg-slate-200 transition-all duration-500 text-[11px] font-black uppercase tracking-[0.3em] shadow-[0_10px_30px_rgba(255,255,255,0.1)] active:scale-95"
          >
            Audit Request <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle - Micro Pass */}
        <button 
          className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white shrink-0" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Monochrome Pass */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(50px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="md:hidden fixed inset-0 z-[-1] bg-black/95 pointer-events-auto flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-4xl font-black text-white hover:text-slate-400 transition-all uppercase tracking-tighter"
                onClick={(e) => { 
                  e.preventDefault(); 
                  setIsMobileMenuOpen(false); 
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); 
                }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => { 
                e.preventDefault(); 
                setIsMobileMenuOpen(false); 
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); 
              }} 
              className="px-12 py-5 rounded-full bg-white text-black text-xs font-black uppercase tracking-[0.4em] shadow-2xl active:scale-95"
            >
              Start Request
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
