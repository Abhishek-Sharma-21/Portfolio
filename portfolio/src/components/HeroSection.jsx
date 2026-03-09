import React, { useEffect, useRef } from 'react';
import { CONFIG } from '../config';
import { useTypewriter } from '../hooks';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5
    }));
    let req;
    const render = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = 'rgba(0, 229, 255, 0.4)';
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.1)';
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2); ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
          }
        }
      }
      req = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(req);
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-40" />;
};

const HeroSection = () => {
  const tw = useTypewriter(CONFIG.roles, 100);
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col justify-center px-6 md:px-12">
      <ParticleCanvas />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,8,8,0)_0%,rgba(8,8,8,1)_100%)] z-0 pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto w-full pt-16">
        <p className="font-mono text-[#00E5FF] mb-4 opacity-0 animate-[fadeUp_0.6s_ease-out_0.1s_forwards]">// Full-Stack Developer & CS Engineer</p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[88px] font-extrabold mb-4 flex flex-wrap opacity-0 animate-[fadeUp_0.6s_ease-out_0.25s_forwards] wrap-break-word">
          {CONFIG.personal.name}
        </h1>
        <h2 className="text-2xl md:text-4xl text-[#8A8A8A] font-semibold mb-6 flex h-10 items-center opacity-0 animate-[fadeUp_0.6s_ease-out_0.5s_forwards]">
          I build <span className="text-[#00E5FF] ml-2 font-mono glow-cyan">{tw}</span>
          <span className="animate-ping border-r-2 border-[#00E5FF] h-full ml-1" />
        </h2>
        <p className="text-[#8A8A8A] max-w-[520px] mb-10 text-lg opacity-0 animate-[fadeUp_0.6s_ease-out_0.7s_forwards]">
          {CONFIG.personal.tagline}
        </p>
        <div className="flex gap-4 items-center mb-12 opacity-0 animate-[fadeUp_0.6s_ease-out_0.85s_forwards]">
          <a href="#projects" className="bg-[#00E5FF] text-[#080808] px-8 py-3 rounded-md font-bold hover:scale-95 transition-transform box-glow-cyan">View My Work</a>
          <a href={CONFIG.personal.github} target="_blank" rel="noreferrer" className="px-8 py-3 border border-white/20 text-white rounded-md font-bold hover:bg-white/5 hover:scale-95 transition-all">GitHub Profile →</a>
        </div>
        <div className="flex flex-wrap gap-6 font-mono text-xs text-[#3D3D3D] opacity-0 animate-[fadeUp_0.6s_ease-out_1s_forwards]">
          <span>{CONFIG.personal.email}</span>
          <span>{CONFIG.personal.phone}</span>
          <span>{CONFIG.personal.location}</span>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-[fadeIn_0.6s_ease-out_1s_forwards] z-10"><div className="text-[#3D3D3D] flex justify-center animate-bounce">↓</div></div>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
      `}</style>
    </section>
  );
};

export default HeroSection;
