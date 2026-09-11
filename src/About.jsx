import { Link } from 'react-router-dom';

const pillars = [
  {
    title: 'Expert Mentorship & Advisory',
    desc: 'Direct advisory from seasoned alumni founders, venture capitalists, and academic researchers guiding you from idea validation to product-market fit.',
    icon: (
      <svg className="w-6 h-6 text-[#B85C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    badge: 'Advisory',
  },
  {
    title: 'Rapid Prototyping & Maker Lab',
    desc: 'Cutting-edge IoT, Robotics, and AI labs with precision 3D printers, laser cutters, oscilloscope benches, and cloud compute nodes to build physical and digital MVPs.',
    icon: (
      <svg className="w-6 h-6 text-[#B85C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    badge: 'Hardware & Tech',
  },
  {
    title: 'Seed Grants & Capital Up to ₹10L',
    desc: 'Access institutional seed funds, Bihar Startup Policy seed tranches up to ₹10 Lakhs, central grants (MeitY TIDE 2.0, NIDHI-EIR), and VC syndicate pitch days.',
    icon: (
      <svg className="w-6 h-6 text-[#B85C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    badge: 'Funding',
  },
  {
    title: 'IP & Patent Filing Assistance',
    desc: 'End-to-end facilitation through institutional patent attorneys to conduct prior-art searches, file provisional patents, and safeguard intellectual property with institutional support.',
    icon: (
      <svg className="w-6 h-6 text-[#B85C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    badge: 'Legal & IP',
  },
];

const objectives = [
  { step: '01', title: 'Ideate', desc: 'Hackathons, ideation camps, and problem-statement discovery across engineering branches.' },
  { step: '02', title: 'Innovate', desc: 'Transforming theoretical lab assignments into functional, bench-tested minimum viable products.' },
  { step: '03', title: 'Incubate', desc: 'Company incorporation, seed funding tranches, co-working space, and patent registration.' },
  { step: '04', title: 'Accelerate', desc: 'Demo days before tier-1 VC syndicates, angel networks, and commercial enterprise pilots.' },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#E5D6C5] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEE3D4] text-[#292825] border border-[#D8C5B0] text-xs font-bold tracking-widest uppercase mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B85C3A]" />
            About Startup Cell & Incubation Centre
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#292825] tracking-tight mb-4">
            Catalyzing Innovation at IIIT Bhagalpur
          </h2>
          <p className="text-[#B85C3A] font-semibold text-base sm:text-lg mb-4">
            Under the Aegis of MoE Innovation Cell (MIC) & National Innovation & Startup Policy (NISP)
          </p>
          <p className="text-[#292825]/85 text-base sm:text-lg leading-relaxed">
            The Startup Cell at Indian Institute of Information Technology Bhagalpur serves as the premier launchpad for student and faculty entrepreneurship. We bridge the critical chasm between academic engineering breakthroughs and commercially viable market ventures — providing seed funding, maker infrastructure, patent drafting, and corporate access.
          </p>
        </div>

        {/* 4-Step Strategic Pathway */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj) => (
              <div
                key={obj.step}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#D8C5B0] text-left hover:border-[#B85C3A] transition-colors"
              >
                <span className="text-xs font-black text-[#B85C3A] tracking-widest uppercase bg-[#EEE3D4] px-2 py-0.5 rounded-md border border-[#D8C5B0] inline-block mb-3">
                  Stage {obj.step}
                </span>
                <h3 className="text-xl font-bold text-[#292825] mb-2">{obj.title}</h3>
                <p className="text-xs sm:text-sm text-[#292825]/80 leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-[#D8C5B0] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#EEE3D4] border border-[#D8C5B0] flex items-center justify-center">
                    {p.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-[#B85C3A] bg-[#EEE3D4] border border-[#D8C5B0] px-2.5 py-0.5 rounded-full">
                    {p.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#292825] mb-2">
                  {p.title}
                </h3>
                <p className="text-[#292825]/80 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="bg-[#292825] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#B85C3A]/30">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D8C5B0] bg-[#B85C3A]/20 border border-[#D8C5B0]/30 px-3 py-1 rounded-full mb-3 inline-block">
              Zero-Equity Pre-Incubation
            </span>
            <h3 className="text-2xl font-bold mb-2 text-white">
              Have an innovative concept or lab prototype?
            </h3>
            <p className="text-[#D8C5B0] text-sm leading-relaxed">
              Join the IIIT Bhagalpur Pre-Incubation cohort to validate your market, utilize Maker Lab 3D printers, and access seed grants without parting with any equity.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/startups"
              className="px-6 py-3 rounded-full text-sm font-semibold border border-[#D8C5B0]/40 text-white hover:bg-[#3D3B36] transition-all"
            >
              View Startups
            </Link>
            <Link
              to="/incubation"
              className="px-6 py-3 rounded-full text-sm font-bold bg-[#B85C3A] text-white hover:bg-[#9E4E30] border border-[#D8C5B0]/30 shadow-md transition-all"
            >
              Apply for Incubation →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
