import { useReveal } from '../hooks/useReveal';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTABanner() {
  const { ref } = useReveal();

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="reveal rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,140,66,0.12) 0%, rgba(220,38,38,0.10) 50%, rgba(99,102,241,0.08) 100%)',
            border: '1px solid rgba(255, 140, 66, 0.2)',
          }}>

          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-64 rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(ellipse, #ff8c42, #dc2626, transparent)' }} />
          </div>

          {/* Grid */}
          <div className="absolute inset-0 bg-grid opacity-20" />

          <div className="relative z-10">
            <div className="reveal mb-4">
              <span className="section-label justify-center">
                <span className="w-6 h-px" style={{ background: 'linear-gradient(90deg, #ff8c42, #dc2626)' }} />
                Ready to Begin?
              </span>
            </div>

            <h2 className="reveal font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 delay-100 max-w-3xl mx-auto leading-tight">
              Let's Build Something{' '}
              <span className="text-gradient">Exceptional</span>{' '}
              Together
            </h2>

            <p className="reveal text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto delay-200">
              Your next digital product deserves a partner that treats it like their own.
              Whether you have a clear brief or just a spark of an idea — we're ready to
              make it extraordinary.
            </p>

            <div className="reveal flex flex-col sm:flex-row gap-4 justify-center delay-300">
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary text-base px-8 py-4"
              >
                Start Your Project
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-outline text-base px-8 py-4"
              >
                <Calendar size={18} className="text-orange-400" />
                Schedule a Consultation
              </button>
            </div>

            {/* Trust micro-text */}
            <div className="reveal mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500 delay-400">
              {['Free initial consultation', 'No long-term lock-ins', 'Transparent pricing', 'Dedicated project manager'].map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-orange-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
