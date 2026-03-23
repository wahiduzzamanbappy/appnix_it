import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, Send } from 'lucide-react';

const services = [
  'Custom Software Development',
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'E-Commerce Solutions',
  'Cloud & API Integration',
  'Digital Transformation',
  'Maintenance & Support',
];

const budgets = [
  'Under $1,000',
  '$1,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Not Sure Yet',
];

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: 'Email Us',
    value: 'hello@appnixit.com',
    sub: 'We reply within 2 hours',
    href: 'mailto:hello@appnixit.com',
    color: '#ff8c42',
  },
  {
    icon: <Phone size={18} />,
    label: 'Call Us',
    value: '+880 1700-000000',
    sub: 'Mon–Sat, 9am–8pm BST',
    href: 'tel:+8801700000000',
    color: '#10b981',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Our Office',
    value: 'Dhaka, Bangladesh',
    sub: 'Schedule a visit anytime',
    href: '#',
    color: '#6366f1',
  },
  {
    icon: <Clock size={18} />,
    label: 'Office Hours',
    value: 'Sun–Thu: 9am – 7pm',
    sub: 'Emergency support 24/7',
    href: null,
    color: '#f59e0b',
  },
];

const inputStyle = {
  background: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: '#ffffff',
  outline: 'none',
};

const inputFocusStyle = {
  borderColor: 'rgba(255, 140, 66, 0.5)',
  boxShadow: '0 0 0 3px rgba(255, 140, 66, 0.1)',
};

function FormInput({ label, type = 'text', name, value, onChange, placeholder, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 placeholder-gray-600"
        style={focused ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

function FormSelect({ label, name, value, onChange, options, placeholder, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl px-4 py-3 text-sm transition-all duration-200"
        style={focused
          ? { ...inputStyle, ...inputFocusStyle }
          : { ...inputStyle, color: value ? '#fff' : '#4b5563' }
        }
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt} style={{ background: '#0a0e20' }}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default function Contact() {
  const { ref } = useReveal();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', budget: '', message: '',
  });
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setStatus('success');
    setForm({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #04060f, #060818 50%, #04060f)' }}>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="reveal mb-4">
            <span className="section-label">
              <span className="w-6 h-px" style={{ background: 'linear-gradient(90deg, #ff8c42, #dc2626)' }} />
              Get in Touch
            </span>
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl font-extrabold text-white mb-5 delay-100">
            Let's Start a{' '}
            <span className="text-gradient">Conversation</span>
          </h2>
          <p className="reveal text-gray-400 text-lg leading-relaxed delay-200">
            Tell us about your project and we'll get back to you within a few hours
            with a personalized proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <div key={i}
                className={`reveal card-dark rounded-2xl p-5 flex items-start gap-4 delay-${(i + 1) * 80}`}>
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}30` }}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-medium mb-0.5">{item.label}</div>
                  {item.href && item.href !== '#' ? (
                    <a href={item.href}
                      className="font-semibold text-white text-sm hover:text-orange-400 transition-colors duration-200">
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-semibold text-white text-sm">{item.value}</div>
                  )}
                  <div className="text-gray-500 text-xs mt-0.5">{item.sub}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="reveal card-dark rounded-2xl overflow-hidden delay-500">
              <div className="h-36 relative flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,140,66,0.08), rgba(99,102,241,0.08))',
                }}>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative text-center">
                  <MapPin size={28} className="mx-auto mb-2 text-orange-400" />
                  <div className="text-white text-sm font-semibold">Dhaka, Bangladesh</div>
                  <div className="text-gray-500 text-xs">South Asia · UTC+6</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="reveal card-dark rounded-3xl p-7 md:p-8 delay-200"
              style={{ border: '1px solid rgba(255, 140, 66, 0.1)' }}>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(16,185,129,0.15)', border: '2px solid rgba(16,185,129,0.3)' }}>
                    <CheckCircle size={28} className="text-green-400" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-2xl mb-3">Message Sent!</h3>
                  <p className="text-gray-400 text-base mb-6">
                    Thank you for reaching out. We'll review your project details and
                    get back to you within 2 business hours.
                  </p>
                  <button onClick={() => setStatus(null)} className="btn-primary">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <FormInput label="Full Name" name="name" value={form.name}
                        onChange={handleChange} placeholder="John Doe" required />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle size={12} />{errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <FormInput label="Email Address" type="email" name="email"
                        value={form.email} onChange={handleChange}
                        placeholder="john@company.com" required />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle size={12} />{errors.email}
                        </p>
                      )}
                    </div>
                    <FormInput label="Phone Number" type="tel" name="phone"
                      value={form.phone} onChange={handleChange} placeholder="+880 17XX XXXXXX" />
                    <FormInput label="Company Name" name="company" value={form.company}
                      onChange={handleChange} placeholder="Your Company Ltd." />
                    <div>
                      <FormSelect label="Service Needed" name="service" value={form.service}
                        onChange={handleChange} options={services}
                        placeholder="Select a service" required />
                      {errors.service && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle size={12} />{errors.service}
                        </p>
                      )}
                    </div>
                    <FormSelect label="Project Budget" name="budget" value={form.budget}
                      onChange={handleChange} options={budgets} placeholder="Select a range" />
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Your Message <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      className="w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 placeholder-gray-600 resize-none"
                      style={inputStyle}
                      onFocus={e => {
                        e.target.style.borderColor = 'rgba(255,140,66,0.5)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(255,140,66,0.1)';
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={12} />{errors.message}
                      </p>
                    )}
                  </div>

                  <button type="submit" disabled={loading}
                    className="btn-primary w-full justify-center text-base py-4"
                    style={loading ? { opacity: 0.7, cursor: 'not-allowed' } : {}}>
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending your message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray-600 text-xs mt-4">
                    By submitting, you agree to our privacy policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
