import { useReveal } from '../hooks/useReveal';
import { Code2, Globe, Smartphone, Palette, ShoppingCart, Cloud, Zap, Wrench, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={24} />,
    title: 'Custom Software Development',
    desc: 'Bespoke, scalable software solutions engineered to solve your unique business challenges. From MVPs to enterprise platforms.',
    tags: ['Python', 'Node.js', 'Microservices'],
  },
  {
    icon: <Globe size={24} />,
    title: 'Web Development',
    desc: 'High-performance websites and web applications crafted with modern stacks — fast, secure, and conversion-optimized.',
    tags: ['React', 'Next.js', 'Laravel'],
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile experiences that users love. iOS and Android apps built for performance and engagement.',
    tags: ['React Native', 'Flutter', 'Swift'],
  },
  {
    icon: <Palette size={24} />,
    title: 'UI/UX Design',
    desc: 'Interfaces that are as beautiful as they are functional. We craft digital experiences users find intuitive and delightful.',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
  },
  {
    icon: <ShoppingCart size={24} />,
    title: 'E-Commerce Solutions',
    desc: 'Full-featured online stores that drive conversions — from product pages and payment gateways to inventory and analytics.',
    tags: ['Shopify', 'WooCommerce', 'Custom'],
  },
  {
    icon: <Cloud size={24} />,
    title: 'Cloud & API Integration',
    desc: 'Seamlessly connect your systems with third-party APIs and cloud infrastructure for a unified, powerful tech ecosystem.',
    tags: ['AWS', 'REST/GraphQL', 'Webhooks'],
  },
  {
    icon: <Zap size={24} />,
    title: 'Digital Transformation',
    desc: 'Guide your business through technology-led evolution — from legacy modernization to full digital strategy and implementation.',
    tags: ['Consulting', 'Automation', 'Strategy'],
  },
  {
    icon: <Wrench size={24} />,
    title: 'Maintenance & Support',
    desc: 'Proactive monitoring, updates, performance tuning, and 24/7 support to keep your digital products running at peak health.',
    tags: ['24/7 Monitoring', 'SLA', 'DevOps'],
  },
];

export default function Services() {
  const { ref } = useReveal();

  return (
    <section id="services" ref={ref} className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #04060f, #060818 50%, #04060f)' }}>

      {/* Decorative blob */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ff6b1a, transparent)' }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="reveal mb-4">
            <span className="section-label">
              <span className="w-6 h-px" style={{ background: 'linear-gradient(90deg, #ff8c42, #dc2626)' }} />
              What We Build
            </span>
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl font-extrabold text-white mb-5 delay-100">
            Services Built for{' '}
            <span className="text-gradient">Scale & Impact</span>
          </h2>
          <p className="reveal text-gray-400 text-lg leading-relaxed delay-200">
            End-to-end digital services crafted by a team that cares deeply about quality,
            performance, and your business outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div key={i}
              className={`reveal group card-dark rounded-2xl p-6 cursor-pointer delay-${Math.min((i + 1) * 50, 500)}`}
              style={{ '--delay': `${i * 0.05}s` }}>

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,140,66,0.15), rgba(220,38,38,0.1))',
                  color: '#ff8c42',
                  border: '1px solid rgba(255, 140, 66, 0.2)',
                  boxShadow: '0 0 0 rgba(255, 140, 66, 0)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(255,140,66,0.3)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 rgba(255,140,66,0)'}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-white text-base mb-3 group-hover:text-orange-400 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {service.tags.map((tag, j) => (
                  <span key={j} className="text-xs px-2 py-1 rounded-full text-gray-500"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="flex items-center gap-1 text-xs text-orange-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ArrowRight size={12} />
              </div>

              {/* Gradient line bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, #ff8c42, #dc2626)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
