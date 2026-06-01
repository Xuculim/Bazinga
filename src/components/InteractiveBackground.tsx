import { useEffect, useState, useRef } from 'react';

export function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate offset from center
      const x = (e.clientX - window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2);
      setMousePos({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0e0e10]" ref={containerRef}>
      <div 
        className="absolute rounded-full blur-[80px] opacity-30 transition-transform duration-200 ease-out will-change-transform bg-[#ff00e5] w-[60vw] h-[60vw] -top-[10%] -left-[5%]" 
        style={{ transform: `translate(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px)` }}
      />
      <div 
        className="absolute rounded-full blur-[80px] opacity-30 transition-transform duration-200 ease-out will-change-transform bg-[#00cfff] w-[50vw] h-[50vw] top-[40%] -right-[10%]" 
        style={{ transform: `translate(${mousePos.x * -0.03}px, ${mousePos.y * -0.03}px)` }}
      />
      <div 
        className="absolute rounded-full blur-[80px] opacity-30 transition-transform duration-200 ease-out will-change-transform bg-[#a690ff] w-[40vw] h-[40vw] bottom-[5%] left-[20%]" 
        style={{ transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)` }}
      />
      <div 
        className="absolute rounded-full blur-[80px] opacity-30 transition-transform duration-200 ease-out will-change-transform bg-[#ffe483] w-[30vw] h-[30vw] top-[10%] left-[60%]" 
        style={{ transform: `translate(${mousePos.x * -0.04}px, ${mousePos.y * -0.04}px)` }}
      />
    </div>
  );
}
