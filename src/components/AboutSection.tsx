import { Target, Search, Layers, CircleUserRound } from 'lucide-react';

const AboutSection = () => {
  const steps = [
    { text: 'Understand your workflow', icon: Search },
    { text: 'Identify inefficiencies', icon: Target },
    { text: 'Implement saving-systems', icon: Layers }
  ];

  return (
    <section id="about" className="section-padding bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(59,130,246,0.03),transparent_60%)] pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-slate-500 uppercase tracking-[0.4em]">
                <CircleUserRound size={12} strokeWidth={3} />
                Agency Mission Statement
              </div>
              <h2 className="text-4xl md:text-7xl font-black font-heading text-white tracking-tighter leading-[1.0] uppercase">
                We Architect <br /><span className="text-white/20">Operational</span> <br />Freedom.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-xl font-medium italic">
                "We specialize in helping recruitment agencies optimize their operations using AI and automation. 
                Our approach is simple: we convert repetitive manual labor into autonomous logical assets."
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-6 p-6 glass-card bg-white/[0.01] border-white/5 hover:border-white/20 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <step.icon size={20} strokeWidth={1} />
                  </div>
                  <span className="text-lg font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors">{step.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-card aspect-square bg-white/[0.01] border-white/5 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
              <div className="relative z-10 text-center space-y-4">
                <span className="text-9xl font-black text-white/5 block font-heading">AI</span>
                <span className="text-[10px] font-black text-slate-700 uppercase tracking-[0.6em]">Systematic Architecture</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
