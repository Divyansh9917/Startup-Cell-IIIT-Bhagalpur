import { useState } from 'react';
import { Link } from 'react-router-dom';

const noticesData = [
  {
    id: 1,
    category: 'Cohort 2026',
    date: 'Oct 2026',
    isNew: true,
    title: 'Applications Open: Spring 2026 Incubation Cohort',
    desc: 'Avail seed funding up to ₹10 Lakhs under Bihar Startup Policy & MeitY TIDE 2.0 with full Maker Lab prototyping access.',
    link: '/incubation',
    linkText: 'Apply Now →',
  },
  {
    id: 2,
    category: 'Seed Funding',
    date: 'Nov 2026',
    isNew: true,
    title: 'Bihar Startup Policy Interest-Free Seed Grants',
    desc: 'Government of Bihar seed capital tranches up to ₹10L available for student founders incubated at IIIT Bhagalpur.',
    link: '/incubation',
    linkText: 'View Guidelines →',
  },
  {
    id: 3,
    category: 'Maker Lab',
    date: 'Weekly',
    isNew: false,
    title: '24/7 Rapid Prototyping & 3D Printing Lab Slots',
    desc: 'Reserve time on precision 3D printers, laser cutters, oscilloscope test benches, and PCB micro-soldering stations.',
    link: '/incubation',
    linkText: 'Lab Access →',
  },
  {
    id: 4,
    category: 'IPR & Patents',
    date: 'Active',
    isNew: false,
    title: 'Institutional Patent Drafting & Prior-Art Search',
    desc: 'Free prior art searches and provisional patent filing assistance with institutional patent attorneys.',
    link: '/incubation',
    linkText: 'IP Support →',
  },
  {
    id: 5,
    category: 'Fellowship',
    date: 'Ongoing',
    isNew: false,
    title: 'DST NIDHI-EIR Monthly Student Fellowship',
    desc: '₹30,000/month fellowship support for graduating student founders pursuing full-time technology entrepreneurship.',
    link: '/incubation',
    linkText: 'Fellowship Info →',
  },
];

