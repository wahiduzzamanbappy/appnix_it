import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((item) => {
              item.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref };
}

export function useCountUp(target, duration = 2000, start = false) {
  const ref = useRef(null);

  useEffect(() => {
    if (!start) return;
    const el = ref.current;
    if (!el) return;

    const isPercent = String(target).includes('%');
    const isSuffix = String(target).includes('+');
    const numericTarget = parseInt(String(target).replace(/[^0-9]/g, ''));

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * numericTarget);

      if (el) {
        el.textContent = current + (isPercent ? '%' : isSuffix ? '+' : '');
      }

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return ref;
}
