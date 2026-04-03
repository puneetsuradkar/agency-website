import { motion } from 'framer-motion';
import { Brain, Blocks, ArrowRight, Zap, Target } from 'lucide-react';

const Explanation = () => {
  return (
    <section id="explanation" className="py-24 relative bg-black overflow-hidden border-t border-white/5">
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-purple-400 uppercase tracking-[0.3em]">
                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]" />
                The Core Architecture
              </div>
              <h2 className="text-4xl md:text-6xl font-black font-heading text-white tracking-tighter leading-[1.0] mb-8 uppercase">
                What exactly is <br />
                <span className="text-white/20">AI Logic?</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed max-w-xl font-medium italic">
                "Autonomous agents don't just follow instructions—they internalize goals and orchestrate their own path to completion."
              </p>
            </div>

            <div className="p-8 glass-card bg-white/[0.02] border-white/5 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <Target size={14} className="text-white" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Our Methodology</span>
              </div>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                We don't build simple chatbots. We architect <span className="text-white">autonomous digital employees</span>. Our agency analyzes your manual bottlenecks and deploys agents that think, read, and act across your entire software stack 24/7.
              </p>
            </div>

            <a 
              href="#workflow" 
              onClick={(e) => { e.preventDefault(); document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-purple-400 group transition-all"
            >
              Examine Our Workflows <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>

          {/* Right Core System Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            <div className="sm:col-span-2 glass-card p-10 bg-white/[0.01] border-white/10 hover:border-purple-500/30 transition-all duration-500 group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/20">
                  <Brain size={24} className="text-white" />
                </div>
                <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Cognitive Processing</div>
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight uppercase group-hover:text-slate-300">Cognitive Logic Engine</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Our agents use large language models to understand nuance, read context, and make high-stakes logical decisions without human oversight.
              </p>
            </div>

            <div className="glass-card p-8 bg-white/[0.01] border-white/10 hover:border-cyan-500/30 transition-all duration-500 group">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20">
                <Blocks size={20} className="text-cyan-400" />
              </div>
              <h4 className="text-sm font-black text-white mb-3 uppercase tracking-tighter">Stack Sync</h4>
              <p className="text-[10px] text-slate-600 leading-relaxed font-bold">
                Direct integration with your native CRM, Email, and Database ecosystems.
              </p>
            </div>

            <div className="glass-card p-8 bg-white/[0.01] border-white/10 hover:border-green-500/30 transition-all duration-500 group">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20">
                <Zap size={20} className="text-green-400" />
              </div>
              <h4 className="text-sm font-black text-white mb-3 uppercase tracking-tighter">Instant Execution</h4>
              <p className="text-[10px] text-slate-600 leading-relaxed font-bold">
                Triggers initiate massive complex sequences in milliseconds.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Explanation;
