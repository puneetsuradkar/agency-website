import { motion } from 'framer-motion';
import { ArrowRight, Calendar, PhoneCall } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.05),transparent_60%)] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          <div className="space-y-12 text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[9px] font-black text-primary uppercase tracking-[0.4em]">
                <Calendar size={12} strokeWidth={3} />
                Strategic Discovery Sync
              </div>
              <h2 className="text-4xl md:text-7xl font-black font-heading text-white tracking-tighter leading-[1.0] uppercase">
                Want to Reduce <br />
                <span className="text-white/20">Workload &</span> <br />
                Increase Placements?
              </h2>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed italic font-medium">
                "Book a free discovery call and see how automation can transform your recruitment process."
              </p>
            </div>

            <div className="p-8 glass-card bg-primary/5 border border-primary/10 flex items-center justify-between group">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <PhoneCall size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-black text-white uppercase tracking-widest leading-tight">Short Alignment Call</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">30 Minutes Discovery Protocol</p>
                </div>
              </div>
              <ArrowRight size={24} className="text-primary group-hover:translate-x-2 transition-transform" />
            </div>
            
            <p className="text-[9px] font-black text-slate-700 uppercase tracking-[0.4em] pt-8 border-t border-white/5">
              Secure Architecture Protocol Enabled.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="glass-card p-10 md:p-14 border border-white/10 bg-black shadow-[0_45px_100px_-20px_rgba(0,0,0,0.8)]">
              <div className="mb-10 text-center md:text-left">
                <h3 className="text-3xl font-black text-white mb-2 font-heading tracking-tight uppercase">Discovery Console</h3>
                <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em]">Initialize Operational Request</p>
              </div>

              <div className="bg-white/5 rounded-2xl border border-white/10 p-1 bg-black overflow-hidden mb-10">
                <div className="aspect-video flex items-center justify-center text-slate-800 text-center px-10">
                  <div className="space-y-4">
                    <Calendar size={48} strokeWidth={1} className="mx-auto text-primary" />
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed">
                      Calendly Integration Module <br />
                      <span className="text-slate-500 text-[8px] italic">Inject production scheduling script here</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary py-7"
                >
                  Book Your Free Call Now <ArrowRight size={18} />
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
