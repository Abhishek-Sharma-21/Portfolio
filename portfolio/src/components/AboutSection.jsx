import React from 'react';
import { CONFIG } from '../config';
import { useInView, useCountUp } from '../hooks';

const StatCard = ({ stat, trigger, delay }) => {
  const [ref, isVisible] = useInView({ threshold: 0.5 });
  const count = useCountUp(stat.value, 2000, isVisible && trigger);
  return (
    <div ref={ref} className={`bg-[#0F0F0F] border border-white/5 p-5 rounded-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="text-3xl font-extrabold text-[#F7F7F7] mb-1 font-mono">{count}{stat.suffix}</div>
      <div className="text-xs text-[#8A8A8A] leading-tight">{stat.label}</div>
    </div>
  );
};

const AboutSection = () => {
  const [ref, isVisible] = useInView({ threshold: 0.2 });
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div ref={ref} className={`grid md:grid-cols-2 gap-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="flex flex-col items-center md:items-start group">
          <div className="relative w-72 h-72 rounded-full border border-dashed border-[#00E5FF]/40 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.05)_0%,transparent_70%)]">
            <div className="font-mono text-6xl font-bold text-[#F7F7F7] glow-cyan">{CONFIG.personal.avatarInitials}</div>
            <div className="absolute -bottom-4 bg-[#080808] border border-[#00E5FF]/20 px-4 py-1 rounded-full text-xs font-mono text-[#8A8A8A]">
              {CONFIG.roles[0]} · {CONFIG.personal.location} 📍
            </div>
            <div className="absolute -right-8 bottom-12 bg-[#0F0F0F] border border-white/10 p-4 rounded-xl shadow-lg backdrop-blur-md transform group-hover:-translate-y-2 group-hover:rotate-2 transition-all">
              <div className="text-[#00E5FF] font-mono text-xs mb-1">{"{"}</div>
              <div className="px-4 text-xs font-mono space-y-1 text-[#F7F7F7]">
                <div><span className="text-[#FF6B35]">degree:</span> "B.Tech CS",</div>
                <div><span className="text-[#FF6B35]">cgpa:</span> "7.41",</div>
                <div><span className="text-[#FF6B35]">status:</span> "Final Year"</div>
              </div>
              <div className="text-[#00E5FF] font-mono text-xs mt-1">{"}"}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-16 w-full">
            {CONFIG.stats.map((stat, i) => (
              <StatCard key={i} stat={stat} trigger={isVisible} delay={i * 100} />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-mono text-[#00E5FF] mb-4">// About Me</p>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Turning ideas into full-stack realities.</h3>
          <div className="space-y-6 text-[#8A8A8A] text-lg leading-relaxed">
            <p>My foundation lies heavily in Data Structures and Algorithms, giving me the analytical edge to solve complex system problems efficiently. From writing raw code to architecting full-stack enterprise applications, my journey is driven by optimization.</p>
            <p>I have a keen interest in integrating AI models directly into scalable applications. My real-world experience at AppSquadz taught me how to bridge the gap between clean backend architectures and robust frontends, particularly optimizing APIs and managing complex queries.</p>
            <p>As a final-year CS engineering student, I am constantly researching open-source architectures, fine-tuning my understanding of RBAC, and exploring the bleeding edge of Web3 and ML integrations.</p>
          </div>
          <div className="w-full h-px bg-[repeating-linear-gradient(90deg,var(--border),var(--border)_4px,transparent_4px,transparent_8px)] my-8" />
          <p className="text-sm font-bold text-[#F7F7F7] mb-4">Currently exploring:</p>
          <div className="flex flex-wrap gap-3">
            {['Next.js 15', 'AI APIs', 'TypeScript'].map(chip => (
              <span key={chip} className="px-4 py-1.5 bg-[#161616] border border-white/5 rounded-full text-xs font-mono text-[#8A8A8A]">{chip}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
