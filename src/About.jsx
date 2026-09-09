import { Link } from 'react-router-dom';

const pillars = [
  {
    title: 'Expert Mentorship',
    desc: 'Direct one-on-one advisory from successful alumni founders, angel investors, and seasoned technology executives from inception to product-market fit.',
    icon: (
      <svg className="w-6 h-6 text-[#B85C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    badge: 'Guidance',
  },
  {
    title: 'Rapid Prototyping & Labs',
    desc: 'Cutting-edge IoT, Robotics, AI, and Maker labs equipped with 3D printers, cloud server clusters, and testing benches to bring your prototypes alive.',
    icon: (
      <svg className="w-6 h-6 text-[#B85C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    badge: 'Hardware & Tech',
  },
  {
    title: 'Capital & Seed Grants',
    desc: 'Access to college seed funds up to ₹10 Lakhs, government incubation grants (NIDHI-EIR, TIDE 2.0, SISFS), and direct pitch days before premier VC funds.',
    icon: (
      <svg className="w-6 h-6 text-[#B85C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    badge: 'Funding',
  },
  {
    title: 'IP & Patent Facilitation',
    desc: 'End-to-end assistance from institutional patent attorneys to file provisional patents, trademark logos, and safeguard intellectual property at zero student cost.',
    icon: (
      <svg className="w-6 h-6 text-[#B85C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    badge: 'Legal & IP',
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#E5D6C5] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEE3D4] text-[#292825] border border-[#D8C5B0] text-xs font-bold tracking-widest uppercase mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B85C3A]" />
            Ecosystem Overview
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#292825] tracking-tight mb-4">
            What is Startup Cell?
          </h2>
          <p className="text-[#B85C3A] font-semibold text-base sm:text-lg mb-4">
            Empowering Tomorrow's Founders at IIIT Bhagalpur
          </p>
          <p className="text-[#292825]/80 text-base sm:text-lg leading-relaxed">
            The Startup Cell at IIIT Bhagalpur bridges the gap between academic innovation and commercial venture execution. We provide an end-to-end launchpad for student visionaries — offering early seed capital, specialized lab infrastructure, legal facilitation, and an inspiring ecosystem that turns ambitious ideas into scalable companies.
          </p>
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

        {/* Bottom Callout Banner in Dark Charcoal with Terracotta CTA */}
        <div className="bg-[#292825] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#B85C3A]/30">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-2 text-white">
              Have an innovative startup idea or prototype?
            </h3>
            <p className="text-[#D8C5B0] text-sm leading-relaxed">
              Join our pre-incubation cohort to validate your market, build your MVP, and access our mentor network.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/story"
              className="px-6 py-3 rounded-full text-sm font-semibold border border-[#D8C5B0]/40 text-white hover:bg-[#3D3B36] transition-all"
            >
              Read Our Story
            </Link>
            <Link
              to="/incubation"
              className="px-6 py-3 rounded-full text-sm font-bold bg-[#B85C3A] text-white hover:bg-[#9E4E30] border border-[#D8C5B0]/30 shadow-md transition-all"
            >
              Apply for Cohort →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
