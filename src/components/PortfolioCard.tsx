import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
}

export default function PortfolioCard({ title, category, image, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl aspect-video bg-card cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm"
        referrerPolicy="no-referrer"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            <span className="text-primary font-display font-bold text-sm uppercase tracking-widest">
              {category}
            </span>
            <h3 className="text-3xl font-display font-bold text-white">
              {title}
            </h3>
          </div>
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-200 hover:rotate-45">
            <ArrowUpRight size={32} />
          </div>
        </div>
      </div>

      {/* Border Glow */}
      <div className="absolute inset-0 border border-white/10 group-hover:border-primary/50 transition-colors duration-500 rounded-3xl pointer-events-none" />
    </motion.div>
  );
}
