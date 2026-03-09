import React, { useState } from 'react';
import { CONFIG } from '../config';
import { useInView } from '../hooks';

const ContactSection = () => {
  const [ref, isVisible] = useInView({ threshold: 0.3 });
  const [status, setStatus] = useState('idle');
  
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    setStatus('loading'); 
    setTimeout(() => setStatus('success'), 1500); 
  };
  
  return (
    <section id="contact" className="py-32 relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,229,255,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div ref={ref} className={`max-w-3xl mx-auto px-6 w-full text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <p className="font-mono text-[#00E5FF] mb-4">// Let's Build Together</p>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">Got a project in mind?</h2>
        <p className="text-[#8A8A8A] text-lg mb-12 max-w-xl mx-auto">I'm currently open to internships, freelance opportunities, and collaborative challenges.</p>
        <a href={`mailto:${CONFIG.personal.email}`} className="text-2xl md:text-4xl font-bold text-[#F7F7F7] hover:text-[#00E5FF] transition-colors relative inline-block group mb-16 glow-cyan">
          {CONFIG.personal.email}
          <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#00E5FF] transition-all duration-300 group-hover:w-full box-glow-cyan" />
        </a>
        <form onSubmit={handleSubmit} className="text-left w-full max-w-lg mx-auto bg-[#080808] border border-white/10 p-8 rounded-2xl space-y-6 relative overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00E5FF]/20 group-focus-within:bg-[#00E5FF] transition-colors" />
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-[#8A8A8A] mb-2">$ name --set</label>
              <input required type="text" className="w-full bg-[#0F0F0F] border border-white/10 rounded px-4 py-3 font-mono text-sm text-[#F7F7F7] focus:outline-none focus:border-[#00E5FF]/50 focus:shadow-[0_0_15px_rgba(0,229,255,0.1)] transition-all" placeholder="_" />
            </div>
            <div>
              <label className="block text-xs font-mono text-[#8A8A8A] mb-2">$ email --set</label>
              <input required type="email" className="w-full bg-[#0F0F0F] border border-white/10 rounded px-4 py-3 font-mono text-sm text-[#F7F7F7] focus:outline-none focus:border-[#00E5FF]/50 focus:shadow-[0_0_15px_rgba(0,229,255,0.1)] transition-all" placeholder="_" />
            </div>
            <div>
              <label className="block text-xs font-mono text-[#8A8A8A] mb-2">$ message --write</label>
              <textarea required rows="4" className="w-full bg-[#0F0F0F] border border-white/10 rounded px-4 py-3 font-mono text-sm text-[#F7F7F7] focus:outline-none focus:border-[#00E5FF]/50 focus:shadow-[0_0_15px_rgba(0,229,255,0.1)] transition-all resize-none" placeholder="..."></textarea>
            </div>
          </div>
          <button type="submit" disabled={status!=='idle'} className={`w-full py-4 rounded font-bold transition-all ${status === 'success' ? 'bg-[#10B981] text-white' : 'bg-[#00E5FF] text-[#080808] hover:bg-cyan-300 box-glow-cyan'}`}>
            {status === 'idle' ? 'Execute payload.sh' : status === 'loading' ? 'Transmitting...' : '✓ Message Sent'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
