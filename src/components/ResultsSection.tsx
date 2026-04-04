import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, Clock, Rocket } from 'lucide-react';

const ResultsSection = () => {
  const results = [
    { title: 'Save 4–6 Hours', desc: 'Per recruiter per day recovered for revenue-driving tasks.', icon: Clock },
    { title: '40–60% Load', desc: 'Reduction in manual operational tasks across the entire agency.', icon: Zap },
    { title: '2–3x Reach', desc: 'Increase in candidate outreach and sourcing capacity.', icon: Users },
    { title: 'Faster Cycles', desc: 'Accelerated hiring timelines by eliminating administrative friction.', icon: Rocket }
  ];

  return (
    <section id="results" className="section-padding bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-32 items-center text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-green-500/5 border border-green-500/10 text-[9px] font-black text-green-400 uppercase tracking-[0.4em]">
            <TrendingUp size={12} strokeWidth={3} />
            Quantifiable Architecture
          </div>
          <h2 className="text-4xl md:text-7xl font-black font-heading text-white tracking-tighter leading-[1.0] uppercase max-w-5xl">
            What This Means <br /><span className="text-white/20">For Your</span> Business Intelligence.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {results.map((res, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-green-400 border border-white/10 group-hover:scale-110 group-hover:border-green-400/50 group-hover:bg-green-400/10 transition-all duration-700 mb-8">
                <res.icon size={28} strokeWidth={1} />
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter group-hover:text-green-400 transition-colors">{res.title}</h3>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed max-w-[200px]">
                {res.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-8 py-10 border-y border-white/10 w-full justify-center group"
          >
            <span className="text-lg md:text-2xl lg:text-3xl font-black text-slate-600 uppercase tracking-tighter group-hover:text-white transition-colors">More Efficiency</span>
            <ArrowRightIcon className="text-primary group-hover:scale-150 transition-transform" />
            <span className="text-lg md:text-2xl lg:text-3xl font-black text-slate-400 uppercase tracking-tighter group-hover:text-white transition-colors">More Placements</span>
            <ArrowRightIcon className="text-primary group-hover:scale-150 transition-transform" />
            <span className="text-xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter neon-text">More Revenue</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ResultsSection;
