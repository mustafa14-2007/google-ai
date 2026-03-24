import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram, ArrowRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Pricing', path: '/pricing' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Web Design', path: '/services' },
      { name: 'E-Commerce', path: '/services' },
      { name: 'UI/UX Design', path: '/services' },
      { name: 'SEO Optimization', path: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'FAQ', path: '/pricing' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-display font-bold text-xl">
                S
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter">SMQ</span>
            </Link>
            <p className="text-accent/60 text-lg max-w-sm">
              Crafting clean, scalable web experiences for ambitious startups and growing businesses worldwide.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all hover:bg-primary hover:border-primary hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col gap-6">
                <h4 className="font-display font-bold text-lg">{section.title}</h4>
                <ul className="flex flex-col gap-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-accent/50 hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter / Contact */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-display font-bold text-lg">Stay Connected</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:syedmustafaqadri329@gmail.com" className="flex items-center gap-3 text-accent/60 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-sm">syedmustafaqadri329@gmail.com</span>
              </a>
              <a href="tel:+923703299452" className="flex items-center gap-3 text-accent/60 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-sm">+92 370 3299452</span>
              </a>
              <div className="flex items-center gap-3 text-accent/60 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span className="text-sm">Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-accent/30 text-xs">
            © {new Date().getFullYear()} SMQ. All rights reserved. Designed by Syed Mustafa Qadri.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-accent/30 hover:text-accent/60 transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="text-accent/30 hover:text-accent/60 transition-colors text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
