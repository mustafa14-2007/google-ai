import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  className?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  tagline,
  className,
  align = 'center',
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col gap-4 mb-16',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {tagline && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-primary font-display font-bold text-sm uppercase tracking-widest"
        >
          {tagline}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-accent/60 text-lg md:text-xl max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
