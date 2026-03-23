import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What services does Appnix IT provide?',
    answer: 'Appnix IT offers a comprehensive suite of digital services including custom software development, web development, mobile app development (iOS & Android), UI/UX design, e-commerce solutions, cloud and API integration, digital transformation consulting, and ongoing maintenance & technical support. We work with startups, SMEs, and enterprises across various industries.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. A basic website typically takes 2–4 weeks. A mid-complexity web application or mobile app ranges from 6–12 weeks. Large-scale platforms and enterprise software can take 3–6 months or more. During our discovery phase, we provide a detailed timeline before any work begins — no surprises.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Absolutely. We work with clients across Asia, the Middle East, Europe, and North America. Our team is experienced in remote collaboration, and we accommodate overlapping time zones for meetings and communications. All our project documentation, communication, and deliverables are in English.',
  },
  {
    question: 'Do you offer post-launch maintenance and support?',
    answer: 'Yes — we consider launch a beginning, not an end. We offer flexible maintenance packages including regular software updates, security patches, performance monitoring, bug fixes, and feature enhancements. Our 24/7 emergency support ensures your platform stays healthy and available at all times.',
  },
  {
    question: 'Can you redesign or improve an existing website or software product?',
    answer: 'Definitely. Many of our projects involve modernizing legacy systems, redesigning outdated websites, or improving the performance and UX of existing applications. We start with a thorough audit of your current product, identify opportunities, and propose a strategic improvement roadmap — whether that means a full rebuild or targeted enhancements.',
  },
  {
    question: 'How do I request a quote?',
    answer: 'Simply fill out the contact form on this page with details about your project — including the type of service, approximate scope, and your timeline. We\'ll review your requirements and get back to you within 2 business hours with a personalized proposal and pricing estimate. Initial consultations are completely free with no obligation.',
  },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: isOpen ? 'rgba(255, 140, 66, 0.06)' : 'rgba(10, 14, 32, 0.7)',
        border: isOpen ? '1px solid rgba(255, 140, 66, 0.2)' : '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left transition-all duration-200 group"
        aria-expanded={isOpen}
      >
        <span className={`font-heading font-semibold text-base pr-6 transition-colors duration-200 ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
          <span className="text-orange-500 mr-3 font-bold text-sm">
            {String(index + 1).padStart(2, '0')}
          </span>
          {faq.question}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={
            isOpen
              ? { background: 'linear-gradient(135deg, #ff8c42, #dc2626)', color: '#fff' }
              : { background: 'rgba(255,255,255,0.06)', color: '#6b7280' }
          }
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      {/* Accordion body */}
      <div
        style={{
          maxHeight: isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="px-6 pb-6">
          <div className="h-px mb-4" style={{ background: 'rgba(255, 140, 66, 0.1)' }} />
          <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { ref } = useReveal();

  return (
    <section id="faq" ref={ref} className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #04060f, #060818 50%, #04060f)' }}>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="reveal mb-4">
              <span className="section-label justify-center">
                <span className="w-6 h-px" style={{ background: 'linear-gradient(90deg, #ff8c42, #dc2626)' }} />
                Frequently Asked
              </span>
            </div>
            <h2 className="reveal font-heading text-4xl md:text-5xl font-extrabold text-white mb-5 delay-100">
              Questions We{' '}
              <span className="text-gradient">Hear Most Often</span>
            </h2>
            <p className="reveal text-gray-400 text-lg leading-relaxed delay-200">
              Still have questions? Reach out via the contact form and we'll be happy to help.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`reveal delay-${Math.min((i + 1) * 80, 400)}`}>
                <FAQItem
                  faq={faq}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
