import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import Services from './components/Services';
import Solutions from './components/Solutions';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

// Global scroll reveal observer
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right');
            elements.forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section, footer');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen" style={{ background: '#04060f' }}>
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Trusted By */}
        <TrustedBy />

        {/* 3. About */}
        <About />

        {/* 4. Services */}
        <Services />

        {/* 5. Solutions / Industries */}
        <Solutions />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Portfolio */}
        <Portfolio />

        {/* 8. Process */}
        <Process />

        {/* 9. Stats */}
        <Stats />

        {/* 10. Testimonials */}
        <Testimonials />

        {/* 11. CTA Banner */}
        <CTABanner />

        {/* 12. Contact */}
        <Contact />

        {/* 13. FAQ */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
