import React, { useRef } from 'react';
import { CONFIG } from '../config';
import { useInView } from '../hooks';

const FeaturedProjectCard = ({ project, isVisible }) => {
  return (
    <div className={`w-full bg-[#0F0F0F] border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="flex justify-between items-start mb-6">
          <span className="font-mono text-[#00E5FF] text-xs px-3 py-1 bg-[#00E5FF]/10 rounded-full border border-[#00E5FF]/20">Featured Project</span>
          <span className="font-mono text-[#8A8A8A] text-xs px-3 py-1 border border-white/10 rounded-full">{project.status}</span>
        </div>
        <h3 className="text-3xl font-extrabold mb-4">{project.title}</h3>
        <p className="text-[#8A8A8A] leading-relaxed mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => <span key={t} className="text-xs font-mono text-[#FF6B35] bg-[#FF6B35]/10 px-2 py-1 border border-[#FF6B35]/20 rounded">{t}</span>)}
        </div>
        <div className="font-mono text-xs text-[#3D3D3D] mb-8 pb-4 border-b border-white/5">{project.metrics}</div>
        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#00E5FF] font-bold text-sm hover:underline w-max">
          View Source Code <span className="text-lg">→</span>
        </a>
      </div>
      <div className="w-full md:w-1/2 bg-[#080808] border-l border-white/5 p-8 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-linear-to-tr from-[#00E5FF]/5 to-transparent pointer-events-none" />
        <svg viewBox="0 0 400 300" className="w-full max-w-sm h-auto opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700">
           <circle cx="200" cy="150" r="80" fill="none" stroke="#00E5FF" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
           <circle cx="200" cy="150" r="120" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
           <path d="M120,150 L280,150 M200,70 L200,230" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
           <circle cx="200" cy="150" r="30" fill="#00E5FF" opacity="0.2" className="animate-pulse" />
           <circle cx="120" cy="150" r="6" fill="#FF6B35" />
           <circle cx="280" cy="150" r="6" fill="#FF6B35" />
           <circle cx="200" cy="70" r="6" fill="#FF6B35" />
           <circle cx="200" cy="230" r="6" fill="#FF6B35" />
        </svg>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, isVisible, delay }) => {
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; const y = e.clientY - rect.top;
    const centerX = rect.width / 2; const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    cardRef.current.style.boxShadow = '0 20px 40px rgba(0,229,255,0.1)';
  };
  const handleMouseLeave = () => {
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    cardRef.current.style.boxShadow = 'none';
  };
  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={`bg-[#161616]/50 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col h-full transition-all duration-300 ease-out origin-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}>
      <div className="flex justify-between items-center mb-6">
        <div className="w-2 h-2 rounded-full bg-[#00E5FF] box-glow-cyan" />
        <a href={project.github} target="_blank" rel="noreferrer" className="text-[#8A8A8A] hover:text-[#00E5FF] transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg></a>
      </div>
      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
      <p className="text-[#8A8A8A] text-sm leading-relaxed max-w-sm mb-6 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.slice(0, 3).map(t => <span key={t} className="text-[10px] font-mono border border-white/10 text-[#F7F7F7] px-2 py-1 rounded">{t}</span>)}
        {project.tech.length > 3 && <span className="text-[10px] font-mono border border-white/10 text-[#F7F7F7] px-2 py-1 rounded">+{project.tech.length - 3}</span>}
      </div>
      <div className="mt-auto font-mono text-[10px] text-[#3D3D3D]">{project.metrics}</div>
    </div>
  );
};

const ProjectsSection = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  const featured = CONFIG.projects.find(p => p.featured);
  const others = CONFIG.projects.filter(p => !p.featured).slice(0, 2);
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="font-mono text-[#00E5FF] mb-2">// Selected Works</p>
        <h2 className="text-4xl md:text-5xl font-extrabold">Building for Impact.</h2>
      </div>
      <div ref={ref} className="flex flex-col gap-8">
        {featured && <FeaturedProjectCard project={featured} isVisible={isVisible} />}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {others.map((p, i) => <ProjectCard key={p.id} project={p} isVisible={isVisible} delay={200 + i * 150} />)}
        </div>
        <div className={`mt-12 flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
          <button onClick={() => window.location.hash = '#/projects'} className="px-8 py-3 bg-transparent border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-sm rounded hover:bg-[#00E5FF]/10 hover:border-[#00E5FF] transition-all flex items-center gap-3 group">
            View Full Project Archive
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
