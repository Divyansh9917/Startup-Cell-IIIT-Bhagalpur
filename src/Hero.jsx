import { Link } from 'react-router-dom';

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* High-Resolution Professional Workspace & Startup Collaboration Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform transition-transform duration-1000"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Tuned Gradient Overlay - Brighter Teal & Blue-Green with Dark Accents for Maximum Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#072e2b]/90 via-[#0a3f3a]/80 to-[#072e2b]/95 backdrop-blur-[2px]" />

      {/* Ambient Visual Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          IIIT Bhagalpur Innovation Ecosystem
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 drop-shadow-md">
          Fostering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-teal-300">Billion-Dollar</span> Dreams.
        </h1>

        {/* Hero Description */}
        <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          We empower student entrepreneurs with world-class mentorship, early-stage seed funding, prototyping facilities, and a thriving founder network — turning classroom curiosity into scalable ventures.
        </p>

        {/* Feature Highlights Banner */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-xs sm:text-sm text-teal-100 font-medium">
          <span className="flex items-center gap-1.5 bg-teal-900/60 border border-teal-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <span className="text-amber-400">⚡</span> ₹10L+ Seed Grants
          </span>
          <span className="flex items-center gap-1.5 bg-teal-900/60 border border-teal-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <span className="text-teal-300">🤝</span> 45+ Industry Mentors
          </span>
          <span className="flex items-center gap-1.5 bg-teal-900/60 border border-teal-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <span className="text-amber-400">💡</span> Patent & IP Filing Support
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Link
            to="/incubation"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-teal-950 shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40 hover:from-amber-300 hover:to-amber-500 hover:-translate-y-0.5 transition-all duration-300 text-center"
          >
            Explore Incubation Center →
          </Link>
          <Link
            to="/story"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-base border border-teal-400/40 text-slate-100 bg-teal-950/40 hover:bg-teal-900/60 hover:border-amber-400 hover:text-amber-300 hover:-translate-y-0.5 backdrop-blur-md transition-all duration-300 text-center"
          >
            Discover Our Story
          </Link>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-amber-300/80 hover:text-amber-300 animate-bounce focus:outline-none p-2"
        aria-label="Scroll down to About section"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
