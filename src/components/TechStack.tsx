import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { cn } from '@/src/lib/utils';

const techStack = [
  { name: 'TypeScript', icon: 'TS' },
  { name: 'Next.js', icon: 'NX' },
  { name: 'React', icon: 'RE' },
  { name: 'Tailwind CSS', icon: 'TW' },
  { name: 'Three.js', icon: '3J' },
  { name: 'Framer Motion', icon: 'FM' },
  { name: 'GSAP', icon: 'GS' },
  { name: 'Python', icon: 'PY' },
  { name: 'Figma', icon: 'FI' },
  { name: 'Blender', icon: 'BL' },
  { name: 'Photoshop', icon: 'PS' },
];

export default function TechStack() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const totalWidth = marquee.scrollWidth / 2;
    
    gsap.to(marquee, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 mb-16 text-center">
        <h3 className="text-primary font-display font-bold text-sm uppercase tracking-widest mb-4">
          Tech Stack
        </h3>
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          Powering the Digital Frontier
        </h2>
      </div>

      <div className="relative flex overflow-hidden group">
        <div
          ref={marqueeRef}
          className="flex items-center gap-12 whitespace-nowrap py-12"
        >
          {/* Double the list for seamless loop */}
          {[...techStack, ...techStack].map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-8 py-4 glass rounded-2xl transition-all duration-500 hover:bg-primary/20 hover:border-primary/50 hover:scale-110 group/item"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center font-display font-bold text-xl text-accent/50 group-hover/item:text-primary transition-colors">
                {tech.icon}
              </div>
              <span className="font-display font-bold text-2xl text-accent/30 group-hover/item:text-accent transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-dark to-transparent z-10" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
