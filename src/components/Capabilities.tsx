import { motion } from 'framer-motion';
import { TrendingUp, Activity, Bot, ChevronRight } from 'lucide-react';

const offeringModules = [
  {
    title: 'Precision AI Receptionist',
    target: 'Target: +60% Lead Response',
    description: 'A 24/7 autonomous agent designed to qualify every inbound prospect and sync them directly to your CRM.',
    impact: ['Instant Lead Capture', 'Zero Delay'],
    tag: 'Reception',
    color: '#ffffff'
  },
  {
    title: 'Data Workforce Agent',
    target: 'Target: 80% Admin Automation',
    description: 'Bespoke agents that handle high-volume data scraping, entry, and reporting across your software stack.',
    impact: ['Zero Human Error', 'Infinite Scale'],
    tag: 'Intelligence',
    color: '#ffffff'
  },
  {
    title: 'Customer Success Bot',
    target: 'Target: 2.5x Solve Speed',
    description: 'Next-gen conversational agents that resolve complex queries and handle scheduling without human intervention.',
    impact: ['Solve Rates', 'Enhanced Trust'],
    tag: 'Support',
    color: '#ffffff'
  }
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 md:py-32 relative bg-black overflow-hidden border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-white uppercase tracking-[0.3em]">
            <ChevronRight size={12} strokeWidth={3} />
            Workforce Modules
          </div>
          <h2 className="text-4xl md:text-7xl font-black font-heading text-white tracking-tighter leading-[1.0] max-w-4xl uppercase">
            Engineered <br /><span className="text-white">Impact.</span>
          </h2>
          <p className="text-white text-lg md:text-xl max-w-2xl leading-relaxed font-medium italic">
            "Deploy specialized digital employees designed for pure operational performance and logical precision."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offeringModules.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] }}
              viewport={{ once: true }}
              className="glass-card p-10 border border-white/10 group hover:border-white/40 transition-all duration-700 bg-white/[0.01] flex flex-col items-center text-center overflow-hidden"
            >
              <div className="flex justify-between items-center w-full mb-10">
                <div className="text-[8px] font-black text-white uppercase tracking-[0.3em] bg-white/[0.02] px-3 py-1.5 rounded-lg border border-white/5">{c.tag}</div>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-white transition-colors">
                  <Bot size={16} strokeWidth={1} />
                </div>
              </div>

              <h3 className="text-2xl font-black font-heading text-white mb-4 uppercase tracking-tight group-hover:text-white transition-colors duration-500 leading-tight">
                {c.title}
              </h3>
              
              <div className="inline-flex items-center gap-3 text-white mb-8 px-5 py-2.5 bg-white/[0.03] rounded-full border border-white/10 transition-all group-hover:border-white/40 shadow-2xl">
                <TrendingUp size={14} className="text-white opacity-40" /> 
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{c.target}</span>
              </div>

              <p className="text-white text-sm leading-relaxed mb-10 font-medium max-w-[250px] italic">
                "{c.description}"
              </p>

              <div className="flex flex-wrap justify-center gap-3 pt-8 border-t border-white/5 w-full mt-auto">
                {c.impact.map((m, k) => (
                  <span key={k} className="text-[9px] font-black text-white uppercase tracking-[0.3em] flex items-center gap-2">
                    <Activity size={10} className="text-white opacity-20" /> {m}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
