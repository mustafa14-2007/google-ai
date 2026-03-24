import React from 'react';
import { motion } from 'motion/react';
import SectionHeading from '@/src/components/SectionHeading';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 2000);
  };

  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6 mb-32">
        <SectionHeading
          tagline="Contact Us"
          title="Let's Build Something Great Together"
          subtitle="Have a project in mind? We'd love to hear from you and discuss how we can help your business grow."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="p-10 glass rounded-3xl flex flex-col gap-8">
              <h3 className="text-2xl font-display font-bold">Contact Information</h3>
              <div className="flex flex-col gap-6">
                <a href="mailto:syedmustafaqadri329@gmail.com" className="flex items-center gap-4 text-accent/60 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent/40">Email Us</span>
                    <span className="text-sm font-medium">syedmustafaqadri329@gmail.com</span>
                  </div>
                </a>
                <a href="tel:+923703299452" className="flex items-center gap-4 text-accent/60 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Phone size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent/40">Call Us</span>
                    <span className="text-sm font-medium">+92 370 3299452</span>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-accent/60 group">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <MapPin size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent/40">Our Office</span>
                    <span className="text-sm font-medium">Karachi, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 glass rounded-3xl flex flex-col gap-6 border-primary/20 glow-primary">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold">Live Chat</h3>
              <p className="text-accent/60 text-sm leading-relaxed">
                Need immediate assistance? Our team is available for a live chat during business hours.
              </p>
              <button className="px-8 py-4 bg-primary hover:bg-secondary text-white rounded-full font-bold transition-all flex items-center justify-center gap-2">
                Start Chat <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="p-10 md:p-16 glass rounded-[40px] relative overflow-hidden">
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center gap-6 py-20"
                >
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white glow-primary mb-4">
                    <Send size={48} />
                  </div>
                  <h3 className="text-4xl font-display font-bold">Message Sent!</h3>
                  <p className="text-accent/60 text-lg max-w-md">
                    Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="px-10 py-5 glass hover:bg-primary hover:text-white rounded-full font-bold transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-accent/40 ml-4">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary focus:bg-white/10 transition-all text-accent"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-accent/40 ml-4">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary focus:bg-white/10 transition-all text-accent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-accent/40 ml-4">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+92 300 1234567"
                        className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary focus:bg-white/10 transition-all text-accent"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-accent/40 ml-4">Service Interested In</label>
                      <select className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary focus:bg-white/10 transition-all text-accent appearance-none">
                        <option className="bg-dark">Web Development</option>
                        <option className="bg-dark">UI/UX Design</option>
                        <option className="bg-dark">E-Commerce</option>
                        <option className="bg-dark">SEO Optimization</option>
                        <option className="bg-dark">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-accent/40 ml-4">Your Message</label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Tell us about your project..."
                      className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary focus:bg-white/10 transition-all text-accent resize-none"
                    ></textarea>
                  </div>
                  <button
                    disabled={formStatus === 'submitting'}
                    className="w-full py-6 bg-primary hover:bg-secondary text-white rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3 glow-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={24} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container mx-auto px-6">
        <div className="w-full h-[400px] glass rounded-[40px] overflow-hidden relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <div className="absolute inset-0 flex items-center justify-center text-accent/20 font-display font-bold text-4xl">
            Interactive Map Placeholder
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0000000000005!2d67.00000000000001!3d24.860000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM2LjAiTiA2N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1616161616161"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
