import { motion } from 'framer-motion';
import { FileBarChart, Layers, Activity, Sparkles, ArrowUpRight } from 'lucide-react';

const sections = [
  {
    title: 'AI Workflow Audit',
    desc: 'Complete recruitment workflow analysis to identify efficiencies, opportunities, and ROI potential.',
    icon: FileBarChart,
    list: ['Complete workflow analysis', 'Identification of inefficiencies', 'Automation opportunities', 'Time & cost savings calculation', 'Detailed report']
  },
  {
    title: 'Automation Implementation',
    desc: 'Full-scale deployment of customized AI systems to eliminate manual administrative friction.',
    icon: Layers,
    list: ['Build automation systems', 'Integrate tools', 'Set up workflows', 'Train your team']
  },
  {
    title: 'Ongoing Optimization',
    desc: 'Continuous performance monitoring and system refinement to ensure maximum placement velocity.',
    icon: Activity,
    list: ['Workflow improvements', 'Performance tracking', 'Continuous optimization', 'Scale management']
  }
];

const ServicesPage = () => {
  return (
    <div className="pt-48 pb-24 px-6 bg-black">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col mb-32 items-center text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[9px] font-black text-primary uppercase tracking-[0.4em]">
            <Sparkles size={12} strokeWidth={3} />
            Sector Specialized Excellence
          </div>
          <h1 className="text-4xl md:text-7xl font-black font-heading text-white tracking-tighter leading-[1.0] uppercase max-w-5xl">
            AI Automation <br /><span className="text-white/20">Services For</span> <br />Recruitment Agencies.
          </h1>
        </div>

        <div className="flex flex-col gap-12 mb-32">
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-12 md:p-20 relative overflow-hidden group border border-white/5 hover:border-primary/20"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.03),transparent_60%)] pointer-events-none" />
              <div className="flex flex-col lg:flex-row gap-16 items-start justify-between relative z-10">
                <div className="max-w-xl">
                  <div className="w-20 h-20 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                    <sec.icon size={32} strokeWidth={1} />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter group-hover:text-primary transition-colors">{sec.title}</h2>
                  <p className="text-lg text-slate-400 font-medium italic mb-10 leading-relaxed italic leading-relaxed">"{sec.desc}"</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {sec.list.map((item, idx) => (
                      <span key={idx} className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">{item}</span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 pt-10 lg:pt-0">
                  <a href="#contact" className="btn-primary py-7 px-14">Get Service Deployment <ArrowUpRight size={18} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
