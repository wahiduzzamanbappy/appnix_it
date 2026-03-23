import { useReveal } from '../hooks/useReveal';

const clients = [
  'NovaTech Corp',
  'Stellar Digital',
  'Axiom Ventures',
  'PrimeSoft Labs',
  'Zenith Solutions',
  'CoreBridge Inc',
];

export default function TrustedBy() {
  const { ref } = useReveal();

  return (
    <section ref={ref} className="py-14 relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>

      <div className="container-custom">
        <p className="reveal text-center text-xs font-semibold tracking-widest uppercase text-gray-600 mb-8">
          Trusted by ambitious businesses worldwide
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {clients.map((client, i) => (
            <div key={i}
              className={`reveal text-gray-500 font-heading font-bold text-lg tracking-tight transition-all duration-300 hover:text-gray-300 cursor-default delay-${(i + 1) * 100}`}
              style={{
                textShadow: '0 0 20px rgba(255,140,66,0)',
                transition: 'color 0.3s ease, text-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.target.style.color = '#ff8c42';
                e.target.style.textShadow = '0 0 20px rgba(255,140,66,0.4)';
              }}
              onMouseLeave={e => {
                e.target.style.color = '';
                e.target.style.textShadow = '';
              }}
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
