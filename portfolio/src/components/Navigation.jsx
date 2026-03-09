import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`fixed top-0 w-full h-16 z-50 transition-all duration-300 flex items-center px-6 md:px-12 ${scrolled ? 'bg-[#080808]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="flex-1">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); window.history.pushState('', document.title, window.location.pathname + window.location.search); }} className="font-mono text-xl font-bold text-[#F7F7F7] glow-cyan hover:text-[#00E5FF] transition-colors cursor-pointer inline-block">AS</a>
      </div>
      <div className="hidden md:flex gap-8 items-center text-sm font-semibold">
        {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-[#8A8A8A] hover:text-[#00E5FF] transition-colors relative group">
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00E5FF] transition-all group-hover:w-full box-glow-cyan" />
          </a>
        ))}
        <div className="flex items-center gap-2 border border-[#00E5FF]/20 bg-[#00E5FF]/5 px-3 py-1 rounded-full text-xs text-[#00E5FF] font-mono">
          <span className="w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse" /> Open to Work
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
