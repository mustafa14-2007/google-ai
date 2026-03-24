import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from '@/src/components/SectionHeading';
import PricingCard from '@/src/components/PricingCard';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const pricing = [
  { title: 'Startup', price: '$999', features: ['Single Page Website', 'Responsive Design', 'Basic SEO', '1 Month Support', 'Standard Performance'] },
  { title: 'Business', price: '$2499', features: ['Multi-Page Website', 'Custom UI/UX', 'Advanced SEO', '3 Months Support', 'CMS Integration', 'High Performance'], recommended: true },
  { title: 'Enterprise', price: '$4999', features: ['E-Commerce Solution', 'Custom Integrations', 'Priority Support', 'Performance Optimization', 'Security Audit', 'Dedicated Manager'] },
];

const faqs = [
  { question: 'How long does a project take?', answer: 'The timeline depends on the complexity of the project. A standard website typically takes 2-4 weeks, while more complex web applications can take 8-12 weeks.' },
  { question: 'What technologies do you use?', answer: 'We use modern, high-performance technologies such as Next.js, React, Tailwind CSS, GSAP, and Framer Motion to ensure your website is fast, secure, and scalable.' },
  { question: 'Do you offer ongoing support?', answer: 'Yes, we offer various support and maintenance plans to keep your website up-to-date, secure, and performing at its best.' },
  { question: 'Can you help with SEO?', answer: 'Absolutely! We integrate SEO best practices from the ground up and offer advanced SEO optimization services to improve your search engine visibility.' },
  { question: 'What is your payment structure?', answer: 'We typically require a 50% deposit to start the project, with the remaining balance due upon completion and launch.' },
];

function FAQItem({ question, answer, index }: { question: string, answer: string, index: number }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-white/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between gap-4 text-left group"
      >
        <h3 className={cn(
          'text-xl md:text-2xl font-display font-bold transition-colors',
          isOpen ? 'text-primary' : 'text-accent/80 group-hover:text-primary'
        )}>
          {question}
        </h3>
        <div className={cn(
          'w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all',
          isOpen ? 'bg-primary border-primary text-white rotate-180' : 'bg-white/5 text-accent/40 group-hover:bg-primary group-hover:text-white group-hover:border-primary'
        )}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-accent/60 text-lg leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 mb-32">
        <SectionHeading
          tagline="Pricing Plans"
          title="Transparent and Fair Pricing"
          subtitle="Choose the perfect plan to accelerate your digital growth and achieve your business goals."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, i) => (
            <PricingCard key={i} {...plan} index={i} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            tagline="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our services, process, and pricing."
          />
          <div className="max-w-4xl mx-auto flex flex-col">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Need a <span className="text-gradient">Custom Quote?</span>
          </h2>
          <p className="text-accent/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            If our standard plans don't fit your needs, contact us for a tailored solution that matches your unique requirements.
          </p>
          <button className="px-10 py-5 bg-primary hover:bg-secondary text-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 glow-primary">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}
