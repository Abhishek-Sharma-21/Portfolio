import React from 'react';
import { CONFIG } from '../config';
import { useInView, useScrollProgress } from '../hooks';

const TimelineEntry = ({ data, isVisible, delay, isEdu }) => (
  <div className={`relative mb-12 transition-all duration-700 ease-out group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: `${delay}ms` }}>
    <div className="absolute -left-10 w-4 h-4 rounded-full bg-[#080808] border-2 border-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:scale-125 transition-all box-glow-cyan-hover z-10" />
    <div className="flex flex-col mb-2">
      <h4 className="text-xl font-bold text-[#F7F7F7] group-hover:text-[#00E5FF] transition-colors">{isEdu ? data.degree : data.role}</h4>
      <div className="flex items-center gap-3 text-sm mt-1">
        <span className="font-mono text-[#FF6B35]">{isEdu ? data.institution : data.company}</span>
        <span className="text-[#3D3D3D]">•</span>
        <span className="font-mono text-[#8A8A8A] text-xs">{data.period}</span>
      </div>
    </div>
    <div className="text-xs font-mono text-[#00E5FF]/70 mb-4 bg-[#00E5FF]/5 w-max px-2 py-1 rounded">{data.location} {isEdu && data.degree.includes('B.Tech') && '· Final Year'}</div>
    {!isEdu && <ul className="space-y-2 text-[#8A8A8A] text-sm leading-relaxed">
      {data.achievements.map((ach, i) => <li key={i} className="flex gap-3"><span className="text-[#00E5FF]">▹</span><span className="flex-1">{ach}</span></li>)}
    </ul>}
    {isEdu && <div className="text-sm font-mono text-[#F7F7F7] mt-2 inline-block px-3 py-1 border border-white/10 rounded-md bg-[#161616]">{data.score}</div>}
  </div>
);

const ExperienceEducationSection = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  const prog = useScrollProgress();
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16" ref={ref}>
        <div className={`flex-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h3 className="text-3xl font-extrabold font-mono text-[#F7F7F7] mb-12 flex items-center"><span className="text-[#00E5FF] mr-4 text-xl">03.</span> Experience</h3>
          <div className="relative pl-8 border-l border-white/10">
            <div className="absolute top-0 -left-px w-[2px] bg-linear-to-b from-[#00E5FF] to-transparent origin-top" style={{ height: `${Math.min(prog * 200, 100)}%`, filter: 'drop-shadow(0 0 10px #00E5FF)' }} />
            {CONFIG.experience.map((exp, i) => <TimelineEntry key={i} data={exp} isVisible={isVisible} delay={i*150} isEdu={false} />)}
          </div>
        </div>
        <div className={`flex-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
          <h3 className="text-3xl font-extrabold font-mono text-[#F7F7F7] mb-12 flex items-center"><span className="text-[#00E5FF] mr-4 text-xl">04.</span> Education</h3>
          <div className="relative pl-8 border-l border-white/10">
            {CONFIG.education.map((edu, i) => <TimelineEntry key={i} data={edu} isVisible={isVisible} delay={300 + i*150} isEdu={true} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducationSection;
