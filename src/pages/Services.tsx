import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '@/src/components/SectionHeading';
import ServiceCard from '@/src/components/ServiceCard';
import { Code, Layout, Smartphone, Search, Settings, Shield, Zap, Database, Globe, Layers, Cpu, Cloud } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const services = [
  { title: 'Website Design & Development', description: 'Crafting visually stunning and functional websites that reflect your brand identity.', icon: Layout },
  { title: 'E-Commerce Development', description: 'Building robust and secure online stores that drive sales and customer loyalty.', icon: Database },
  { title: 'UI/UX Design', description: 'Creating intuitive and engaging user experiences through data-driven design principles.', icon: Layers },
  { title: 'Website Optimization', description: 'Enhancing your website performance for lightning-fast load times and smooth interactions.', icon: Zap },
  { title: 'SEO Optimization', description: 'Improving your search engine visibility and driving high-quality organic traffic.', icon: Search },
  { title: 'Website Maintenance', description: 'Providing ongoing support and updates to keep your website secure and up-to-date.', icon: Settings },
  { title: 'Security & Backup', description: 'Implementing enterprise-grade security measures to protect your digital assets.', icon: Shield },
  { title: 'Integrations & Automation', description: 'Connecting your website with third-party tools and automating business workflows.', icon: Cpu },
  { title: 'Custom Development', description: 'Building bespoke digital solutions tailored to your unique business requirements.', icon: Code },
  { title: 'Cloud Solutions', description: 'Leveraging cloud technologies for scalable and reliable web infrastructure.', icon: Cloud },
  { title: 'Mobile-First Design', description: 'Ensuring your website looks and performs perfectly on all mobile devices.', icon: Smartphone },
  { title: 'Global Deployment', description: 'Deploying your digital products to a global audience with low-latency infrastructure.', icon: Globe },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 mb-32">
        <SectionHeading
          tagline="Our Expertise"
          title="Comprehensive Digital Solutions"
          subtitle="We offer a full spectrum of services to help your business succeed in the digital landscape."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            tagline="Our Approach"
            title="How We Deliver Excellence"
            subtitle="A collaborative and transparent process designed to deliver exceptional results."
          />
          <div className="flex flex-col gap-12">
            {[
              { title: 'Discovery & Strategy', desc: 'We start by understanding your business goals, target audience, and market landscape to develop a tailored digital strategy.' },
              { title: 'Design & Prototyping', desc: 'Our designers create intuitive UI/UX concepts and interactive prototypes to visualize your digital product.' },
              { title: 'Development & Testing', desc: 'Our developers build your solution using modern technologies and conduct rigorous testing to ensure quality and performance.' },
              { title: 'Launch & Optimization', desc: 'We deploy your website to the world and provide ongoing optimization to ensure long-term success.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  'flex flex-col md:flex-row items-center gap-12 p-12 glass rounded-[40px]',
                  i % 2 !== 0 && 'md:flex-row-reverse'
                )}
              >
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center font-display font-bold text-4xl text-white shrink-0 glow-primary">
                  {i + 1}
                </div>
                <div className={cn('flex flex-col gap-4', i % 2 !== 0 ? 'md:text-right' : 'md:text-left')}>
                  <h3 className="text-3xl font-display font-bold">{item.title}</h3>
                  <p className="text-accent/60 text-lg leading-relaxed max-w-2xl">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="glass p-12 md:p-24 rounded-[40px] text-center flex flex-col items-center gap-8 border-primary/20">
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight max-w-3xl">
              Ready to Start Your <span className="text-gradient">Next Project?</span>
            </h2>
            <p className="text-accent/60 text-lg md:text-xl max-w-2xl">
              Contact us today to discuss your digital needs and get a free consultation.
            </p>
            <button className="px-10 py-5 bg-primary hover:bg-secondary text-white rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 glow-primary">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
