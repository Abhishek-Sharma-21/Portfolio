import { useState, useEffect, useRef } from 'react';

export function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const ob = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); ob.disconnect(); }
    }, options);
    ob.observe(ref.current);
    return () => ob.disconnect();
  }, [options.threshold]); // eslint-disable-line react-hooks/exhaustive-deps
  return [ref, isVisible];
}

export function useTypewriter(words, speed = 100) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [isDel, setIsDel] = useState(false);
  useEffect(() => {
    const cur = words[idx];
    const delay = isDel ? speed / 2 : speed;
    const to = setTimeout(() => {
      if (!isDel && text === cur) { setTimeout(() => setIsDel(true), 2000); }
      else if (isDel && text === '') { setIsDel(false); setIdx((idx + 1) % words.length); }
      else { setText(cur.substring(0, text.length + (isDel ? -1 : 1))); }
    }, delay);
    return () => clearTimeout(to);
  }, [text, isDel, idx, words, speed]);
  return text;
}

export function useCountUp(target, duration = 2000, trigger = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start;
    const update = (time) => {
      if (!start) start = time;
      const prog = Math.min((time - start) / duration, 1);
      setCount(Math.floor(prog * target));
      if (prog < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [target, duration, trigger]);
  return count;
}

export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return pos;
}

export function useScrollProgress() {
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const scroll = () => {
      const w = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProg(w / h);
    };
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, []);
  return prog;
}
