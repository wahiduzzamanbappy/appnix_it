import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'CEO',
    company: 'NovaTech Corp',
    avatar: 'RS',
    color: '#ff8c42',
    rating: 5,
    text: 'Appnix IT transformed our outdated internal system into a sleek, high-performing platform that our entire team loves. Their attention to detail, transparent communication, and on-time delivery exceeded every expectation. Truly a world-class team.',
  },
  {
    name: 'Fatima Al-Hassan',
    role: 'Founder',
    company: 'Stellar Digital',
    avatar: 'FA',
    color: '#10b981',
    rating: 5,
    text: 'We approached Appnix IT with a complex SaaS concept and they delivered a beautifully architected platform in record time. Their developers asked the right questions from day one. Six months after launch, we\'ve onboarded 40+ business clients.',
  },
  {
    name: 'James Okonkwo',
    role: 'CTO',
    company: 'Axiom Ventures',
    avatar: 'JO',
    color: '#6366f1',
    rating: 5,
    text: 'We\'ve worked with several development agencies across three continents. Appnix IT stands out for their code quality, design sensibility, and genuine investment in client outcomes. Our e-commerce platform saw a 3× revenue jump post-launch.',
  },
  {
    name: 'Priya Menon',
    role: 'Product Manager',
    company: 'PrimeSoft Labs',
    avatar: 'PM',
    color: '#ec4899',
    rating: 5,
    text: 'The mobile app Appnix IT built for us has a 4.8-star rating on the App Store. That speaks for itself. They nailed the UX, handled edge cases we hadn\'t thought of, and delivered with zero drama. Post-launch support has been exceptional.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref } = useReveal();

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" ref={ref} className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #04060f, #060818 50%, #04060f)' }}>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ff8c42, transparent)' }} />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #dc2626, transparent)' }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="reveal mb-4">
            <span className="section-label">
              <span className="w-6 h-px" style={{ background: 'linear-gradient(90deg, #ff8c42, #dc2626)' }} />
              Client Voices
            </span>
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl font-extrabold text-white mb-5 delay-100">
            Trusted by Businesses{' '}
            <span className="text-gradient">Who Demand the Best</span>
          </h2>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="reveal card-dark rounded-3xl p-8 md:p-10 relative overflow-hidden delay-200"
            style={{ border: '1px solid rgba(255, 140, 66, 0.15)' }}>

            {/* Large quote icon */}
            <div className="absolute top-6 right-8 opacity-10">
              <Quote size={80} style={{ color: '#ff8c42' }} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-white text-sm flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}>
                {t.avatar}
              </div>
              <div>
                <div className="font-heading font-bold text-white">{t.name}</div>
                <div className="text-gray-500 text-sm">{t.role} · {t.company}</div>
              </div>
            </div>

            {/* Gradient bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-3xl"
              style={{ background: 'linear-gradient(90deg, #ff8c42, #dc2626)' }} />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#9ca3af',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,140,66,0.12)';
                e.currentTarget.style.borderColor = 'rgba(255,140,66,0.3)';
                e.currentTarget.style.color = '#ff8c42';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = '#9ca3af';
              }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    background: i === current
                      ? 'linear-gradient(90deg, #ff8c42, #dc2626)'
                      : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>

            <button onClick={next}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#9ca3af',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,140,66,0.12)';
                e.currentTarget.style.borderColor = 'rgba(255,140,66,0.3)';
                e.currentTarget.style.color = '#ff8c42';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = '#9ca3af';
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* All testimonial cards (mini) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {testimonials.map((t, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`reveal text-left rounded-2xl p-4 transition-all duration-300 delay-${(i + 1) * 80}`}
              style={{
                background: i === current ? 'rgba(255,140,66,0.08)' : 'rgba(255,255,255,0.02)',
                border: i === current ? '1px solid rgba(255,140,66,0.25)' : '1px solid rgba(255,255,255,0.05)',
              }}>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}66)` }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.company}</div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={10} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
