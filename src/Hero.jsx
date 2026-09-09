import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  // Live ticking countdown timer for upcoming incubation cohort / E-Summit deadline
  const [timeLeft, setTimeLeft] = useState({
    days: 16,
    hours: 19,
    minutes: 26,
    seconds: 37,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-[#EEE3D4] pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden"
    >
      {/* Background Soft Earthy Accent Glows */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#D8C5B0]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#B85C3A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Hero Grid matching Reference Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
          
          {/* LEFT COLUMN: Large Typography, Supporting Text & Horizontal CTAs */}
          <div className="lg:col-span-5 xl:col-span-5 text-left">
            {/* Top Superscript / Kicker Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D8C5B0] text-[#B85C3A] text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#B85C3A] animate-pulse" />
              IIIT Bhagalpur Innovation Hub
            </div>

            {/* Editorial Display Title matching Reference Typographic Style */}
            <div className="mb-6">
              <span className="block font-serif italic text-3xl sm:text-4xl text-[#B85C3A] font-semibold tracking-tight mb-1">
                3<sup className="text-xl sm:text-2xl not-italic font-sans font-bold">rd</sup> Cohort
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold text-[#292825] tracking-tight leading-[1.04] uppercase">
                STARTUP<br />
                CELL <span className="text-[#B85C3A]">2026</span>
              </h1>
            </div>

            {/* Supporting Description */}
            <p className="text-[#292825]/85 text-base sm:text-lg leading-relaxed mb-8 max-w-lg font-normal">
              A milestone of student entrepreneurship, cutting-edge research, and new beginnings — turning classroom curiosity into venture-backed scalable startups.
            </p>

            {/* Action CTA Buttons (Horizontal Arrangement) */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/incubation"
                className="px-7 py-3.5 rounded-full font-bold text-sm sm:text-base bg-[#B85C3A] text-white hover:bg-[#9E4E30] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center cursor-pointer inline-flex items-center gap-2"
              >
                <span>Register Now</span>
                <span className="text-white">→</span>
              </Link>
              <Link
                to="/story"
                className="px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base border border-[#292825]/30 text-[#292825] bg-white hover:bg-[#EEE3D4] hover:border-[#B85C3A] hover:text-[#B85C3A] transition-all duration-200 text-center inline-flex items-center gap-2 cursor-pointer"
              >
                <span>View Schedule</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Dominant Photograph with Soft Blend + Floating Information Card */}
          <div className="lg:col-span-7 xl:col-span-7 relative">
            {/* Main Visual Image Container */}
            <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-xl border border-[#D8C5B0]/70 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10] bg-[#292825]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85"
                alt="Startup Cell IIIT Bhagalpur Founders & Tech Innovators"
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
              />
              
              {/* Soft Left Gradient Fade merging photo seamlessly with the warm Cream background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#EEE3D4]/90 via-[#EEE3D4]/20 to-transparent pointer-events-none hidden sm:block w-1/3" />
              
              {/* Subtle overall aesthetic tint */}
              <div className="absolute inset-0 bg-[#292825]/10 pointer-events-none" />
            </div>

            {/* Modern Floating Information Card (Positioned over lower/right of image) */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:right-4 lg:-bottom-6 lg:-right-4 w-full sm:w-80 bg-[#292825] text-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-[#B85C3A]/30 backdrop-blur-md">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[#D8C5B0] text-xs font-bold uppercase tracking-wider">
                  Cohort Begins In
                </span>
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#B85C3A]/30 border border-[#D8C5B0]/30 text-[10px] text-[#D8C5B0] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8C5B0] animate-pulse" />
                  Live
                </span>
              </div>

              {/* Large Metric Display matching reference */}
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  {timeLeft.days}
                </span>
                <span className="text-lg sm:text-xl font-bold text-[#D8C5B0]">
                  Days
                </span>
              </div>

              {/* Countdown Ticker Row */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#B85C3A]/30 text-center">
                <div className="bg-[#1E1D1B]/80 rounded-xl py-1.5 px-1">
                  <div className="text-xs font-bold text-white">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-[#D8C5B0]/80 uppercase">Hours</div>
                </div>
                <div className="bg-[#1E1D1B]/80 rounded-xl py-1.5 px-1">
                  <div className="text-xs font-bold text-white">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-[#D8C5B0]/80 uppercase">Mins</div>
                </div>
                <div className="bg-[#1E1D1B]/80 rounded-xl py-1.5 px-1">
                  <div className="text-xs font-bold text-[#D8C5B0]">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] text-[#D8C5B0]/80 uppercase">Secs</div>
                </div>
              </div>

              {/* Sub-action pill */}
              <Link
                to="/incubation"
                className="mt-4 block text-center py-2 px-3 rounded-xl bg-[#B85C3A] hover:bg-[#9E4E30] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Apply for Cohort 2026 →
              </Link>
            </div>

          </div>

        </div>

        {/* HORIZONTAL INFORMATION STRIP BELOW HERO (Directly matching Reference Structure) */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <div className="bg-white rounded-2xl sm:rounded-3xl lg:rounded-full border border-[#D8C5B0] shadow-sm p-4 sm:p-6 lg:py-5 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D8C5B0]/50">
              
              {/* Item 1: Date / Event */}
              <div className="flex items-center gap-3.5 lg:px-4 pt-3 sm:pt-0">
                <div className="w-10 h-10 rounded-2xl bg-[#EEE3D4] border border-[#D8C5B0] flex items-center justify-center text-[#B85C3A] shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[11px] font-bold tracking-wider text-[#6F6B5E] uppercase">
                    DATE
                  </span>
                  <span className="block text-sm sm:text-base font-bold text-[#292825]">
                    26 October 2026
                  </span>
                </div>
              </div>

              {/* Item 2: Time / Seed Funding */}
              <div className="flex items-center gap-3.5 lg:px-4 pt-3 sm:pt-0">
                <div className="w-10 h-10 rounded-2xl bg-[#EEE3D4] border border-[#D8C5B0] flex items-center justify-center text-[#B85C3A] shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[11px] font-bold tracking-wider text-[#6F6B5E] uppercase">
                    TIME / STATUS
                  </span>
                  <span className="block text-sm sm:text-base font-bold text-[#292825]">
                    10:00 AM Onwards
                  </span>
                </div>
              </div>

              {/* Item 3: Venue / Campus */}
              <div className="flex items-center gap-3.5 lg:px-4 pt-3 sm:pt-0">
                <div className="w-10 h-10 rounded-2xl bg-[#EEE3D4] border border-[#D8C5B0] flex items-center justify-center text-[#B85C3A] shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[11px] font-bold tracking-wider text-[#6F6B5E] uppercase">
                    VENUE
                  </span>
                  <span className="block text-sm sm:text-base font-bold text-[#292825]">
                    IIIT Bhagalpur
                  </span>
                </div>
              </div>

              {/* Item 4: Edition / Cohort */}
              <div className="flex items-center gap-3.5 lg:px-4 pt-3 sm:pt-0">
                <div className="w-10 h-10 rounded-2xl bg-[#EEE3D4] border border-[#D8C5B0] flex items-center justify-center text-[#B85C3A] shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[11px] font-bold tracking-wider text-[#6F6B5E] uppercase">
                    EDITION
                  </span>
                  <span className="block text-sm sm:text-base font-bold text-[#292825]">
                    3rd Cohort
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={scrollToAbout}
          className="text-[#B85C3A] hover:text-[#292825] animate-bounce focus:outline-none p-2 cursor-pointer transition-colors"
          aria-label="Scroll down to About section"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
