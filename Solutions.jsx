import { useReveal } from '../hooks/useReveal';
import { Heart, ShoppingBag, GraduationCap, Sparkles, Building2, BarChart3 } from 'lucide-react';

const industries = [
  {
    icon: <Heart size={24} />,
    name: 'Healthcare',
    summary: 'Patient management platforms, telemedicine, clinic ERP, and HIPAA-compliant health tech.',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.1)',
    border: 'rgba(239,68,68,0.2)',
  },
  {
    icon: <ShoppingBag size={24} />,
    name: 'E-Commerce',
    summary: 'Conversion-optimized stores, multi-vendor marketplaces, and inventory automation.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    border: 'rgba(245,158,11,0.2)',
  },
  {
    icon: <GraduationCap size={24} />,
    name: 'Education',
    summary: 'LMS platforms, school ERPs, virtual classrooms, and edtech mobile applications.',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.1)',
    border: 'rgba(59,130,246,0.2)',
  },
  {
    icon: <Sparkles size={24} />,
    name: 'Startups',
    summary: 'MVP development, rapid prototyping, and growth-stage product iteration for early-stage companies.',
    color: '#ff8c42',
    bg: 'rgba(255,140,66,0.1)',
    border: 'rgba(255,140,66,0.2)',
  },
  {
    icon: <Building2 size={24} />,
    name: 'Corporate Business',
    summary: 'Enterprise portals, workflow automation, CRM/ERP integration, and digital infrastructure.',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',
    border: 'rgba(139,92,246,0.2)',
  },
  {
    icon: <BarChart3 size={24} />,
    name: 'SaaS Platforms',
    summary: 'Multi-tenant SaaS architecture, subscription billing, dashboards, and API-first platforms.',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
    border: 'rgba(16,185,129,0.2)',
  },
];

export default function Solutions() {
  const { ref } = useReveal();

  return (
    <section id="solutions" ref={ref} className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #04060f, #0a0e20 50%, #04060f)' }}>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="reveal mb-4">
            <span className="section-label">
              <span className="w-6 h-px" style={{ background: 'linear-gradient(90deg, #ff8c42, #dc2626)' }} />
              Industries We Serve
            </span>
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl font-extrabold text-white mb-5 delay-100">
            Solutions Tailored to{' '}
            <span className="text-gradient">Your Industry</span>
          </h2>
          <p className="reveal text-gray-400 text-lg leading-relaxed delay-200">
            Deep domain expertise across industries, enabling us to deliver solutions that
            truly understand the nuances of your sector.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => (
            <div key={i}
              className={`reveal group rounded-2xl p-6 cursor-pointer transition-all duration-300 delay-${Math.min((i + 1) * 80, 500)}`}
              style={{
                background: 'rgba(10, 14, 32, 0.7)',
                border: `1px solid rgba(255,255,255,0.06)`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border = `1px solid ${industry.border}`;
                e.currentTarget.style.background = industry.bg;
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.3), 0 0 30px ${industry.bg}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)';
                e.currentTarget.style.background = 'rgba(10, 14, 32, 0.7)';
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: industry.bg, color: industry.color, border: `1px solid ${industry.border}` }}>
                {industry.icon}
              </div>

              <h3 className="font-heading font-bold text-white text-lg mb-2">{industry.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{industry.summary}</p>

              {/* Indicator dot */}
              <div className="mt-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: industry.color }} />
                <span className="text-xs font-medium" style={{ color: industry.color }}>
                  Active Solutions
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
