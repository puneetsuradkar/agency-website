import { Network } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-slate-950 relative overflow-hidden px-6">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-3">
            <div className="p-1.5 glass bg-purple-500/10 border-purple-500/20 rounded-lg">
              <Network className="text-purple-400" size={18} />
            </div>
            <span className="text-lg font-black tracking-[-0.03em] font-heading text-white">
              Vortex<span className="text-purple-500">Auto</span>
            </span>
            <span className="hidden md:block w-px h-4 bg-white/10 mx-2" />
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
              © 2026 Systems Optimized
            </p>
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
