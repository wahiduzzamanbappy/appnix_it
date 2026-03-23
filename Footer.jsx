import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowUp, Twitter, Linkedin, Github, Instagram, Facebook } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Our Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  Services: [
    { label: 'Custom Software', href: '#services' },
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'E-Commerce', href: '#services' },
    { label: 'Cloud & APIs', href: '#services' },
  ],
};

const socialLinks = [
  { icon: <Linkedin size={16} />, href: '#', label: 'LinkedIn' },
  { icon: <Twitter size={16} />, href: '#', label: 'Twitter' },
  { icon: <Github size={16} />, href: '#', label: 'GitHub' },
  { icon: <Instagram size={16} />, href: '#', label: 'Instagram' },
  { icon: <Facebook size={16} />, href: '#', label: 'Facebook' },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060818 0%, #04060f 100%)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>

      {/* Top gradient line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #ff8c42, #dc2626, transparent)' }} />

      <div className="container-custom pt-16 pb-8">
        {/* Main Footer Grid */}
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
            <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTop(); }}
              className="flex items-center gap-2.5 mb-4 group">
              <div className="transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="Appnix IT — Where Ideas Reborn"
                  className="h-16 w-auto object-contain"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(255, 107, 26, 0.3))' }}
                />
              </div>
            </a>

            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Where Ideas Reborn — transforming your vision into powerful, scalable digital products that drive real business growth.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} aria-label={social.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)', color: '#6b7280', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,140,66,0.12)';
                    e.currentTarget.style.color = '#ff8c42';
                    e.currentTarget.style.borderColor = 'rgba(255,140,66,0.3)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.color = '#6b7280';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = '';
                  }}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-heading font-bold text-white text-sm mb-5 tracking-wide uppercase"
                style={{ letterSpacing: '0.1em' }}>
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="text-gray-500 text-sm transition-colors duration-200 hover:text-orange-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gray-700 flex-shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm mb-5 tracking-wide uppercase"
              style={{ letterSpacing: '0.1em' }}>
              Contact
            </h3>
            <div className="space-y-4">
              <a href="mailto:hello@appnixit.com"
                className="flex items-start gap-3 group"
                aria-label="Email Appnix IT">
                <Mail size={15} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 text-sm group-hover:text-orange-400 transition-colors duration-200">
                  hello@appnixit.com
                </span>
              </a>
              <a href="tel:+8801700000000"
                className="flex items-start gap-3 group"
                aria-label="Call Appnix IT">
                <Phone size={15} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 text-sm group-hover:text-orange-400 transition-colors duration-200">
                  +880 1700-000000
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 text-sm">Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* CTA mini */}
            <div className="mt-6 p-4 rounded-2xl"
              style={{ background: 'rgba(255,140,66,0.06)', border: '1px solid rgba(255,140,66,0.12)' }}>
              <p className="text-gray-400 text-xs mb-3">Ready to start your project?</p>
              <button onClick={() => handleNavClick('#contact')}
                className="text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors duration-200 flex items-center gap-1.5">
                Get a free quote →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Appnix IT. All rights reserved. Built with{' '}
              <span className="text-orange-500">♥</span> in Bangladesh.
            </p>
            <div className="flex items-center gap-5">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
                <a key={i} href="#"
                  className="text-gray-600 text-xs hover:text-gray-400 transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollTop}
        aria-label="Back to top"
        className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #ff8c42, #dc2626)',
          opacity: showTop ? 1 : 0,
          transform: showTop ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.8)',
          pointerEvents: showTop ? 'auto' : 'none',
          boxShadow: '0 4px 20px rgba(255, 107, 26, 0.4)',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; }}
      >
        <ArrowUp size={18} className="text-white" />
      </button>
    </footer>
  );
}
