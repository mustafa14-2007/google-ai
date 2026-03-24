import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from '@/src/components/SectionHeading';
import PortfolioCard from '@/src/components/PortfolioCard';
import { cn } from '@/src/lib/utils';

const categories = ['All', 'Web App', 'E-Commerce', 'UI/UX', 'Branding'];

const projects = [
  { title: 'Lumina SaaS', category: 'Web App', image: 'https://picsum.photos/seed/lumina/1200/800' },
  { title: 'E-Commerce Pro', category: 'E-Commerce', image: 'https://picsum.photos/seed/ecommerce/1200/800' },
  { title: 'Fintech Dashboard', category: 'UI/UX', image: 'https://picsum.photos/seed/fintech/1200/800' },
  { title: 'Creative Studio', category: 'Branding', image: 'https://picsum.photos/seed/studio/1200/800' },
  { title: 'HealthTech Platform', category: 'Web App', image: 'https://picsum.photos/seed/health/1200/800' },
  { title: 'Fashion Store', category: 'E-Commerce', image: 'https://picsum.photos/seed/fashion/1200/800' },
  { title: 'Travel App', category: 'UI/UX', image: 'https://picsum.photos/seed/travel/1200/800' },
  { title: 'Modern Agency', category: 'Branding', image: 'https://picsum.photos/seed/agency/1200/800' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 mb-32">
        <SectionHeading
          tagline="Our Portfolio"
          title="Selected Digital Works"
          subtitle="A showcase of our recent projects and digital innovations across various industries."
        />

        {/* Filtering */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-8 py-3 rounded-full font-bold transition-all duration-300 border border-white/10',
                activeCategory === category
                  ? 'bg-primary text-white border-primary glow-primary scale-110'
                  : 'bg-white/5 text-accent/60 hover:bg-white/10 hover:text-accent'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <PortfolioCard {...project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Have a <span className="text-gradient">Vision?</span>
          </h2>
          <p className="text-accent/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Let's turn your ideas into reality with our expert design and development services.
          </p>
          <button className="px-10 py-5 bg-primary hover:bg-secondary text-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 glow-primary">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
