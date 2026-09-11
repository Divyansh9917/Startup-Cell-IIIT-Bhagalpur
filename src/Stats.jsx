import { useEffect, useRef, useState } from 'react';

const statsData = [
  {
    id: 'startups',
    label: 'Student Startups Incubated',
    value: 35,
    prefix: '',
    suffix: '+',
    subtext: 'Deep-tech AI, IoT robotics, CleanTech & SaaS',
    icon: (
      <svg className="w-6 h-6 text-[#B85C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'capital',
    label: 'Seed Grants & Capital Raised',
    value: 3.2,
    prefix: '₹',
    suffix: ' Cr+',
    isFloat: true,
    subtext: 'Via Bihar Startup Policy, TIDE 2.0 & Angels',
    icon: (
      <svg className="w-6 h-6 text-[#B85C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'patents',
    label: 'Patents & Student IPs Filed',
    value: 18,
    prefix: '',
    suffix: '+',
    subtext: 'Facilitated via Institute IPR advisory desk',
    icon: (
      <svg className="w-6 h-6 text-[#B85C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'mentors',
    label: 'Industry Mentors & Angels',
    value: 50,
    prefix: '',
    suffix: '+',
    subtext: 'Alumni CXOs, venture partners & technologists',
    icon: (
      <svg className="w-6 h-6 text-[#B85C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

function useCountUp(end, duration = 2000, shouldStart = false, isFloat = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      if (isFloat) {
        setCount(parseFloat((eased * end).toFixed(1)));
      } else {
        setCount(Math.floor(eased * end));
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [shouldStart, end, duration, isFloat]);

  return count;
}

function StatCard({ stat, shouldStart }) {
  const animatedValue = useCountUp(stat.value, 2000, shouldStart, stat.isFloat);

  return (
    <div className="group relative bg-[#1E1D1B]/95 border border-[#D8C5B0]/25 hover:border-[#B85C3A] rounded-3xl p-7 sm:p-8 backdrop-blur-xl shadow-2xl hover:shadow-[#141312]/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#B85C3A]/10 group-hover:bg-[#B85C3A]/20 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#D8C5B0]/5 group-hover:bg-[#D8C5B0]/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#292825] border border-[#B85C3A]/40 flex items-center justify-center group-hover:scale-105 group-hover:border-[#D8C5B0] transition-all duration-300">
            {stat.icon}
          </div>
          <span className="text-[10px] font-bold text-[#D8C5B0] uppercase tracking-widest bg-[#B85C3A]/20 px-3 py-1 rounded-full border border-[#B85C3A]/30">
            Impact
          </span>
        </div>

        {/* Counter Display */}
        <div className="text-4xl sm:text-5xl font-black text-white font-heading mb-3 tracking-tight flex items-baseline">
          <span className="text-[#D8C5B0]">{stat.prefix}</span>
          <span className="tabular-nums text-[#EEE3D4]">{animatedValue}</span>
          <span className="text-[#B85C3A] ml-0.5">{stat.suffix}</span>
        </div>

        {/* Label */}
        <h3 className="text-white font-bold text-lg sm:text-xl mb-1.5 leading-snug">
          {stat.label}
        </h3>
      </div>

      <p className="text-[#D8C5B0]/75 text-xs sm:text-sm mt-4 pt-4 border-t border-[#3D3B36] font-normal">
        {stat.subtext}
      </p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(() => typeof window !== 'undefined' && typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const currentElement = sectionRef.current;
    if (!currentElement || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [hasStarted]);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="bg-gradient-to-b from-[#292825] via-[#1E1D1B] to-[#292825] py-24 px-4 sm:px-6 lg:px-8 border-y border-[#B85C3A]/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#B85C3A_1px,transparent_1px)] [background-size:28px_28px] opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#B85C3A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85C3A]/20 border border-[#D8C5B0]/30 text-[#D8C5B0] text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B85C3A] animate-pulse" />
            Ecosystem Metrics & Impact
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Venture Track Record at IIIT Bhagalpur
          </h2>
          <p className="text-[#D8C5B0]/90 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Tangible results across student entrepreneurship cohorts, intellectual property filings, and venture funding syndication.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsData.map((stat) => (
            <StatCard key={stat.id} stat={stat} shouldStart={hasStarted} />
          ))}
        </div>
      </div>
    </section>
  );
}
