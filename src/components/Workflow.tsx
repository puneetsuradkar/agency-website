import { motion } from 'framer-motion';
import { PhoneCall, FileChartColumn, Activity, Layers, Rocket, Zap } from 'lucide-react';

const steps = [
  { id: '01', title: 'Discovery Call', desc: 'We understand your recruitment workflow and challenges.', icon: PhoneCall },
  { id: '02', title: 'Workflow Audit', desc: 'We identify inefficiencies and automation opportunities.', icon: FileChartColumn },
  { id: '03', title: 'AI Strategy Report', desc: 'You receive a clear roadmap with ROI insights.', icon: Activity },
  { id: '04', title: 'Implementation', desc: 'We build and integrate automation systems.', icon: Layers },
  { id: '05', title: 'Optimization', desc: 'We refine workflows and train your team.', icon: Rocket }
];

const Workflow = () => {
  return (
    <section id="how-it-works" className="section-padding relative bg-black overflow-hidden border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-32 items-center text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[9px] font-black text-primary uppercase tracking-[0.4em]">
            <Zap size={12} strokeWidth={3} />
            The Operational Protocol
          </div>
          <h2 className="text-4xl md:text-7xl font-black font-heading text-white tracking-tighter leading-[1.0] uppercase max-w-5xl">
            How Integrated <br /><span className="text-white/20">Success</span> Works.
          </h2>
        </div>

        <div className="relative grid md:grid-cols-5 gap-4">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-px bg-white/10 z-0" />
          
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-700 mb-8 z-10 bg-black">
                <step.icon size={24} strokeWidth={1} />
                <span className="absolute -top-3 -right-3 text-[10px] font-black text-slate-700 bg-black px-2 group-hover:text-primary transition-colors">{step.id}</span>
              </div>
              <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-4 group-hover:text-primary transition-colors">{step.title}</h4>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed max-w-[160px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
