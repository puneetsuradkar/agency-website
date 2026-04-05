import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck, Rocket, Layers, CircleCheck } from 'lucide-react';

const reasons = [
  { id: '01', title: 'Workflow Over Tools', desc: "We focus on your internal processes first, not just selling a software license.", icon: Layers },
  { id: '02', title: 'ROI-Driven Strategy', desc: "Every automation is mapped to direct time and cost savings for your agency.", icon: Target },
  { id: '03', title: 'Sector Specialists', desc: "Designed specifically for the unique demands of recruitment agencies.", icon: ShieldCheck },
  { id: '04', title: 'Practical Integration', desc: "We build working systems that scale from day one.", icon: Rocket },
  { id: '05', title: 'High-Velocity Delivery', desc: "Faster and more affordable than traditional large consulting firms.", icon: Zap }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-black relative overflow-hidden border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-32 items-center text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[9px] font-black text-primary uppercase tracking-[0.4em]">
            <CircleCheck size={12} strokeWidth={3} />
            The Strategic Advantage
          </div>
          <h2 className="text-4xl md:text-7xl font-black font-heading text-white tracking-tighter leading-[1.0] uppercase max-w-5xl">
            Why Agencies <br /><span className="text-white">Trust Our</span> Protocol.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {reasons.map((res, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              viewport={{ once: true }}
              className="glass-card p-10 flex flex-col items-center text-center group border border-white/5 hover:border-primary/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-700">
                <res.icon size={24} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter leading-tight">{res.title}</h3>
              <p className="text-[10px] text-white font-bold uppercase tracking-widest leading-relaxed">
                {res.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
