import { motion } from 'framer-motion';
import { FileChartColumn, Layers, Activity, Sparkles, ArrowUpRight } from 'lucide-react';

const solutions = [
  {
    title: 'AI Workflow Audit',
    description: 'A deep analysis of your recruitment process to identify inefficiencies and automation opportunities.',
    icon: FileChartColumn,
    color: '#3b82f6',
    category: 'Analysis Architecture',
    size: 'col-span-12 lg:col-span-12',
    includes: ['Workflow analysis', 'Inefficiency identification', 'Automation roadmap', 'ROI calculation', 'Audit report + presentation']
  },
  {
    title: 'Automation Implementation',
    description: 'We implement the automation systems so your team can start seeing results immediately.',
    icon: Layers,
    color: '#3b82f6',
    category: 'Systems Integration',
    size: 'col-span-12',
    includes: ['AI workflow setup', 'Tool integration', 'Automation system design', 'Team training']
  },
  {
    title: 'Ongoing Optimization',
    description: 'Continuous monitoring and refinement of your automated workflows to maximize ROI.',
    icon: Activity,
    color: '#3b82f6',
    category: 'Intelligence Lifecycle',
    size: 'col-span-12',
    includes: ['Workflow improvements', 'Performance tracking', 'Continuous optimization', 'Scale management']
  }
];

const BentoCard = ({ solution, index }: { solution: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className={`${solution.size} glass-card group cursor-pointer relative p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden border border-white/5 hover:border-primary/20 shadow-[0_45px_100px_-20px_rgba(0,0,0,0.8)]`}
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.03),transparent_60%)] pointer-events-none" />
    
    <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left flex-1 max-w-xl">
      <div className="flex flex-col items-center lg:items-start mb-8 gap-4">
        <div 
          className="w-20 h-20 rounded-2xl flex items-center justify-center bg-primary/5 border border-primary/20 group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-700 shadow-2xl relative"
        >
          <solution.icon size={32} strokeWidth={1} className="text-primary" />
        </div>
        <div className="text-[10px] font-black text-white uppercase tracking-[0.4em] bg-white/[0.02] px-4 py-2 rounded-lg border border-white/5">
          {solution.category}
        </div>
      </div>

      <h3 className="text-3xl md:text-5xl font-black font-heading mb-6 text-white group-hover:text-primary transition-colors duration-700 uppercase tracking-tighter">
        {solution.title}
      </h3>
      <p className="text-lg text-white leading-relaxed font-medium group-hover:text-white transition-colors duration-700 italic mb-8">
        "{solution.description}"
      </p>

      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
        {solution.includes.map((inc: string, i: number) => (
          <span key={i} className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-[9px] font-black text-white uppercase tracking-widest group-hover:text-white group-hover:border-white/20 transition-all">
            {inc}
          </span>
        ))}
      </div>
    </div>

    <div className="relative z-10 shrink-0">
      <a 
        href="#contact" 
        onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
        className="px-14 py-7 rounded-full bg-white text-black font-black text-[11px] tracking-[0.4em] uppercase transition-all duration-700 hover:bg-slate-200 hover:scale-105 shadow-2xl flex items-center gap-4"
      >
        Request Deployment Proposal <ArrowUpRight size={18} />
      </a>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="section-padding relative bg-black overflow-hidden border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-32 items-center text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[9px] font-black text-primary uppercase tracking-[0.4em]">
            <Sparkles size={12} strokeWidth={3} />
            Recruitment Operational Matrix
          </div>
          <h2 className="text-4xl md:text-7xl font-black font-heading text-white tracking-tighter leading-[1.0] uppercase max-w-5xl">
            Enterprise <span className="text-white">Solutions.</span> <br />
            Built For Recruitment Scale.
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {solutions.map((solution, index) => (
            <BentoCard key={solution.title} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
