import { useReveal } from '../hooks/useReveal';
import { Search, Map, Pen, Code2, TestTube, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: <Search size={18} />,
    title: 'Discovery',
    desc: 'Deep-dive sessions to understand your business goals, target users, technical requirements, and competitive landscape.',
  },
  {
    num: '02',
    icon: <Map size={18} />,
    title: 'Strategy & Planning',
    desc: 'A detailed project roadmap, tech stack selection, resource allocation, and timeline with defined milestones.',
  },
  {
    num: '03',
    icon: <Pen size={18} />,
    title: 'UI/UX Design',
    desc: 'Wireframes, interactive prototypes, and polished high-fidelity designs that balance aesthetics with usability.',
  },
  {
    num: '04',
    icon: <Code2 size={18} />,
    title: 'Development',
    desc: 'Agile sprints with clean, documented code, version control, and regular client review sessions throughout.',
  },
  {
    num: '05',
    icon: <TestTube size={18} />,
    title: 'Testing & QA',
    desc: 'Comprehensive quality assurance — unit tests, integration tests, security audits, and cross-device validation.',
  },
  {
    num: '06',
    icon: <Rocket size={18} />,
    title: 'Launch',
    desc: 'Smooth deployment to production, performance optimization, domain setup, and go-live monitoring.',
  },
  {
    num: '07',
    icon: <HeartHandshake size={18} />,
    title: 'Support & Scale',
    desc: 'Post-launch monitoring, feature roadmapping, performance tuning, and continuous improvements as you grow.',
  },
];

export default function Process() {
  const { ref } = useReveal();

  return (
    <section id="process" ref={ref} className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #04060f, #060818 50%, #04060f)' }}>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="reveal mb-4">
            <span className="section-label">
              <span className="w-6 h-px" style={{ background: 'linear-gradient(90deg, #ff8c42, #dc2626)' }} />
              How We Work
            </span>
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl font-extrabold text-white mb-5 delay-100">
            A Process Built for{' '}
            <span className="text-gradient">Predictable Excellence</span>
          </h2>
          <p className="reveal text-gray-400 text-lg leading-relaxed delay-200">
            From first conversation to ongoing partnership, every step is designed
            to maximize clarity, quality, and momentum.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline (hidden on mobile) */}
        <div className="hidden lg:block relative mb-4">
          {/* Connection line */}
          <div className="absolute top-8 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,140,66,0.3), rgba(220,38,38,0.3), transparent)' }} />

          <div className="grid grid-cols-7 gap-3">
            {steps.map((step, i) => (
              <div key={i} className={`reveal flex flex-col items-center text-center delay-${Math.min((i + 1) * 80, 500)}`}>
                {/* Circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center z-10 relative transition-transform duration-300 hover:scale-110"
                    style={{
                      background: 'rgba(10, 14, 32, 0.9)',
                      border: i < 3
                        ? '2px solid rgba(255, 140, 66, 0.7)'
                        : '2px solid rgba(255, 255, 255, 0.1)',
                      color: i < 3 ? '#ff8c42' : '#6b7280',
                      boxShadow: i < 3 ? '0 0 20px rgba(255,107,26,0.2)' : 'none',
                    }}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #ff8c42, #dc2626)', fontSize: '9px' }}>
                    {step.num}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-white text-sm mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-7 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(255,140,66,0.3), rgba(220,38,38,0.3), transparent)' }} />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className={`reveal flex gap-5 delay-${Math.min((i + 1) * 80, 500)}`}>
                {/* Circle */}
                <div className="flex-shrink-0 relative">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(10, 14, 32, 0.9)',
                      border: '2px solid rgba(255, 140, 66, 0.4)',
                      color: '#ff8c42',
                    }}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white"
                    style={{ background: 'linear-gradient(135deg, #ff8c42, #dc2626)', fontSize: '8px', fontWeight: 'bold' }}>
                    {i + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="card-dark rounded-2xl p-4 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-orange-400">{step.num}</span>
                    <h3 className="font-heading font-bold text-white text-sm">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
