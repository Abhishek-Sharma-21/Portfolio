import React from 'react';
import { CONFIG } from '../config';
import { useInView } from '../hooks';

const SkillsSection = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[24px_24px] opacity-4" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-6 mb-16">
          <div className="flex-1 h-px bg-linear-to-r from-transparent to-[#00E5FF]/20" />
          <h2 className="text-4xl font-extrabold text-center"><span className="text-[#00E5FF] font-mono mr-2">02.</span> Technical Arsenal</h2>
          <div className="flex-1 h-px bg-linear-to-l from-transparent to-[#00E5FF]/20" />
        </div>
        <div ref={ref} className="grid md:grid-cols-2 gap-12">
          {Object.entries(CONFIG.skills).map(([category, skills], catIdx) => (
             <div key={category} className="space-y-6">
                <h4 className="font-mono text-sm text-[#8A8A8A] uppercase tracking-widest">{category}</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, sIdx) => (
                    <span key={skill} 
                      className={`px-5 py-2.5 bg-[#0F0F0F] border border-white/10 rounded-full text-sm font-semibold text-[#F7F7F7] hover:border-[#00E5FF] hover:text-[#00E5FF] hover:scale-[1.04] cursor-crosshair box-glow-cyan-hover transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                      style={{ transitionDelay: `${(catIdx * 4 + sIdx) * 40}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
