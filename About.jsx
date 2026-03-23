import { useReveal } from '../hooks/useReveal';
import { Lightbulb, Users, Rocket, Target, Eye, Heart } from 'lucide-react';

const featureCards = [
  {
    icon: <Lightbulb size={22} />,
    title: 'Innovation First',
    desc: 'We lead with cutting-edge technologies and inventive thinking to craft solutions that are ahead of the curve, not chasing it.',
  },
  {
    icon: <Users size={22} />,
    title: 'Client-Centric Development',
    desc: 'Every decision is made with your success as the north star. Your goals, your users, your outcomes — that\'s our development compass.',
  },
  {
    icon: <Rocket size={22} />,
    title: 'Scalable Future-Ready Solutions',
    desc: 'We build architectures that don\'t just work today — they scale with your ambition, handling growth without friction.',
  },
];

const pillars = [
  { icon: <Target size={20} />, label: 'Mission', text: 'To empower businesses of all sizes with intelligent, elegant digital solutions that drive real-world impact and competitive advantage.' },
  { icon: <Eye size={20} />, label: 'Vision', text: 'To become the most trusted premium software partner for ambitious businesses across South Asia and beyond — where every idea is reborn as a market-leading product.' },
  { icon: <Heart size={20} />, label: 'Values', text: 'Integrity, innovation, and impact. We believe the best software is born when technical excellence meets deep empathy for the people who use it.' },
];

export default function About() {
  const { ref } = useReveal();

  return (
    <section id="about" ref={ref} className="section-pad relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #04060f, #060818, #04060f)' }} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ff8c42, transparent)' }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="reveal mb-4">
            <span className="section-label">
              <span className="w-6 h-px" style={{ background: 'linear-gradient(90deg, #ff8c42, #dc2626)' }} />
              About Appnix IT
            </span>
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl font-extrabold text-white mb-6 delay-100">
            A Studio Where Ideas{' '}
            <span className="text-gradient">Come Back to Life</span>
          </h2>
          <p className="reveal text-gray-400 text-lg leading-relaxed delay-200">
            Appnix IT is a premium software development and digital solutions company headquartered
            in Dhaka, Bangladesh. We partner with startups, growing businesses, and enterprises to
            architect, design, and build digital products that perform at scale.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Story */}
          <div>
            <p className="reveal text-gray-400 leading-relaxed mb-6 delay-100">
              Our name carries a promise: <strong className="text-white">Appnix</strong> — a fusion of "application" and "phoenix" —
              embodies our founding belief that every idea, no matter how rough or dormant, can be
              transformed into something extraordinary.
            </p>
            <p className="reveal text-gray-400 leading-relaxed mb-8 delay-200">
              Since our founding, we have delivered high-quality digital solutions across healthcare,
              education, e-commerce, and enterprise sectors. Our team of designers, engineers, and
              strategists works in tight collaboration — bringing not just code, but craftsmanship
              to every engagement.
            </p>

            {/* Mission / Vision / Values */}
            <div className="space-y-4">
              {pillars.map((pillar, i) => (
                <div key={i}
                  className={`reveal card-dark p-5 rounded-2xl flex gap-4 delay-${(i + 2) * 100}`}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(255, 140, 66, 0.12)', color: '#ff8c42' }}>
                    {pillar.icon}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white text-sm mb-1">{pillar.label}</div>
                    <p className="text-gray-400 text-sm leading-relaxed">{pillar.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="space-y-4">
            {featureCards.map((card, i) => (
              <div key={i}
                className={`reveal-right card-dark gradient-border p-6 rounded-2xl group delay-${(i + 1) * 150}`}
                style={{ '--delay': `${i * 0.15}s` }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.15), rgba(220, 38, 38, 0.15))',
                      color: '#ff8c42',
                      border: '1px solid rgba(255, 140, 66, 0.2)',
                    }}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg mb-2">{card.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom quote */}
            <div className="reveal-right p-6 rounded-2xl delay-500"
              style={{
                background: 'linear-gradient(135deg, rgba(255,140,66,0.08), rgba(220,38,38,0.06))',
                border: '1px solid rgba(255, 140, 66, 0.15)',
              }}>
              <p className="text-gray-300 text-sm italic leading-relaxed mb-3">
                "Where Ideas Reborn" isn't just our tagline — it's our operating philosophy.
                Every project that enters our studio leaves transformed, battle-tested, and ready
                to compete at the highest level.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #ff8c42, #dc2626)' }}>A</div>
                <div>
                  <div className="text-white text-xs font-semibold">Appnix IT Team</div>
                  <div className="text-gray-500 text-xs">Founders & Leadership</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { num: '6+', label: 'Projects Delivered', color: '#ff8c42' },
            { num: '98%', label: 'Client Satisfaction', color: '#10b981' },
            { num: '1+', label: 'Years of Expertise', color: '#6366f1' },
          ].map((stat, i) => (
            <div key={i} className={`reveal card-dark p-6 rounded-2xl text-center delay-${(i + 1) * 100}`}>
              <div className="font-heading text-4xl font-extrabold mb-1" style={{ color: stat.color }}>
                {stat.num}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
