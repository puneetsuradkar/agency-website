import { motion } from 'framer-motion';
import { 
  MessageSquare, Zap, Database, 
  Search, ArrowUpRight, Bot, Target, ShieldCheck
} from 'lucide-react';

const solutions = [
  {
    title: 'AI Multi-Agent Systems',
    description: 'Autonomous agents that collaborate to solve complex multi-step business objectives.',
    icon: Bot,
    color: '#ffffff',
    category: 'Workforce',
    size: 'col-span-12 md:col-span-8'
  },
  {
    title: 'Smart Chatbots',
    description: 'Next-gen conversational AI that actually solves customer problems in real-time.',
    icon: MessageSquare,
    color: '#ffffff',
    category: 'CX',
    size: 'col-span-12 md:col-span-4'
  },
  {
    title: 'Workflow Automation',
    description: 'End-to-end integration of your entire tech stack with autonomous triggers.',
    icon: Zap,
    color: '#ffffff',
    category: 'Operations',
    size: 'col-span-12 md:col-span-4'
  },
  {
    title: 'AI Data Employees',
    description: 'Digital workers that scrape, analyze, and report data 24/7 without error.',
    icon: Database,
    color: '#ffffff',
    category: 'Intelligence',
    size: 'col-span-12 md:col-span-4'
  },
  {
    title: 'Outbound Agents',
    description: 'AI sales reps that research, contact, and qualify leads on autopilot.',
    icon: Search,
    color: '#ffffff',
    category: 'Sales',
    size: 'col-span-12 md:col-span-4'
  }
];

const BentoCard = ({ solution, index }: { solution: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] }}
    viewport={{ once: true }}
    className={`${solution.size} glass-card group cursor-pointer relative p-6 md:p-12 min-h-[300px] md:min-h-[350px] flex flex-col justify-between overflow-hidden bg-black border border-white/10`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
    <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-white/[0.03] rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
    
    <div className="relative z-10 flex flex-col items-center text-center w-full">
      <div className="flex flex-col items-center mb-8 gap-4">
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/[0.03] border border-white/10 group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-500 shadow-2xl relative"
          style={{ color: solution.color }}
        >
          <solution.icon size={28} strokeWidth={1} />
        </div>
        <div className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em] bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5">
          {solution.category}
        </div>
      </div>

      <h3 className="text-2xl font-black font-heading mb-4 text-white group-hover:text-slate-200 transition-colors duration-500 uppercase tracking-tighter">
        {solution.title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed max-w-xs font-medium group-hover:text-white transition-colors duration-500 italic">
        "{solution.description}"
      </p>
    </div>

    <div className="relative z-10 pt-8 border-t border-white/5 mt-auto flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-slate-700 group-hover:text-white transition-all duration-500">
      <span className="group-hover:translate-x-1 transition-transform">Initialize Protocol</span>
      <ArrowUpRight size={14} className="group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-black overflow-hidden border-t border-white/5">
      
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-24 items-center text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-white uppercase tracking-[0.4em]">
            <Target size={12} />
            Modular Workforce Archetypes
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-heading text-white tracking-tighter leading-[1.0] uppercase">
            Digital <span className="text-white/20">Employees.</span> <br />
            Scale Ready.
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed font-medium italic">
            "Replace complex manual processes with high-performance AI agents. 
            Modular workforce architecture built for pure efficiency."
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {solutions.map((solution, index) => (
            <BentoCard key={solution.title} solution={solution} index={index} />
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="col-span-12 glass-card p-8 md:p-16 bg-black border border-white/10 flex flex-col md:flex-row justify-between items-center gap-12 group overflow-hidden"
          >
            <div className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start w-full">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={16} className="text-white opacity-40" />
                <span className="text-[9px] font-black text-slate-700 uppercase tracking-[0.4em]">Enterprise Protocol</span>
              </div>
              <h3 className="text-3xl md:text-6xl font-black font-heading text-white mb-4 tracking-tighter uppercase leading-[0.9]">
                Need a <span className="text-white/20">Custom Agent?</span>
              </h3>
              <p className="text-slate-500 text-base md:text-lg max-w-xl font-medium italic">
                We engineer bespoke AI workforce solutions for unique business workflows and high-stakes enterprise demands.
              </p>
            </div>
            
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="relative z-10 shrink-0 px-14 py-7 rounded-full bg-white text-black font-black text-[11px] tracking-[0.4em] uppercase transition-all duration-500 hover:bg-slate-200 hover:scale-105 shadow-2xl inline-block cursor-pointer"
            >
              Request Design Call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
