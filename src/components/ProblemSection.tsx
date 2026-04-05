import { motion } from 'framer-motion';
import { ShieldAlert, TriangleAlert, FileSearch, Globe, Mail, MessageSquare, Calendar, FileText } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    { text: 'Reading hundreds of resumes for every role', icon: FileSearch },
    { text: 'Searching candidates manually on LinkedIn', icon: Globe },
    { text: 'Sending repetitive outreach messages', icon: Mail },
    { text: 'Following up manually', icon: MessageSquare },
    { text: 'Coordinating interviews across emails and calls', icon: Calendar },
    { text: 'Preparing client reports manually', icon: FileText }
  ];

  return (
    <section id="problem" className="section-padding bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(59,130,246,0.03),transparent_60%)] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-24 items-center text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-white uppercase tracking-[0.4em]">
            <ShieldAlert size={12} strokeWidth={3} />
            The Problem Architecture
          </div>
          <h2 className="text-4xl md:text-7xl font-black font-heading text-white tracking-tighter leading-[1.0] uppercase max-w-4xl">
            Your Recruiters Are Spending Hours <br /><span className="text-white">On Work That Doesn't</span> Generate Revenue.
          </h2>
          <p className="text-white text-lg md:text-xl max-w-2xl leading-relaxed font-medium italic">
            "Most recruitment agencies are stuck in manual workflows that choke their growth and leave money on the table."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] }}
              viewport={{ once: true }}
              className="glass-card p-10 border-white/5 hover:border-white/20 transition-all group flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <problem.icon size={20} strokeWidth={1} />
              </div>
              <p className="text-sm font-black text-white group-hover:text-white transition-colors duration-500 uppercase tracking-widest leading-relaxed">
                {problem.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-8 text-center pt-20 border-t border-white/5">
          <div className="flex items-center gap-4 text-white bg-white/5 px-6 py-4 rounded-3xl border border-white/10">
            <TriangleAlert size={24} className="shrink-0" />
            <p className="text-lg md:text-xl font-black uppercase tracking-tighter max-w-xl leading-snug">
              Instead of closing placements, your recruiters are stuck doing repetitive admin work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
