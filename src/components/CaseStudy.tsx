import { motion } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';

const CaseStudy = () => {
  return (
    <section id="case-study" className="section-padding bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(59,130,246,0.05),transparent_60%)] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-24 items-center text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[9px] font-black text-primary uppercase tracking-[0.4em]">
            <Sparkles size={12} strokeWidth={3} />
            Verified Performance Outcome
          </div>
          <h2 className="text-4xl md:text-7xl font-black font-heading text-white tracking-tighter leading-[1.0] uppercase max-w-5xl">
            Empirical Results. <br /><span className="text-white">The Deployment</span> Case Study.
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-24 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight">
                Recruitment Agency <br />(5 Recruiters / Headcount)
              </h3>
              <p className="text-white text-lg md:text-xl font-medium italic italic">
                "Spent ~3 hours per role on resume screening manually before integration."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-primary/40 transition-colors">
                <span className="text-4xl font-black text-primary block mb-1">70%</span>
                <span className="text-[10px] text-white font-bold uppercase tracking-widest">Time Reduction</span>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-primary/40 transition-colors">
                <span className="text-4xl font-black text-primary block mb-1">15h+</span>
                <span className="text-[10px] text-white font-bold uppercase tracking-widest">Weekly Savings</span>
              </div>
            </div>
            
            <p className="text-white text-lg font-bold leading-relaxed uppercase tracking-tighter">
              Outcome: Increased candidate processing speed and direct placement velocity.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-20" />
            <div className="relative glass-card p-12 flex flex-col justify-between min-h-[300px]">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary mb-8">
                <Quote size={28} />
              </div>
              <p className="text-2xl md:text-4xl font-black text-white italic leading-tight mb-8">
                "The ROI was immediate. We stopped fighting email threads and started closing deals."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Managing Director</span>
                  <span className="text-[8px] font-bold text-white uppercase tracking-widest italic font-bold italic font-medium italic tracking-[0.2em]">Partner Agency</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
