import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black relative overflow-hidden px-6">
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          <div className="flex items-center gap-4">
            <div className="p-2 glass bg-white/5 border border-white/10 rounded-xl">
              <Zap className="text-white" size={20} fill="currentColor" strokeWidth={1} />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 font-heading">
              <span className="text-xl font-black tracking-tighter text-white">
                Monolith<span className="text-white/20">Auto</span>
              </span>
              <span className="hidden md:block w-px h-4 bg-white/10" />
              <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.4em]">
                © 2026 SYSTEMS OPTIMIZED
              </p>
            </div>
          </div>

          <div className="flex gap-8 text-[9px] font-bold text-slate-500 uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
