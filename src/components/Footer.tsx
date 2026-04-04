import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-24 border-t border-white/5 bg-black relative overflow-hidden px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.03),transparent_60%)] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-24 mb-20 pb-20 border-b border-white/5">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-4">
              <div className="p-2 glass bg-primary/10 border border-primary/20 rounded-xl">
                <Zap className="text-primary" size={24} fill="currentColor" strokeWidth={1} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                RecruitFlow<span className="text-white/20 italic">AI</span>
              </span>
            </div>
            <p className="max-w-xs text-slate-500 text-sm font-medium text-center md:text-left italic">
              "Architecting autonomous recruitment ecosystems for high-growth agencies. Operational efficiency redefined."
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">
            <div className="flex flex-col gap-4">
              <span className="text-white mb-2 tracking-[0.6em]">Navigation</span>
              <a href="#problem" className="hover:text-primary transition-colors">Problem</a>
              <a href="#solution" className="hover:text-primary transition-colors">Solutions</a>
              <a href="#results" className="hover:text-primary transition-colors">Results</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white mb-2 tracking-[0.6em]">System</span>
              <a href="#how-it-works" className="hover:text-primary transition-colors">Workflow</a>
              <a href="#use-cases" className="hover:text-primary transition-colors">Use Cases</a>
              <a href="#case-study" className="hover:text-primary transition-colors">Impact</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6 text-[9px] font-black text-slate-700 uppercase tracking-[0.4em]">
            <span>© 2026 SYSTEMS OPTIMIZED</span>
            <span className="hidden md:block w-px h-3 bg-white/10" />
            <span>HQ: GLOBAL OPERATIONS</span>
          </div>
          <div className="flex gap-8 text-[9px] font-black text-primary uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-white transition-colors">PRIVACY_PROTOCOL</a>
            <a href="#" className="hover:text-white transition-colors">SECURITY_INTEGRITY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
