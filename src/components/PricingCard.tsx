import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
  index: number;
}

export default function PricingCard({ title, price, features, recommended, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        'p-10 glass rounded-3xl relative flex flex-col gap-8 transition-all duration-500 hover:scale-105 group',
        recommended ? 'bg-primary/10 border-primary/50 glow-primary' : 'hover:bg-primary/5'
      )}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-widest">
          Recommended
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-display font-bold text-accent/80 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-display font-bold text-white">{price}</span>
          <span className="text-accent/40 text-sm">/ project</span>
        </div>
      </div>
      <ul className="flex flex-col gap-4 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-accent/60 text-sm">
            <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Check size={12} />
            </div>
            {feature}
          </li>
        ))}
      </ul>
      <button className={cn(
        'w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2',
        recommended ? 'bg-primary text-white hover:bg-secondary' : 'bg-white/5 text-accent hover:bg-primary hover:text-white'
      )}>
        Get Started <ArrowRight size={20} />
      </button>
    </motion.div>
  );
}
