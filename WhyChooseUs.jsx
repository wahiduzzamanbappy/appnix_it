import { useReveal } from '../hooks/useReveal';
import { Users, ShieldCheck, GitBranch, Lock, Timer, Handshake } from 'lucide-react';

const reasons = [
  {
    icon: <Users size={22} />,
    title: 'Experienced Development Team',
    desc: 'Senior engineers with deep expertise across full-stack, mobile, cloud, and design disciplines — working in tight, agile squads.',
    stat: '10+ Specialists',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Premium Quality Assurance',
    desc: 'Rigorous testing protocols including automated testing, manual QA, and performance benchmarking before every release.',
    stat: '98% Bug-Free Rate',
  },
  {
    icon: <GitBranch size={22} />,
    title: 'Agile & Transparent Workflow',
    desc: 'Sprint-based development with weekly progress reports, live staging environments, and always-open communication channels.',
    stat: '2-Week Sprints',
  },
  {
    icon: <Lock size={22} />,
    title: 'Secure & Scalable Architecture',
    desc: 'Enterprise-grade security practices, OWASP compliance, encrypted data handling, and infrastructure built to grow with you.',
    stat: 'Zero Breaches',
  },
  {
    icon: <Timer size={22} />,
    title: 'On-Time Delivery',
    desc: 'We take deadlines seriously. Our structured project management ensures milestones are hit and launches happen on schedule.',
    stat: '95% On-Time',
  },
  {
    icon: <Handshake size={22} />,
    title: 'Long-Term Partnership & Support',
    desc: 'We don\'t disappear after launch. Ongoing maintenance, feature additions, and growth support — we\'re your lasting tech partner.',
    stat: '24/7 Available',
  },
];

export default function WhyChooseUs() {
  const { ref } = useReveal();

  return (
    <section id="why-us" ref={ref} className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #04060f, #060818 40%, #04060f)' }}>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ff8c42, transparent)' }} />
      <div className="absolute bottom-0 left-1/4 w-96 h-64 rounded-full blur-3xl opacity-6 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #dc2626, transparent)' }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="reveal mb-4">
            <span className="section-label">
              <span className="w-6 h-px" style={{ background: 'linear-gradient(90deg, #ff8c42, #dc2626)' }} />
              Why Appnix IT
            </span>
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl font-extrabold text-white mb-5 delay-100">
            The Reasons Behind{' '}
            <span className="text-gradient">Every Partnership</span>
          </h2>
          <p className="reveal text-gray-400 text-lg leading-relaxed delay-200">
            When you choose Appnix IT, you're choosing a team that invests in your success
            as deeply as you do.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <div key={i}
              className={`reveal group card-dark rounded-2xl p-6 delay-${Math.min((i + 1) * 80, 500)}`}>

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,140,66,0.15), rgba(220,38,38,0.1))',
                    color: '#ff8c42',
                    border: '1px solid rgba(255,140,66,0.2)',
                  }}>
                  {reason.icon}
                </div>
                <span className="text-xs font-semibold px-2.5 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(255,140,66,0.08)',
                    color: '#ff8c42',
                    border: '1px solid rgba(255,140,66,0.15)',
                  }}>
                  {reason.stat}
                </span>
              </div>

              <h3 className="font-heading font-bold text-white text-base mb-3 group-hover:text-orange-400 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>

              {/* Gradient bottom accent */}
              <div className="mt-5 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, #ff8c42, #dc2626)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
