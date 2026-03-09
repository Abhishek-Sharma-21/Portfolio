import React from 'react';
import { CONFIG } from '../config';
import { useInView } from '../hooks';

const AchievementsSection = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  return (
    <section id="achievements" className="py-24 bg-[linear-gradient(180deg,transparent_0%,rgba(0,229,255,0.02)_100%)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-extrabold text-center mb-16"><span className="text-[#00E5FF] font-mono mr-2">05.</span> Milestones</h2>
        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {CONFIG.achievements.map((ach, i) => (
            <div key={i} className={`bg-[#0F0F0F] border border-white/5 p-6 rounded-xl hover:border-[#00E5FF]/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] hover:-translate-y-1 transition-all duration-500 ease-out flex gap-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-3xl opacity-80">{ach.icon}</div>
              <div>
                <h4 className="font-bold text-[#F7F7F7] mb-2">{ach.title}</h4>
                <p className="text-[#8A8A8A] text-sm leading-relaxed">{ach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
