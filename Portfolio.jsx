import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Hospital Management Platform',
    category: 'Web',
    desc: 'Full-featured HMS with patient records, appointment booking, billing, and doctor portals. Reduced admin workload by 60%.',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #7c3aed 100%)',
    result: '60% Efficiency Gain',
  },
  {
    id: 2,
    title: 'E-Commerce Storefront',
    category: 'Web',
    desc: 'High-converting multi-vendor marketplace with real-time inventory, AI-powered recommendations, and seamless checkout.',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    result: '3× Revenue Growth',
  },
  {
    id: 3,
    title: 'School ERP Dashboard',
    category: 'SaaS',
    desc: 'Comprehensive school management system covering admissions, grading, attendance, and parent communication portals.',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
    result: '2,000+ Students Managed',
  },
  {
    id: 4,
    title: 'SaaS Analytics Platform',
    category: 'SaaS',
    desc: 'B2B analytics dashboard with custom report builder, real-time data pipeline integration, and multi-tenant architecture.',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    result: '40+ Business Clients',
  },
  {
    id: 5,
    title: 'Mobile Booking App',
    category: 'Mobile',
    desc: 'On-demand service booking app for iOS and Android with real-time tracking, in-app payments, and review system.',
    gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
    result: '10K+ App Downloads',
  },
  {
    id: 6,
    title: 'Corporate Business Website',
    category: 'UI/UX',
    desc: 'Premium corporate identity website with motion design, multilingual support, and CMS integration for a Fortune 500 client.',
    gradient: 'linear-gradient(135deg, #ff8c42 0%, #dc2626 100%)',
    result: '200% Lead Increase',
  },
];

const filters = ['All', 'Web', 'Mobile', 'SaaS', 'UI/UX'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref } = useReveal();

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" ref={ref} className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #04060f, #0a0e20 50%, #04060f)' }}>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="reveal mb-4">
            <span className="section-label">
              <span className="w-6 h-px" style={{ background: 'linear-gradient(90deg, #ff8c42, #dc2626)' }} />
              Our Work
            </span>
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl font-extrabold text-white mb-5 delay-100">
            Projects That{' '}
            <span className="text-gradient">Define Excellence</span>
          </h2>
          <p className="reveal text-gray-400 text-lg leading-relaxed delay-200">
            A curated showcase of digital products we've built for ambitious clients
            across industries.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-10 delay-300">
          {filters.map((filter) => (
            <button key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={
                activeFilter === filter
                  ? {
                      background: 'linear-gradient(135deg, #ff8c42, #dc2626)',
                      color: '#fff',
                      boxShadow: '0 4px 20px rgba(255, 107, 26, 0.4)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.04)',
                      color: '#9ca3af',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }
              }
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div key={project.id}
              className="reveal group rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: 'rgba(10, 14, 32, 0.9)',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.4s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(255,140,66,0.25)';
                e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.5), 0 0 30px rgba(255,107,26,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.boxShadow = '';
              }}>

              {/* Thumbnail */}
              <div className="relative h-44 overflow-hidden"
                style={{ background: project.gradient }}>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.3) 1px, transparent 1px), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }} />

                {/* Mock UI lines */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="h-2 rounded-full bg-white opacity-20 w-3/4" />
                  <div className="h-1.5 rounded-full bg-white opacity-15 w-1/2" />
                  <div className="h-1.5 rounded-full bg-white opacity-10 w-2/3" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255, 140, 66, 0.9)' }}>
                    <ExternalLink size={20} className="text-white" />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}>
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.desc}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(16,185,129,0.1)',
                      color: '#10b981',
                      border: '1px solid rgba(16,185,129,0.2)',
                    }}>
                    {project.result}
                  </span>
                  <button className="flex items-center gap-1 text-xs text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                    View Project <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
