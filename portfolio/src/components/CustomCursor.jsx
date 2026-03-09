import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;
  return (
    <>
      <div className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-100 transform -translate-x-1/2 -translate-y-1/2" style={{ left: pos.x, top: pos.y, boxShadow: '0 0 10px #00E5FF' }} />
      <div className="fixed top-0 left-0 w-8 h-8 border border-cyan-400/50 rounded-full pointer-events-none z-99 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out" style={{ left: pos.x, top: pos.y }} />
    </>
  );
};

export default CustomCursor;
