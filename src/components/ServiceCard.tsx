import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, LucideIcon } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group p-8 glass rounded-3xl transition-all duration-500 hover:bg-primary/10 hover:border-primary/50 hover:scale-105"
    >
      <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-primary group-hover:rotate-12 group-hover:glow-primary">
        <Icon className="text-primary group-hover:text-white transition-colors" size={32} />
      </div>
      <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-accent/60 text-lg leading-relaxed mb-8">
        {description}
      </p>
      <div className="flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform">
        Learn More <ArrowUpRight size={20} />
      </div>
    </motion.div>
  );
}
