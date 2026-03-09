import React from 'react';
import { CONFIG } from '../config';

const Footer = () => (
  <footer className="py-8 text-center border-t border-white/5 relative z-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 bg-[#080808]">
    <div className="flex items-center gap-4 mb-4 md:mb-0">
      <span className="font-mono text-lg font-bold text-[#F7F7F7] glow-cyan">AS</span>
      <span className="text-[#3D3D3D]">|</span>
      <span className="text-xs font-mono text-[#8A8A8A]">Built by {CONFIG.personal.name} · {new Date().getFullYear()}</span>
    </div>
    <div className="flex gap-6 items-center">
      <div className="flex gap-4">
        {[ {icon: 'GitHub', url: CONFIG.personal.github}, {icon: 'LinkedIn', url: CONFIG.personal.linkedin} ].map(link => (
          <a key={link.icon} href={link.url} target="_blank" rel="noreferrer" className="text-xs font-mono text-[#8A8A8A] hover:text-[#00E5FF] transition-colors hover:-translate-y-1 block transform">
            {link.icon}
          </a>
        ))}
      </div>
      <button onClick={() => { window.scrollTo({top:0, behavior:'smooth'}); window.history.pushState('', document.title, window.location.pathname + window.location.search); }} className="w-8 h-8 rounded bg-[#161616] border border-white/5 flex items-center justify-center text-[#8A8A8A] hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-all font-mono">↑</button>
    </div>
  </footer>
);

export default Footer;
