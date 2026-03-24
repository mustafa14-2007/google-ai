import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Code, Layout, Smartphone, Search, Settings, Shield, Zap, CheckCircle2 } from 'lucide-react';
import ThreeBackground from '@/src/components/ThreeBackground';
import SectionHeading from '@/src/components/SectionHeading';
import ServiceCard from '@/src/components/ServiceCard';
import PortfolioCard from '@/src/components/PortfolioCard';
import PricingCard from '@/src/components/PricingCard';
import TechStack from '@/src/components/TechStack';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: 'Web Development', description: 'Building fast, scalable, and secure web applications using modern technologies.', icon: Code },
  { title: 'UI/UX Design', description: 'Creating intuitive and visually stunning user experiences that convert visitors into customers.', icon: Layout },
  { title: 'Mobile Solutions', description: 'Developing responsive and high-performance mobile-first web experiences.', icon: Smartphone },
  { title: 'SEO Optimization', description: 'Improving your search engine visibility and driving organic traffic to your business.', icon: Search },
];

const portfolio = [
  { title: 'Lumina SaaS', category: 'Web App', image: 'https://picsum.photos/seed/lumina/1200/800' },
  { title: 'E-Commerce Pro', category: 'E-Commerce', image: 'https://picsum.photos/seed/ecommerce/1200/800' },
  { title: 'Fintech Dashboard', category: 'UI/UX', image: 'https://picsum.photos/seed/fintech/1200/800' },
  { title: 'Creative Studio', category: 'Branding', image: 'https://picsum.photos/seed/studio/1200/800' },
];

const pricing = [
  { title: 'Startup', price: '$999', features: ['Single Page Website', 'Responsive Design', 'Basic SEO', '1 Month Support'] },
  { title: 'Business', price: '$2499', features: ['Multi-Page Website', 'Custom UI/UX', 'Advanced SEO', '3 Months Support', 'CMS Integration'], recommended: true },
  { title: 'Enterprise', price: '$4999', features: ['E-Commerce Solution', 'Custom Integrations', 'Priority Support', 'Performance Optimization', 'Security Audit'] },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.5,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <ThreeBackground />
        
        <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-10 text-center">
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="px-4 py-1 glass rounded-full text-primary font-display font-bold text-xs uppercase tracking-widest mb-4"
            >
              Award-Winning Digital Agency
            </motion.div>
            
            <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tighter max-w-5xl">
              Crafting <span className="text-gradient">Clean</span>, Scalable Web Experiences
            </h1>
            
            <p className="hero-text text-accent/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              We empower startups and growing businesses with high-performance digital solutions that drive growth and innovation.
            </p>
            
            <div className="hero-text flex flex-col sm:flex-row items-center gap-6 mt-8">
              <button className="px-10 py-5 bg-primary hover:bg-secondary text-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 glow-primary">
                Start Your Project <ArrowRight size={20} />
              </button>
              <button className="px-10 py-5 glass hover:bg-white/10 text-accent rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95">
                View Portfolio
              </button>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-accent/30"
        >
          <span className="text-xs uppercase tracking-widest font-bold">Scroll Down</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-card/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass p-4">
                <img
                  src="https://picsum.photos/seed/agency/800/800"
                  alt="SMQ Agency"
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl hidden md:block glow-primary">
                <div className="flex flex-col">
                  <span className="text-4xl font-display font-bold text-primary">50+</span>
                  <span className="text-accent/60 text-sm font-bold uppercase tracking-widest">Projects Completed</span>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-8">
              <SectionHeading
                align="left"
                tagline="About SMQ"
                title="We Build the Future of the Web"
                subtitle="At SMQ, we combine technical excellence with creative vision to deliver digital products that stand out in a crowded market."
                className="mb-0"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                {[
                  { title: 'Performance First', desc: 'Lightning fast load times and smooth interactions.', icon: Zap },
                  { title: 'Secure by Design', desc: 'Enterprise-grade security for your peace of mind.', icon: Shield },
                  { title: 'Scalable Architecture', desc: 'Built to grow with your business needs.', icon: Settings },
                  { title: 'SEO Optimized', desc: 'Dominating search results from day one.', icon: Search },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                      <item.icon size={24} />
                    </div>
                    <h4 className="text-xl font-display font-bold">{item.title}</h4>
                    <p className="text-accent/60 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-dark">
        <div className="container mx-auto px-6">
          <SectionHeading
            tagline="Our Services"
            title="Comprehensive Web Solutions"
            subtitle="We offer a full suite of digital services to help your business thrive online."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-card/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading
            tagline="Our Process"
            title="How We Bring Your Vision to Life"
            subtitle="A streamlined, collaborative approach to delivering high-quality web experiences."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />
            
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals, audience, and market landscape.' },
              { step: '02', title: 'Design', desc: 'Creating intuitive UI/UX and visual concepts.' },
              { step: '03', title: 'Development', desc: 'Building your solution with clean, scalable code.' },
              { step: '04', title: 'Launch', desc: 'Optimizing, testing, and deploying to the world.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-6 relative z-10"
              >
                <div className="w-20 h-20 bg-dark border border-primary/50 rounded-full flex items-center justify-center font-display font-bold text-3xl text-primary glow-primary">
                  {item.step}
                </div>
                <h4 className="text-2xl font-display font-bold">{item.title}</h4>
                <p className="text-accent/60 text-sm leading-relaxed max-w-[200px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 bg-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <SectionHeading
              align="left"
              tagline="Portfolio"
              title="Selected Works"
              subtitle="A showcase of our recent projects and digital innovations."
              className="mb-0"
            />
            <button className="px-8 py-4 glass hover:bg-primary hover:text-white rounded-full font-bold transition-all flex items-center gap-2">
              View All Projects <ArrowRight size={18} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, i) => (
              <PortfolioCard key={i} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Pricing Section */}
      <section className="py-32 bg-dark">
        <div className="container mx-auto px-6">
          <SectionHeading
            tagline="Pricing"
            title="Transparent Plans for Every Stage"
            subtitle="Choose the perfect plan to accelerate your digital growth."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <PricingCard key={i} {...plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 blur-[150px] rounded-full -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass p-12 md:p-24 rounded-[40px] text-center flex flex-col items-center gap-8 border-primary/20">
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight max-w-3xl">
              Ready to Build Your <span className="text-gradient">Digital Legacy?</span>
            </h2>
            <p className="text-accent/60 text-lg md:text-xl max-w-2xl">
              Let's collaborate to create a web experience that drives results and sets you apart from the competition.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
              <button className="px-10 py-5 bg-primary hover:bg-secondary text-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 glow-primary">
                Get a Free Quote <ArrowRight size={20} />
              </button>
              <button className="px-10 py-5 glass hover:bg-white/10 text-accent rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
