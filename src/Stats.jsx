import { useEffect, useRef, useState } from 'react';

const statsData = [
  {
    id: 'startups',
    label: 'Startups Mentored & Funded',
    value: 120,
    prefix: '',
    suffix: '+',
    subtext: 'Across deep-tech, AI, SaaS & hardware',
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
    subtext: 'Via institutional VCs & Govt grants',
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
    subtext: 'Founders, CXOs & Domain Leaders',
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
    subtext: 'Translating research into industry value',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

function useCountUp(end, duration, shouldStart, isFloat = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Only run animation when triggered by scroll into viewport
    if (!shouldStart) return;

    let startTime = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      
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
    <div className="group relative bg-[#072e2b]/85 border border-teal-600/30 hover:border-amber-400/60 rounded-2xl p-7 sm:p-8 backdrop-blur-md shadow-xl hover:shadow-teal-950/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
      {/* Subtle card glow on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-teal-400/5 group-hover:bg-amber-400/10 rounded-full blur-xl transition-all duration-300 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-teal-900/80 border border-teal-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400/40 transition-all duration-300">
            {stat.icon}
          </div>
          <span className="text-[11px] font-semibold text-teal-300/80 uppercase tracking-wider bg-teal-900/40 px-2.5 py-1 rounded-full border border-teal-700/30">
            Verified Impact
          </span>
        </div>

        {/* Counter Number */}
        <div className="text-4xl sm:text-5xl font-extrabold text-amber-400 font-heading mb-2 tracking-tight flex items-baseline">
          <span>{stat.prefix}</span>
          <span>{animatedValue}</span>
          <span className="text-amber-300">{stat.suffix}</span>
        </div>

        {/* Label */}
        <h3 className="text-white font-bold text-lg mb-1 leading-snug">
          {stat.label}
        </h3>
      </div>

      <p className="text-teal-200/70 text-xs sm:text-sm mt-3 pt-3 border-t border-teal-800/40 font-normal">
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

    // Trigger ONLY when the section actually scrolls into viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect(); // Disconnect so it runs only once
        }
      },
      {
        threshold: 0.25, // Requires 25% of the stats section to be visible
        rootMargin: '0px 0px -40px 0px', // Prevent false trigger at extreme top
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
      className="bg-gradient-to-b from-[#072e2b] via-[#0a3a35] to-[#072e2b] py-20 px-4 sm:px-6 lg:px-8 border-y border-teal-700/30 relative overflow-hidden"
    >
      {/* Decorative ambient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="uppercase tracking-[0.25em] text-amber-400 text-xs sm:text-sm font-bold mb-3">
            Ecosystem Metrics & Milestones
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Proven Track Record in Venture Creation
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <StatCard key={stat.id} stat={stat} shouldStart={hasStarted} />
          ))}
        </div>
      </div>
    </section>
  );
}
