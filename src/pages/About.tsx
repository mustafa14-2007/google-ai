import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '@/src/components/SectionHeading';
import { CheckCircle2, Users, Trophy, Target, Heart } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Completed', value: '150+' },
  { label: 'Happy Clients', value: '80+' },
  { label: 'Awards Won', value: '12+' },
];

const values = [
  { title: 'Innovation', desc: 'Pushing the boundaries of what is possible on the web.', icon: Target },
  { title: 'Quality', desc: 'Uncompromising standards in design and development.', icon: Trophy },
  { title: 'Collaboration', desc: 'Working as an extension of your team to achieve success.', icon: Users },
  { title: 'Integrity', desc: 'Transparent communication and honest business practices.', icon: Heart },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-8">
            <SectionHeading
              align="left"
              tagline="About SMQ"
              title="Crafting Digital Excellence Since 2014"
              subtitle="SMQ is a premium digital agency dedicated to building high-performance web experiences that drive growth and innovation."
              className="mb-0"
            />
            <div className="flex flex-col gap-6">
              <p className="text-accent/60 text-lg leading-relaxed">
                Founded by Syed Mustafa Qadri, SMQ was born out of a passion for clean code and exceptional design. We believe that every business deserves a digital presence that is not only beautiful but also functional, scalable, and secure.
              </p>
              <p className="text-accent/60 text-lg leading-relaxed">
                Our team of expert designers and developers works closely with each client to understand their unique goals and challenges, delivering tailored solutions that exceed expectations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-2"
                >
                  <span className="text-4xl font-display font-bold text-primary">{stat.value}</span>
                  <span className="text-accent/40 text-sm font-bold uppercase tracking-widest">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-4">
              <img
                src="https://picsum.photos/seed/about/800/1000"
                alt="SMQ Team"
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl hidden md:block glow-primary">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  <CheckCircle2 size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-display font-bold">Verified Excellence</span>
                  <span className="text-accent/60 text-xs font-bold uppercase tracking-widest">Certified Partner</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            tagline="Our Values"
            title="What Drives Us Forward"
            subtitle="Our core principles guide everything we do, from the first line of code to the final launch."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 glass rounded-3xl flex flex-col gap-6 hover:bg-primary/10 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold">{value.title}</h3>
                <p className="text-accent/60 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <SectionHeading
                align="left"
                tagline="Why SMQ"
                title="The SMQ Advantage"
                subtitle="We don't just build websites; we build digital assets that drive business growth."
                className="mb-0"
              />
              <div className="flex flex-col gap-6">
                {[
                  'Custom-tailored solutions for your unique business needs.',
                  'Cutting-edge technologies for maximum performance.',
                  'Transparent communication and collaborative approach.',
                  'Ongoing support and maintenance for long-term success.',
                  'Data-driven design and development strategies.',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-accent/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
                  <img src="https://picsum.photos/seed/v1/400/400" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden glass p-2">
                  <img src="https://picsum.photos/seed/v2/400/533" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="flex flex-col gap-4 pt-12">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden glass p-2">
                  <img src="https://picsum.photos/seed/v3/400/533" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
                  <img src="https://picsum.photos/seed/v4/400/400" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
