import { useEffect, useRef } from 'react';
import { ArrowRight, Play, Shield, Clock, Award, Zap } from 'lucide-react';

// Animated background blobs
const GlowBlob = ({ className, size = 400 }) => (
  <div
    className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    style={{ width: size, height: size }}
  />
);

// Abstract dashboard mockup (right side hero visual)
const HeroDashboard = () => (
  <div className="relative w-full max-w-lg mx-auto">
    {/* Outer glow ring */}
    <div className="absolute inset-0 rounded-3xl blur-xl opacity-30"
      style={{ background: 'radial-gradient(ellipse, rgba(255,107,26,0.4) 0%, transparent 70%)' }} />

    {/* Main card */}
    <div className="relative rounded-3xl p-5 animate-float"
      style={{
        background: 'rgba(10, 14, 32, 0.9)',
        border: '1px solid rgba(255, 140, 66, 0.2)',
        boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(255,107,26,0.1)',
      }}>

      {/* Top bar */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs text-gray-500 mb-1 font-body">Project Analytics</div>
          <div className="font-heading text-white font-bold text-sm">Live Dashboard</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-green-400">Live</span>
        </div>
      </div>

      {/* Chart bars */}
      <div className="flex items-end gap-1.5 h-24 mb-4">
        {[45, 70, 55, 85, 65, 90, 75, 95, 80, 100, 85, 72].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm transition-all duration-300"
            style={{
              height: `${h}%`,
              background: i >= 9
                ? 'linear-gradient(180deg, #ff8c42, #dc2626)'
                : 'rgba(255, 140, 66, 0.2)',
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { label: 'Projects', value: '6+', color: '#ff8c42' },
          { label: 'Clients', value: '100%', color: '#10b981' },
          { label: 'Uptime', value: '99.9%', color: '#6366f1' },
        ].map((s, i) => (
          <div key={i} className="rounded-xl p-2.5 text-center"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="font-heading font-bold text-sm" style={{ color: s.color }}>{s.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Code snippet */}
      <div className="rounded-xl p-3 mb-3" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-gray-600 text-xs ml-1">app.solution.js</span>
        </div>
        <div className="font-mono text-xs space-y-1">
          <div><span className="text-purple-400">const</span> <span className="text-blue-300">solution</span> <span className="text-gray-400">= </span><span className="text-green-400">await</span></div>
          <div className="pl-3"><span className="text-orange-400">AppnixIT</span><span className="text-gray-400">.</span><span className="text-yellow-300">build</span><span className="text-gray-400">({'{'}</span></div>
          <div className="pl-5"><span className="text-blue-300">idea</span><span className="text-gray-400">:</span> <span className="text-green-300">'yourVision'</span><span className="text-gray-400">,</span></div>
          <div className="pl-3"><span className="text-gray-400">{'}'});</span></div>
        </div>
      </div>

      {/* Progress tasks */}
      {[
        { task: 'UI/UX Design', pct: 100 },
        { task: 'Development', pct: 85 },
        { task: 'QA Testing', pct: 60 },
      ].map((item, i) => (
        <div key={i} className="mb-2 last:mb-0">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400">{item.task}</span>
            <span className="text-orange-400">{item.pct}%</span>
          </div>
          <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div
              className="h-full rounded-full"
              style={{
                width: `${item.pct}%`,
                background: 'linear-gradient(90deg, #ff8c42, #dc2626)',
                transition: 'width 1.5s ease',
              }}
            />
          </div>
        </div>
      ))}
    </div>

    {/* Floating mini cards */}
    <div
      className="absolute -top-6 -right-6 rounded-2xl px-3 py-2.5 animate-float-2"
      style={{
        background: 'rgba(10, 14, 32, 0.95)',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        boxShadow: '0 10px 40px rgba(16, 185, 129, 0.15)',
      }}
    >
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
          <Zap size={14} className="text-green-400" />
        </div>
        <div>
          <div className="text-xs font-bold text-white">Deployed</div>
          <div className="text-xs text-green-400">2 mins ago</div>
        </div>
      </div>
    </div>

    <div
      className="absolute -bottom-4 -left-6 rounded-2xl px-3 py-2.5 animate-float-3"
      style={{
        background: 'rgba(10, 14, 32, 0.95)',
        border: '1px solid rgba(255, 140, 66, 0.3)',
        boxShadow: '0 10px 40px rgba(255, 107, 26, 0.15)',
      }}
    >
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(255, 140, 66, 0.15)' }}>
          <Award size={14} className="text-orange-400" />
        </div>
        <div>
          <div className="text-xs font-bold text-white">98% Satisfaction</div>
          <div className="text-xs text-gray-400">Client rating</div>
        </div>
      </div>
    </div>
  </div>
);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const el = heroRef.current;
      if (el) {
        el.querySelectorAll('.hero-animate').forEach((item, i) => {
          setTimeout(() => {
            item.classList.add('visible');
          }, i * 120);
        });
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
      style={{ background: 'linear-gradient(135deg, #04060f 0%, #060818 50%, #04060f 100%)' }}
    >
      {/* Background glows */}
      <GlowBlob
        className="opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,26,0.6) 0%, transparent 70%)',
          top: '10%', left: '5%',
          width: 500, height: 500,
        }}
      />
      <div className="absolute opacity-20 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(220,38,38,0.4) 0%, transparent 70%)',
          top: '20%', right: '5%',
          width: 400, height: 400,
        }} />
      <div className="absolute opacity-10 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
          bottom: '10%', left: '30%',
          width: 500, height: 300,
        }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div>
            {/* Eyebrow */}
            <div className="hero-animate reveal mb-5">
              <span className="section-label">
                <span className="w-6 h-px" style={{ background: 'linear-gradient(90deg, #ff8c42, #dc2626)' }} />
                Premium Digital Innovation Partner
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-animate reveal font-heading text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 delay-100">
              Transforming Ideas Into{' '}
              <span className="text-gradient">Powerful Digital</span>{' '}
              Solutions
            </h1>

            {/* Subheadline */}
            <p className="hero-animate reveal text-gray-400 text-lg leading-relaxed mb-8 max-w-lg delay-200">
              Appnix IT is a premium software development company delivering custom web platforms,
              mobile applications, and end-to-end digital transformation solutions for businesses
              ready to lead the future.
            </p>

            {/* CTA Buttons */}
            <div className="hero-animate reveal flex flex-wrap gap-4 mb-10 delay-300">
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary"
              >
                Start Your Project
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => handleNavClick('#services')}
                className="btn-outline"
              >
                <Play size={16} className="text-orange-400" />
                Explore Services
              </button>
            </div>

            {/* Trust Badges */}
            <div className="hero-animate reveal flex flex-wrap gap-3 delay-400">
              {[
                { icon: <Award size={14} />, text: '1+ Years Experience' },
                { icon: <Shield size={14} />, text: '6+ Projects Delivered' },
                { icon: <Clock size={14} />, text: '24/7 Support' },
              ].map((badge, i) => (
                <div key={i}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium text-gray-300"
                  style={{
                    background: 'rgba(255, 140, 66, 0.06)',
                    border: '1px solid rgba(255, 140, 66, 0.18)',
                  }}>
                  <span className="text-orange-400">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="hero-animate reveal-right hidden lg:block delay-200">
            <HeroDashboard />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #04060f)' }} />
    </section>
  );
}
