import { motion } from 'framer-motion';
import { ArrowRight, Activity, Zap, ShieldCheck, Sparkles } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8, 
        ease: [0.25, 1, 0.5, 1] 
      } 
    }
  } as any;

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-48 md:pb-40 overflow-hidden bg-black px-6">
      {/* Structural Gradients for Monochrome Depth */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      
      <div className="container max-w-7xl mx-auto relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* Status Badge - Monochrome Pass */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-10 backdrop-blur-3xl group cursor-pointer hover:border-white/30 transition-all duration-500 shadow-2xl">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,1)]" />
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-white transition-colors">
              Monolith AI Infrastructure
            </span>
            <div className="flex -space-x-1.5 ml-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-4 h-4 rounded-full border-2 border-black bg-slate-900" />
              ))}
            </div>
          </motion.div>
          
          {/* Main H1 Architecture - Monochrome Pass */}
          <div className="relative mb-12">
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.0] font-heading tracking-tight text-white uppercase"
            >
              Hire <br /> <span className="text-white">AI</span> <span className="text-white/20">Employees.</span>
            </motion.h1>
            <motion.div 
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 hidden lg:block text-white opacity-10"
            >
              <Sparkles size={120} strokeWidth={1} />
            </motion.div>
          </div>
          
          <div className="flex flex-col items-center gap-12">
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-medium italic">
              "Efficiency isn't about working harder—it's about orchestrating intelligence correctly." 
              <br /><span className="text-white font-bold not-italic">Deploying custom digital workforces globally.</span>
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-8">
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group relative px-14 py-7 rounded-full bg-white text-black font-black text-[11px] tracking-[0.4em] uppercase transition-all duration-500 hover:bg-slate-200 hover:scale-105 shadow-[0_20px_50px_-15px_rgba(255,255,255,0.15)]"
              >
                Start Deployment <span className="absolute right-6 group-hover:right-4 group-hover:opacity-100 opacity-0 transition-all"><ArrowRight size={16} /></span>
              </a>
              <a 
                href="#workflow" 
                onClick={(e) => { e.preventDefault(); document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="flex items-center gap-3 px-8 py-4 text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-[0.3em] transition-all group border-b border-transparent hover:border-white/20"
              >
                Our Protocol <ArrowRight size={14} className="group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Clinical Performance Stats - Monochrome Pass */}
          <motion.div 
            variants={itemVariants} 
            className="mt-32 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/5 pt-16"
          >
            {[
              { val: '100+', label: 'Digital Assets', icon: Activity },
              { val: '5k+', label: 'Sync Cycles', icon: Zap },
              { val: '100%', label: 'Logical Integrity', icon: ShieldCheck },
              { val: '24/7', label: 'Runtime Status', icon: Sparkles }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="flex items-center gap-3 mb-3">
                  <stat.icon size={12} className="text-white opacity-20" />
                  <span className="text-3xl md:text-5xl font-black text-white tracking-tighter">{stat.val}</span>
                </div>
                <div className="text-[10px] text-slate-600 font-black uppercase tracking-[0.4em]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Meta-Elements */}
      <div className="absolute hidden lg:flex flex-col gap-16 right-16 bottom-16 opacity-10 pointer-events-none">
        <div className="flex items-center gap-6 text-right">
          <span className="text-[9px] font-black text-white uppercase tracking-[0.4em] leading-none">Global <br /> Heartbeat</span>
          <Activity size={32} className="text-white animate-pulse" strokeWidth={1} />
        </div>
        <div className="flex items-center gap-6 text-right">
          <span className="text-[9px] font-black text-white uppercase tracking-[0.4em] leading-none">Logic <br /> Kernel</span>
          <Zap size={32} className="text-white" strokeWidth={1} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
