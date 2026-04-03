import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, ShieldCheck, Calendar, Sparkles, Building2, User } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', query: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.query) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', query: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-white/5">
      {/* Structural Atmospheric Glows - Monochrome */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] -z-10" />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Strategic Value Proposition - Monochrome */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-slate-500 uppercase tracking-[0.4em]"
              >
                <Sparkles size={12} className="text-white opacity-40" />
                Strategic Optimization
              </motion.div>
              <h2 className="text-4xl md:text-7xl font-black font-heading text-white tracking-tighter leading-[1.0] uppercase">
                Scale Your <br />
                <span className="text-white/20">Intelligence.</span>
              </h2>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-md italic font-medium">
                "Infrastructure is the orchestration of autonomous results. We build the architecture for scale."
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: 'Workflow Blueprint', desc: 'ROI-driven mapping of your internal ecosystems.', icon: Sparkles },
                { title: 'Agent Integration', desc: 'Syncing cognitive bots into your structural tech stack.', icon: ShieldCheck }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 glass-card bg-white/[0.01] border-white/5 hover:border-white/20 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white transition-all">
                    <item.icon size={20} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em] mb-1 leading-tight">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-bold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/5 flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-slate-900 flex items-center justify-center text-[10px] font-black text-white">
                    {i === 4 ? '+50' : <User size={14} strokeWidth={1} />}
                  </div>
                ))}
              </div>
              <p className="text-[9px] font-black text-slate-700 uppercase tracking-[0.4em]">Trusted Globally</p>
            </div>
          </div>

          {/* Right Side: The Executive Audit Console - Monochrome */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="glass-card p-10 md:p-14 border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent shadow-[0_45px_100px_-20px_rgba(0,0,0,0.8)]">
              <div className="mb-10 text-center md:text-left">
                <h3 className="text-3xl font-black text-white mb-2 font-heading tracking-tight uppercase">Audit Console</h3>
                <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em]">Initialize Operational Request</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative group">
                    <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-800 group-focus-within:text-white transition-colors" size={16} strokeWidth={1} />
                    <input 
                      type="text" 
                      required
                      placeholder="Company Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl pl-14 pr-6 py-5 text-[11px] font-bold text-white outline-none focus:border-white/30 transition-all placeholder:text-slate-900 uppercase tracking-widest"
                    />
                  </div>
                  <div className="relative group">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-800 group-focus-within:text-white transition-colors" size={16} strokeWidth={1} />
                    <input 
                      type="email" 
                      required
                      placeholder="Corporate Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl pl-14 pr-6 py-5 text-[11px] font-bold text-white outline-none focus:border-white/30 transition-all placeholder:text-slate-900 uppercase tracking-widest"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <textarea 
                    required
                    placeholder="Describe specific manual bottlenecks..."
                    value={formData.query}
                    onChange={(e) => setFormData({...formData, query: e.target.value})}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-6 py-5 text-[11px] font-bold text-white outline-none focus:border-white/30 transition-all min-h-[140px] resize-none placeholder:text-slate-900 uppercase tracking-widest leading-relaxed"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting' || status === 'success'}
                  className={`w-full py-6 text-[11px] tracking-[0.5em] font-black uppercase flex items-center justify-center gap-4 rounded-full transition-all duration-700 ${
                    status === 'success' ? 'bg-slate-800 text-white' : 
                    status === 'submitting' ? 'bg-white/10 text-white/30' : 
                    'bg-white text-black hover:bg-slate-200 shadow-2xl active:scale-95'
                  }`}
                >
                  {status === 'idle' ? (
                    <>Initialize Audit Request <ArrowRight size={16} /></>
                  ) : status === 'submitting' ? (
                    'Syncing Intelligence...'
                  ) : (
                    'Submission Confirmed'
                  )}
                </button>
              </form>

              <div className="my-10 flex items-center gap-6">
                <div className="h-px bg-white/5 flex-1" />
                <span className="text-[8px] font-black text-slate-800 uppercase tracking-[0.5em]">OR</span>
                <div className="h-px bg-white/5 flex-1" />
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-between p-6 glass-card bg-white/[0.01] border border-white/10 hover:border-white/30 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white opacity-40">
                      <Calendar size={18} strokeWidth={1} />
                    </div>
                    <div>
                      <h4 className="text-[9px] font-black text-white uppercase tracking-[0.4em] mb-1">Direct Call</h4>
                      <p className="text-[8px] text-slate-700 font-black uppercase tracking-[0.4em]">Protocol Sync</p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-white opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
