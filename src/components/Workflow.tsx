import { motion } from 'framer-motion';
import { Database, Bot, Zap, Smartphone, Layers, Terminal, Activity, ShieldCheck } from 'lucide-react';

const nodes = [
  { id: 'trigger', type: 'Input', label: 'Lead Inbound', icon: Smartphone, color: '#10b981' },
  { id: 'logic', type: 'Processor', label: 'AI Qualifier', icon: Bot, color: '#a855f7' },
  { id: 'action', type: 'Output', label: 'CRM Sync', icon: Database, color: '#3b82f6' }
];

const Workflow = () => {
  return (
    <section id="workflow" className="py-24 relative bg-black overflow-hidden border-t border-white/5">
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header: Architectural Authority */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-white uppercase tracking-[0.2em]">
              <Layers size={12} strokeWidth={1} />
              Automation Matrix
            </div>
            <h2 className="text-3xl md:text-6xl font-black font-heading text-white tracking-tighter leading-[1.0] uppercase mb-4">
              Workflow <span className="text-white/20">Architecture.</span>
            </h2>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              We don't just connect tools. We engineer autonomous ecosystems that handle the heavy lifting while you focus on high-level strategy.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end gap-2 pr-4 border-r border-white/10">
            <span className="text-[9px] font-bold text-slate-700 uppercase tracking-widest">Efficiency Load</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-1 h-3 rounded-full ${i <= 4 ? 'bg-purple-500/50' : 'bg-slate-800'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* The Logic Flow Visualization */}
        <div className="relative glass-card bg-white/[0.01] border-white/5 p-12 md:p-16 mb-20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Terminal size={120} strokeWidth={1} />
          </div>
          
          {/* Animated Connecting Lines (Desktop) */}
          <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
            <svg className="w-full h-full opacity-20">
              <path
                d="M 25% 50% L 75% 50%"
                stroke="white"
                strokeWidth="1"
                fill="none"
                strokeDasharray="4,4"
              />
            </svg>
            <motion.div
              animate={{ left: ['25%', '75%'], opacity: [0, 0.4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]"
            />
          </div>

          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center gap-6"
            >
              <div className="relative group">
                {/* Node Outer Glow */}
                <div className="absolute -inset-4 bg-purple-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Node Core */}
                <div 
                  className="w-20 h-20 md:w-24 md:h-24 glass-card bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:border-purple-500/50 group-hover:bg-purple-500/5 relative overflow-hidden"
                  style={{ color: node.color }}
                >
                  <node.icon size={28} className="group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-30" />
                </div>

                {/* Node Identity Tag */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-max px-3 py-1 bg-white text-black text-[8px] font-black uppercase tracking-widest rounded transition-all opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 shadow-2xl">
                  {node.type}
                </div>
              </div>

              <div className="text-center space-y-1">
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">{node.label}</h4>
                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Verified Process</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Matrix: High-Performance Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Zero Friction', desc: 'Accelerated deployment without traditional complexity.', icon: Zap },
            { title: 'Full Control', desc: '100% ownership of your automated logic blueprints.', icon: ShieldCheck },
            { title: 'Scale Ready', desc: 'Architecture tested for 10k+ daily operational tasks.', icon: Activity }
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 bg-white/[0.01] border-white/5 hover:border-white/10 transition-all group flex items-start gap-5">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-purple-500/10 group-hover:text-purple-400 transition-colors shrink-0">
                <item.icon size={18} />
              </div>
              <div className="space-y-2">
                <h5 className="text-[11px] font-black text-white uppercase tracking-[0.2em]">{item.title}</h5>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Workflow;
