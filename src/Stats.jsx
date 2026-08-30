import { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'Startups Funded', value: 120, suffix: '+' },
  { label: 'Global Mentors', value: 45, suffix: '' },
  { label: 'Capital Raised', value: 2, suffix: 'M+', prefix: '$' },
];

function useCountUp(end, duration, start) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    let raf;

    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setCount(end);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, end, duration]);

  return count;
}

function StatCard({ stat, inView }) {
  const count = useCountUp(stat.value, 2000, inView);
  return (
    <div className="group bg-teal-900/60 border border-gold-500/20 rounded-3xl p-10 text-center backdrop-blur-sm shadow-xl hover:-translate-y-2 hover:border-gold-500/50 hover:shadow-gold-500/10 transition-all duration-500">
      <div className="text-5xl md:text-6xl font-bold text-gold-400 font-heading mb-3">
        {stat.prefix || ''}
        {count}
        {stat.suffix}
      </div>
      <p className="text-cream/80 text-lg tracking-wide">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-teal-950 py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((s) => (
          <StatCard key={s.label} stat={s} inView={inView} />
        ))}
      </div>
    </section>
  );
}
