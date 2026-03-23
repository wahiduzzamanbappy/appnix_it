import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { FolderOpen, Smile, Headphones, Trophy } from 'lucide-react';

function Counter({ target, suffix = '', duration = 2200 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: <FolderOpen size={22} />,
    value: 6,
    suffix: '+',
    label: 'Projects Completed',
    sub: 'Across industries',
    color: '#ff8c42',
    bg: 'rgba(255,140,66,0.1)',
  },
  {
    icon: <Smile size={22} />,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    sub: 'Based on reviews',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
  },
  {
    icon: <Headphones size={22} />,
    value: 24,
    suffix: '/7',
    label: 'Support Availability',
    sub: 'Always reachable',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.1)',
  },
  {
    icon: <Trophy size={22} />,
    value: 1,
    suffix: '+',
    label: 'Years of Experience',
    sub: 'Growing stronger',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
  },
];

export default function Stats() {
  const { ref } = useReveal();

  return (
    <section ref={ref} className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #04060f, #0a0e20 50%, #04060f)' }}>

      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #ff6b1a, transparent)' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="reveal mb-4">
            <span className="section-label">
              <span className="w-6 h-px" style={{ background: 'linear-gradient(90deg, #ff8c42, #dc2626)' }} />
              Our Impact
            </span>
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl font-extrabold text-white mb-5 delay-100">
            Numbers That Tell{' '}
            <span className="text-gradient">Our Story</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <div key={i}
              className={`reveal group card-dark rounded-3xl p-7 text-center transition-all duration-300 delay-${(i + 1) * 100}`}>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: stat.bg, color: stat.color, border: `1px solid ${stat.color}30` }}>
                {stat.icon}
              </div>

              {/* Number */}
              <div className="font-heading text-5xl font-extrabold mb-2" style={{ color: stat.color }}>
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div className="font-heading font-bold text-white text-base mb-1">{stat.label}</div>
              <div className="text-gray-500 text-sm">{stat.sub}</div>

              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 30px ${stat.color}10` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
