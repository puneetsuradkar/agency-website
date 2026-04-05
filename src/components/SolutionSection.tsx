import { motion } from 'framer-motion';
import { Target, Search, Mail, Calendar, FileText, CircleCheck } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    { title: 'Automatically Screen & Rank', desc: 'Identify the top 1% of talent instantly with AI-powered resume analysis.', icon: Search },
    { title: 'Extract Candidate Data', desc: 'Sync sourcing platform data directly into your CRM with zero manual entry.', icon: Target },
    { title: 'Automate Outreach', desc: 'Send personalized candidate outreach and follow-ups on autopilot.', icon: Mail },
    { title: 'Simplify Scheduling', desc: 'Eliminate back-and-forth emails. Synchronized interview booking.', icon: Calendar },
    { title: 'Instant Client Reporting', icon: FileText, desc: 'Generate professional, data-rich reports for your clients in seconds.' }
  ];

  return (
    <section id="solution" className="section-padding bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(59,130,246,0.03),transparent_60%)] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-32 items-left md:items-center text-left md:text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[9px] font-black text-primary uppercase tracking-[0.4em]">
            <CircleCheck size={12} strokeWidth={3} />
            The High-Performance Solution
          </div>
          <h2 className="text-4xl md:text-7xl font-black font-heading text-white tracking-tighter leading-[1.0] uppercase max-w-5xl">
            We Turn Your Recruitment Process <br /><span className="text-white">Into An</span> Automated System.
          </h2>
          <p className="text-white text-lg md:text-xl max-w-2xl leading-relaxed font-medium italic">
            "Analyze → Implement → Scale. We build the architecture that grows your agency without the headcount overhead."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              viewport={{ once: true }}
              className="glass-card p-10 flex flex-col items-center text-center group border border-white/5 hover:border-primary/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                <sol.icon size={24} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter leading-tight">{sol.title}</h3>
              <p className="text-[10px] text-white font-bold uppercase tracking-widest leading-relaxed">
                {sol.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
