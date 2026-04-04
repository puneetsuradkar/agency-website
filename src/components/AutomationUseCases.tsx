import { motion } from 'framer-motion';
import { Search, Bot, MessageSquare, Calendar, FileText, CircleCheck } from 'lucide-react';

const useCases = [
  { 
    title: 'Resume Screening', 
    desc: 'Reduce 3+ hours of manual screening to minutes using AI-powered candidate ranking.',
    icon: Search
  },
  { 
    title: 'Candidate Sourcing', 
    desc: 'Automatically extract candidate profiles instead of manual searching.',
    icon: Bot
  },
  { 
    title: 'Outreach Automation', 
    desc: 'Send personalized messages and follow-ups automatically.',
    icon: MessageSquare
  },
  { 
    title: 'Interview Scheduling', 
    desc: 'Eliminate back-and-forth emails with automated scheduling.',
    icon: Calendar
  },
  { 
    title: 'Reporting Automation', 
    desc: 'Generate client reports instantly using AI.',
    icon: FileText
  }
];

const AutomationUseCases = () => {
  return (
    <section id="use-cases" className="section-padding bg-black relative overflow-hidden border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-32 items-center text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[9px] font-black text-primary uppercase tracking-[0.4em]">
            <CircleCheck size={12} strokeWidth={3} />
            Specific Operational Archetypes
          </div>
          <h2 className="text-4xl md:text-7xl font-black font-heading text-white tracking-tighter leading-[1.0] uppercase max-w-5xl">
            Where AI <span className="text-white/20">Scales</span> <br />Your Recruitment.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {useCases.map((use, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              viewport={{ once: true }}
              className="glass-card p-10 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                <use.icon size={24} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter leading-tight">{use.title}</h3>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                {use.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationUseCases;
