import { useEffect, useRef, useState } from 'react';

const statsData = [
  {
    id: 'startups',
    label: 'Startups Mentored & Funded',
    value: 120,
    prefix: '',
    suffix: '+',
    subtext: 'Across deep-tech, AI, SaaS & hardware domains',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'capital',
    label: 'Capital & Grants Raised',
    value: 2.5,
    prefix: '$',
    suffix: 'M+',
    isFloat: true,
    subtext: 'Via institutional VCs & Govt grant programs',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'mentors',
    label: 'Global Mentors & Angels',
    value: 45,
    prefix: '',
    suffix: '+',
    subtext: 'Tech founders, CXOs & domain specialists',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 'patents',
    label: 'Patents & Student IP Filed',
    value: 32,
    prefix: '',
    suffix: '+',
    subtext: 'Translating academic R&D into market assets',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

function useCountUp(end, duration = 2000, shouldStart = false, isFloat = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Only execute when triggered by scroll into viewport
    if (!shouldStart) return;

    let startTime = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easeOutExpo for high visual impact
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
  const animatedValue = useCountUp(stat.value, 2200, shouldStart, stat.isFloat);

  return (
    <div className="group relative bg-[#072e2b]/90 border border-teal-600/30 hover:border-amber-400/60 rounded-3xl p-7 sm:p-8 backdrop-blur-xl shadow-2xl hover:shadow-teal-950/60 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-400/10 group-hover:bg-amber-400/15 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-400/5 group-hover:bg-teal-400/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-13 h-13 rounded-2xl bg-teal-900/80 border border-teal-500/40 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400/50 group-hover:shadow-lg group-hover:shadow-amber-400/10 transition-all duration-300">
            {stat.icon}
          </div>
          <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Verified Impact
          </span>
        </div>

        {/* Counter Metric Display */}
        <div className="text-4xl sm:text-5xl font-black text-amber-400 font-heading mb-3 tracking-tight flex items-baseline drop-shadow-sm">
          <span>{stat.prefix}</span>
          <span className="tabular-nums">{animatedValue}</span>
          <span className="text-amber-300 ml-0.5">{stat.suffix}</span>
        </div>

        {/* Label */}
        <h3 className="text-white font-bold text-lg sm:text-xl mb-1.5 leading-snug">
          {stat.label}
        </h3>
      </div>

      <p className="text-teal-200/70 text-xs sm:text-sm mt-4 pt-4 border-t border-teal-800/50 font-normal">
        {stat.subtext}
      </p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const currentElement = sectionRef.current;
    if (!currentElement) return;

    if (typeof IntersectionObserver === 'undefined') {
      setHasStarted(true);
      return;
    }

    // Trigger ONLY when the section scrolls into viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect(); // Disconnect once triggered
        }
      },
      {
        threshold: 0.2, // Requires 20% visibility
        rootMargin: '0px 0px -40px 0px', // Prevent pre-mature top fire
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
      className="bg-gradient-to-b from-[#072e2b] via-[#093d37] to-[#072e2b] py-24 px-4 sm:px-6 lg:px-8 border-y border-teal-700/30 relative overflow-hidden"
    >
      {/* Decorative background grid and light flares */}
      <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:28px_28px] opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Ecosystem Metrics & Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Proven Track Record in Venture Creation
          </h2>
          <p className="text-teal-100/80 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Measurable results across student founder cohorts, institutional patent registrations, and venture capital syndication.
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
