import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, BookOpen } from 'lucide-react';

const Hero = () => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
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
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-black px-6">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-10 backdrop-blur-3xl group cursor-pointer hover:border-primary/40 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary group-hover:text-white transition-colors">
              Recruitment AI Infrastructure
            </span>
          </motion.div>
          
          <div className="relative mb-12 max-w-5xl">
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl md:text-7xl lg:text-8xl font-black leading-[1.0] font-heading tracking-tight text-white uppercase"
            >
              Reduce Recruiter Workload by <br />
              <span className="text-primary italic">40–60%</span> Using <span className="text-white">AI Workflow Automation.</span>
            </motion.h1>
          </div>
          
          <div className="flex flex-col items-center gap-12 max-w-3xl">
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-white leading-relaxed font-medium">
              We help recruitment agencies eliminate repetitive tasks like resume screening, sourcing, outreach, and interview coordination — <span className="text-white font-bold">so your recruiters can focus on placements and revenue.</span>
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary"
              >
                Book a Free Discovery Call <Zap size={16} fill="currentColor" />
              </a>
              <a 
                href="#how-it-works" 
                onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-secondary"
              >
                See How It Works <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants} 
            className="mt-24 w-full max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/5"
          >
            {[
              { val: '60%', label: 'Workload Reduction', icon: Zap },
              { val: '3x', label: 'Candidate Reach', icon: Target },
              { val: '15h+', label: 'Saved Weekly', icon: BookOpen },
              { val: 'ROI', label: 'Driven Systems', icon: ArrowRight }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-1">{stat.val}</span>
                <span className="text-[9px] text-white font-bold uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