export default function Hero() {
  const [activeFilter, setActiveFilter] = useState('All');

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredNotices =
    activeFilter === 'All'
      ? noticesData
      : noticesData.filter((n) => n.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section
      id="home"
      className="relative bg-[#EEE3D4] pt-24 sm:pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Background Soft Earthy Accent Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 2xl:w-[500px] 2xl:h-[500px] bg-[#D8C5B0]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 2xl:w-[450px] 2xl:h-[450px] bg-[#B85C3A]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container - Fully Responsive from Mobile (320px) to 4K / TV (1920px+) */}
      <div className="relative max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1850px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        {/* Main Grid: Dedicated Left Notice Board (lg:col-span-4) + Main Hero Presentation (lg:col-span-8) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 2xl:gap-14 items-start">
          
          {/* ========================================================= */}
          {/* LEFT SIDE: SEPARATE DEDICATED NOTICE & ANNOUNCEMENT BOARD */}
          {/* ========================================================= */}
          <div className="order-2 lg:order-1 lg:col-span-4 xl:col-span-4 w-full">
            <div className="bg-[#292825] text-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-[#B85C3A]/40 relative overflow-hidden flex flex-col">
              {/* Decorative subtle ambient pattern inside board */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#B85C3A]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#D8C5B0]/5 rounded-full blur-2xl pointer-events-none" />

              {/* Notice Board Header */}
              <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#3D3B36] relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#B85C3A]/20 border border-[#B85C3A]/40 flex items-center justify-center text-[#D8C5B0] font-bold text-sm">
                    📢
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-extrabold text-white leading-tight tracking-tight">
                      Notice Board
                    </h2>
                    <p className="text-[10px] sm:text-[11px] text-[#D8C5B0]/80 font-medium">
                      Official Circulars & Announcements
                    </p>
                  </div>
                </div>

                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#B85C3A]/25 border border-[#B85C3A]/50 text-[10px] font-bold text-[#D8C5B0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B85C3A] animate-ping" />
                  Live
                </span>
              </div>

              {/* Category Quick Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-3 scrollbar-none relative z-10 text-[11px]">
                {['All', 'Cohort', 'Funding', 'Labs'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-3 py-1 rounded-full whitespace-nowrap transition-all cursor-pointer font-semibold ${
                      activeFilter === cat
                        ? 'bg-[#B85C3A] text-white shadow-xs font-bold'
                        : 'bg-[#1E1D1B] text-[#D8C5B0]/70 hover:text-white hover:bg-[#3D3B36]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Scrollable Notices List (Optimized for Mobile, Touch & Large Screens) */}
              <div className="space-y-3 max-h-[440px] sm:max-h-[480px] lg:max-h-[520px] 2xl:max-h-[600px] overflow-y-auto pr-1.5 relative z-10">
                {filteredNotices.map((notice) => (
                  <div
                    key={notice.id}
                    className="p-3.5 sm:p-4 rounded-2xl bg-[#1E1D1B]/95 hover:bg-[#1E1D1B] border border-[#3D3B36] hover:border-[#B85C3A]/60 transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      {/* Category and Date Badge */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#B85C3A] bg-[#292825] px-2 py-0.5 rounded-md border border-[#3D3B36]">
                          {notice.category}
                        </span>
                        <div className="flex items-center gap-2 text-[10px] text-[#D8C5B0]/70 font-medium">
                          {notice.isNew && (
                            <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[9px] border border-emerald-500/30">
                              NEW
                            </span>
                          )}
                          <span>📅 {notice.date}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#D8C5B0] transition-colors leading-snug mb-1.5">
                        {notice.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[11px] sm:text-xs text-[#D8C5B0]/75 leading-relaxed mb-3">
                        {notice.desc}
                      </p>
                    </div>

                    {/* Action Link */}
                    <div className="pt-2 border-t border-[#3D3B36]/60 flex items-center justify-between text-[11px]">
                      <span className="text-[#D8C5B0]/60 text-[10px]">IIITBH Startup Cell</span>
                      <Link
                        to={notice.link}
                        className="font-bold text-[#B85C3A] hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <span>{notice.linkText}</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Notice Board Footer */}
              <div className="pt-4 mt-4 border-t border-[#3D3B36] flex items-center justify-between text-[11px] text-[#D8C5B0]/70 relative z-10">
                <span>Ministry of Education IIC Verified</span>
                <Link
                  to="/incubation"
                  className="font-semibold text-white hover:text-[#B85C3A] transition-colors"
                >
                  View All Guidelines →
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT / MAIN HERO PRESENTATION COLUMN (lg:col-span-8) */}
          {/* ========================================================= */}
          <div className="order-1 lg:order-2 lg:col-span-8 xl:col-span-8 text-left">
            
            {/* National Importance & Institutional Accreditation Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#D8C5B0] text-[#B85C3A] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#B85C3A]" />
                IIIT Bhagalpur
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#EEE3D4] border border-[#D8C5B0] text-[#292825] text-xs sm:text-sm font-semibold">
                MoE Innovation Cell (MIC)
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#EEE3D4] border border-[#D8C5B0] text-[#292825] text-xs sm:text-sm font-semibold">
                Institution's Innovation Council (IIC)
              </span>
            </div>

            {/* Display Title */}
            <div className="mb-6">
              <span className="block text-xs sm:text-sm md:text-base font-bold text-[#B85C3A] tracking-wider uppercase mb-1">
                Innovation, Entrepreneurship & Incubation Centre
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-[#292825] tracking-tight leading-[1.06] uppercase">
                STARTUP CELL<br />
                <span className="text-[#B85C3A]">IIIT BHAGALPUR</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-[#6F6B5E] mt-2 max-w-2xl">
                An Institute of National Importance under Act of Parliament, Ministry of Education, Govt. of India
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-[#292825]/85 text-sm sm:text-base md:text-lg 2xl:text-xl leading-relaxed mb-8 max-w-2xl font-normal">
              Fostering student entrepreneurship, cutting-edge engineering research, and deep-tech innovation — providing early seed funding up to ₹10 Lakhs, rapid prototyping Maker Labs, institutional IP guidance, and investor access to build venture-backed enterprises.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                to="/incubation"
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base 2xl:text-lg bg-[#B85C3A] text-white hover:bg-[#9E4E30] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-center cursor-pointer inline-flex items-center gap-2"
              >
                <span>Apply for Incubation</span>
                <span>→</span>
              </Link>
              <Link
                to="/startups"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-full font-semibold text-sm sm:text-base 2xl:text-lg border border-[#292825]/30 text-[#292825] bg-white hover:bg-[#EEE3D4] hover:border-[#B85C3A] hover:text-[#B85C3A] transition-all duration-200 text-center inline-flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>Explore Startups</span>
                <span>→</span>
              </Link>
              <Link
                to="/story"
                className="px-5 py-3.5 rounded-full text-xs sm:text-sm 2xl:text-base font-semibold text-[#6F6B5E] hover:text-[#292825] transition-colors"
              >
                About Our Ecosystem
              </Link>
            </div>

            {/* Clean, Full-Width High-Definition Showcase Photograph */}
            <div className="relative rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-xl border border-[#D8C5B0] aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/9] 2xl:aspect-[16/8] bg-[#292825] mb-8">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85"
                alt="Startup Cell IIIT Bhagalpur Founders & Tech Innovators"
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/90 via-transparent to-transparent opacity-75" />
              
              {/* Bottom Caption Pill */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-4 rounded-2xl bg-[#292825]/90 backdrop-blur-md border border-[#B85C3A]/30 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B85C3A]" />
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#D8C5B0]">Innovation Hub</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-white mt-0.5">Maker Lab & Collaboration Sandbox • IIIT Bhagalpur</p>
                </div>
                <Link
                  to="/gallery"
                  className="text-xs font-semibold text-[#B85C3A] hover:text-white transition-colors self-start sm:self-auto"
                >
                  View Event Gallery →
                </Link>
              </div>
            </div>

            {/* Official Backing Logos / Badges */}
            <div className="pt-4 border-t border-[#D8C5B0] flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs 2xl:text-sm text-[#6F6B5E]">
              <span className="font-bold text-[#292825] uppercase tracking-wider text-[11px] 2xl:text-xs">Supported By:</span>
              <span className="bg-white/90 border border-[#D8C5B0] px-3 py-1 rounded-md font-semibold text-[#292825] shadow-2xs">Startup India</span>
              <span className="bg-white/90 border border-[#D8C5B0] px-3 py-1 rounded-md font-semibold text-[#292825] shadow-2xs">Bihar Startup Policy</span>
              <span className="bg-white/90 border border-[#D8C5B0] px-3 py-1 rounded-md font-semibold text-[#292825] shadow-2xs">MeitY TIDE 2.0</span>
              <span className="bg-white/90 border border-[#D8C5B0] px-3 py-1 rounded-md font-semibold text-[#292825] shadow-2xs">NISP Framework</span>
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* 4-PILLAR METRICS STRIP BELOW HERO                         */}
        {/* ========================================================= */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#D8C5B0] shadow-sm p-4 sm:p-6 lg:py-6 lg:px-8 2xl:py-8 2xl:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D8C5B0]/50">
              
              {/* Item 1: Startups */}
              <div className="flex items-center gap-3.5 lg:px-4 pt-3 sm:pt-0">
                <div className="w-11 h-11 2xl:w-14 2xl:h-14 rounded-2xl bg-[#EEE3D4] border border-[#D8C5B0] flex items-center justify-center text-[#B85C3A] shrink-0 font-black text-lg 2xl:text-2xl">
                  🚀
                </div>
                <div>
                  <span className="block text-2xl 2xl:text-3xl font-black text-[#292825]">
                    35+
                  </span>
                  <span className="block text-xs 2xl:text-sm font-semibold text-[#6F6B5E] uppercase tracking-wider">
                    Startups Incubated
                  </span>
                </div>
              </div>

              {/* Item 2: Seed Capital */}
              <div className="flex items-center gap-3.5 lg:px-4 pt-3 sm:pt-0">
                <div className="w-11 h-11 2xl:w-14 2xl:h-14 rounded-2xl bg-[#EEE3D4] border border-[#D8C5B0] flex items-center justify-center text-[#B85C3A] shrink-0 font-black text-lg 2xl:text-2xl">
                  💰
                </div>
                <div>
                  <span className="block text-2xl 2xl:text-3xl font-black text-[#292825]">
                    ₹3.2 Cr+
                  </span>
                  <span className="block text-xs 2xl:text-sm font-semibold text-[#6F6B5E] uppercase tracking-wider">
                    Seed Capital & Grants
                  </span>
                </div>
              </div>

              {/* Item 3: Patents */}
              <div className="flex items-center gap-3.5 lg:px-4 pt-3 sm:pt-0">
                <div className="w-11 h-11 2xl:w-14 2xl:h-14 rounded-2xl bg-[#EEE3D4] border border-[#D8C5B0] flex items-center justify-center text-[#B85C3A] shrink-0 font-black text-lg 2xl:text-2xl">
                  📜
                </div>
                <div>
                  <span className="block text-2xl 2xl:text-3xl font-black text-[#292825]">
                    18+
                  </span>
                  <span className="block text-xs 2xl:text-sm font-semibold text-[#6F6B5E] uppercase tracking-wider">
                    Patents & IPs Filed
                  </span>
                </div>
              </div>

              {/* Item 4: Mentors */}
              <div className="flex items-center gap-3.5 lg:px-4 pt-3 sm:pt-0">
                <div className="w-11 h-11 2xl:w-14 2xl:h-14 rounded-2xl bg-[#EEE3D4] border border-[#D8C5B0] flex items-center justify-center text-[#B85C3A] shrink-0 font-black text-lg 2xl:text-2xl">
                  🤝
                </div>
                <div>
                  <span className="block text-2xl 2xl:text-3xl font-black text-[#292825]">
                    50+
                  </span>
                  <span className="block text-xs 2xl:text-sm font-semibold text-[#6F6B5E] uppercase tracking-wider">
                    Mentors & Angel VCs
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <div className="mt-8 flex justify-center">
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
