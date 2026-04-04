import { motion } from 'framer-motion';
import { Calendar, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-48 pb-24 px-6 bg-black min-h-screen">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col mb-32 items-center text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[9px] font-black text-primary uppercase tracking-[0.4em]">
            <Calendar size={12} strokeWidth={3} />
            Initialize Operational Sync
          </div>
          <h1 className="text-4xl md:text-7xl font-black font-heading text-white tracking-tighter leading-[1.0] uppercase max-w-5xl">
            Book A <br /><span className="text-white/20">Discovery</span> Call.
          </h1>
          <p className="max-w-2xl text-slate-500 text-lg md:text-xl font-medium italic italic">
            Schedule a short call where we understand your recruitment workflow and identify areas where automation can reduce manual work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="glass-card p-12 space-y-10 border-primary/10 bg-primary/5">
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <PhoneCall size={28} strokeWidth={1} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Strategic Alignment</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">30 Minute Operational Audit</p>
                </div>
              </div>
              
              <ul className="space-y-6">
                {[
                  'Current Workflow Analysis',
                  'Friction Point Identification',
                  'Automation ROI Estimation',
                  'Implementation Roadmap'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-xs font-black text-slate-400 uppercase tracking-widest">
                    <ShieldCheck size={16} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 p-6 border-t border-white/5">
              <span className="text-[9px] font-black text-slate-700 uppercase tracking-[0.6em]">Secure Protocol Enabled</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-1 pb-16 bg-black border-white/10 shadow-[0_45px_100px_-20px_rgba(0,0,0,0.8)]"
          >
             <div className="p-10 md:p-14 text-center md:text-left mb-10 border-b border-white/5">
                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Discovery Console</h3>
                <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.4em]">Integrated Scheduling Terminal</p>
              </div>

              <div className="px-10 md:px-14">
                <div className="aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-center mb-10 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
                  <div className="relative z-10 space-y-4">
                    <Calendar size={48} strokeWidth={1} className="mx-auto text-primary" />
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Calendly Module Interface</p>
                  </div>
                </div>

                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary py-7 w-full"
                >
                  Book Your Discovery Call <ArrowRight size={18} />
                </a>
              </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
