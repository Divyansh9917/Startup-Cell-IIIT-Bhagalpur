import { useState } from 'react';

const timelineMilestones = [
  {
    id: 1,
    year: '2021',
    title: 'The Inception & First Cohort',
    subtitle: 'Genesis of the Entrepreneurship Ecosystem',
    desc: 'Founded with a mandate to cultivate entrepreneurial thinking within IIIT Bhagalpur. Launched the inaugural pre-incubation cohort with 12 student teams and built our first Maker Lab.',
    badge: 'Foundation & Genesis',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85',
    caption: 'First Pre-Incubation Cohort & Ideation Sandbox',
    metric: '12 Initial Startups • 1 Maker Lab',
    tags: ['Pre-Incubation', 'Maker Lab', 'Ideation'],
  },
  {
    id: 2,
    year: '2022',
    title: 'Startup India & Grant Accreditations',
    subtitle: 'Institutional Expansion & Seed Grants',
    desc: 'Recognized as an official institutional incubation partner under Startup India and MSME schemes, unlocking seed grant disbursements of up to ₹5 Lakhs per student team.',
    badge: 'Grants & Policy',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=85',
    caption: 'Official Recognition by Startup India & MSME',
    metric: '₹5L Grant Tranches • Policy Backing',
    tags: ['Startup India', 'MSME', 'Seed Capital'],
  },
  {
    id: 3,
    year: '2023',
    title: 'First Angel Round & VC Pitch Days',
    subtitle: 'Direct Access to Premier Venture Funds',
    desc: 'Hosted the inaugural Eastern India Student Startup Summit. Four student ventures secured institutional seed rounds from angel syndicates and marquee venture funds.',
    badge: 'VC Connect & Funding',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=85',
    caption: 'Eastern India Student Startup Summit & Pitch Day',
    metric: '4 Institutional Rounds • 20+ Angels',
    tags: ['Demo Day', 'Angel Round', 'VC Syndicate'],
  },
  {
    id: 4,
    year: '2024',
    title: 'Dedicated AI & Hardware Prototyping Center',
    subtitle: '5,000 Sq. Ft. State-of-the-Art Hub',
    desc: 'Expanded with a 5,000 sq. ft. dedicated incubation wing featuring high-performance GPU compute clusters, precision 3D fabrication, and an automated IoT testing sandbox.',
    badge: 'Infrastructure & Labs',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85',
    caption: 'High-Performance NVIDIA GPU & IoT Test Sandbox',
    metric: 'GPU Compute • 3D Rapid Fabrication',
    tags: ['GPU Cluster', 'IoT Sandbox', 'Hardware Lab'],
  },
  {
    id: 5,
    year: '2025 - Present',
    title: 'Crossing $2.5M+ in Cumulative Capital',
    subtitle: 'Global Scale & Defensible IP Creation',
    desc: 'Over 120 startups mentored, 32 patents filed, and our incubated alumni employing over 400+ engineers across the country with $2.5M+ raised in aggregate funding.',
    badge: 'Global Scale & Impact',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=85',
    caption: 'Over 120 Startups Mentored & 400+ Alumni Engineers',
    metric: '$2.5M+ Capital • 32 Patents Filed',
    tags: ['Series A / Seed', '32 Patents', '400+ Jobs'],
  },
];

export default function VerticalTimeline() {
  const [activeHoverIndex, setActiveHoverIndex] = useState(0);

  return (
    <div className="relative w-full">
      {/* Central Vertical Timeline Track for Desktop */}
      <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[3px] bg-gradient-to-b from-[#B85C3A]/20 via-[#B85C3A] to-[#B85C3A]/20 shadow-[0_0_12px_rgba(184,92,58,0.3)] z-0 rounded-full" />

      {/* Timeline Rows Container */}
      <div className="space-y-12 lg:space-y-20 relative z-10">
        {timelineMilestones.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isActive = activeHoverIndex === index;

          return (
            <div
              key={item.id}
              className="relative lg:grid lg:grid-cols-12 lg:gap-8 items-center"
              onMouseEnter={() => setActiveHoverIndex(index)}
              onFocus={() => setActiveHoverIndex(index)}
            >
              {/* Desktop Left Column */}
              <div className="hidden lg:block lg:col-span-5">
                {isLeft ? (
                  /* Timeline Content Card (Left Side) */
                  <div
                    tabIndex={0}
                    className={`relative rounded-3xl p-7 transition-all duration-500 cursor-pointer border text-left outline-none ${
                      isActive
                        ? 'bg-white shadow-2xl shadow-[#292825]/10 border-[#B85C3A] ring-2 ring-[#B85C3A]/20 scale-[1.02] -translate-x-1'
                        : 'bg-white/95 shadow-xs hover:shadow-lg border-[#D8C5B0] hover:border-[#B85C3A]/60'
                    }`}
                  >
                    {/* Active Accent Glow Pill */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-2xl font-black text-[#292825] tracking-tight font-heading">
                        {item.year}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEE3D4] text-[#292825] border border-[#D8C5B0]">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#292825] mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#B85C3A] mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-[#292825]/80 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[#D8C5B0]">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium bg-[#EEE3D4] text-[#292825] border border-[#D8C5B0] px-2.5 py-0.5 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Hover Prompt Hint */}
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#B85C3A]">
                      <span>Hover to view event showcase</span>
                      <span className="inline-block transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Dynamic Preview Image (Left Side for Right Card) */
                  <div
                    className={`relative rounded-3xl overflow-hidden border shadow-xl transition-all duration-500 ${
                      isActive
                        ? 'opacity-100 scale-100 border-[#B85C3A] shadow-2xl shadow-[#292825]/20 ring-4 ring-[#B85C3A]/20'
                        : 'opacity-40 scale-95 border-[#D8C5B0] hover:opacity-80'
                    }`}
                  >
                    <div className="relative h-64 overflow-hidden bg-[#292825]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          isActive ? 'scale-105' : 'scale-100'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/95 via-[#292825]/40 to-transparent" />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-3 left-3 bg-[#292825]/90 backdrop-blur-md border border-[#B85C3A]/40 text-[#D8C5B0] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        📅 {item.year} Showcase
                      </div>

                      {/* Image Caption & Metric Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <p className="text-sm font-bold text-white mb-0.5 leading-snug">
                          {item.caption}
                        </p>
                        <p className="text-xs text-[#D8C5B0] font-medium">
                          ⚡ {item.metric}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Desktop Central Node Indicator */}
              <div className="hidden lg:flex lg:col-span-2 justify-center items-center relative z-20">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-500 shadow-lg ${
                    isActive
                      ? 'bg-[#B85C3A] text-white scale-125 ring-8 ring-[#B85C3A]/20 shadow-[#B85C3A]/40'
                      : 'bg-white text-[#292825] border-2 border-[#D8C5B0] hover:scale-110'
                  }`}
                >
                  <span className="tracking-tighter font-extrabold">{item.year.split(' ')[0]}</span>
                </div>
              </div>

              {/* Desktop Right Column */}
              <div className="hidden lg:block lg:col-span-5">
                {!isLeft ? (
                  /* Timeline Content Card (Right Side) */
                  <div
                    tabIndex={0}
                    className={`relative rounded-3xl p-7 transition-all duration-500 cursor-pointer border text-left outline-none ${
                      isActive
                        ? 'bg-white shadow-2xl shadow-[#292825]/10 border-[#B85C3A] ring-2 ring-[#B85C3A]/20 scale-[1.02] translate-x-1'
                        : 'bg-white/95 shadow-xs hover:shadow-lg border-[#D8C5B0] hover:border-[#B85C3A]/60'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-2xl font-black text-[#292825] tracking-tight font-heading">
                        {item.year}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EEE3D4] text-[#292825] border border-[#D8C5B0]">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#292825] mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#B85C3A] mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-[#292825]/80 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[#D8C5B0]">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium bg-[#EEE3D4] text-[#292825] border border-[#D8C5B0] px-2.5 py-0.5 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#B85C3A]">
                      <span>Hover to view event showcase</span>
                      <span className="inline-block transition-transform duration-300">
                        ←
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Dynamic Preview Image (Right Side for Left Card) */
                  <div
                    className={`relative rounded-3xl overflow-hidden border shadow-xl transition-all duration-500 ${
                      isActive
                        ? 'opacity-100 scale-100 border-[#B85C3A] shadow-2xl shadow-[#292825]/20 ring-4 ring-[#B85C3A]/20'
                        : 'opacity-40 scale-95 border-[#D8C5B0] hover:opacity-80'
                    }`}
                  >
                    <div className="relative h-64 overflow-hidden bg-[#292825]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          isActive ? 'scale-105' : 'scale-100'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/95 via-[#292825]/40 to-transparent" />

                      <div className="absolute top-3 left-3 bg-[#292825]/90 backdrop-blur-md border border-[#B85C3A]/40 text-[#D8C5B0] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        📅 {item.year} Showcase
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <p className="text-sm font-bold text-white mb-0.5 leading-snug">
                          {item.caption}
                        </p>
                        <p className="text-xs text-[#D8C5B0] font-medium">
                          ⚡ {item.metric}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile / Tablet View (< lg screens): Clean Stacked Timeline */}
              <div className="lg:hidden relative pl-8 border-l-2 border-[#B85C3A]/70 ml-3">
                {/* Node dot on line */}
                <div
                  className={`absolute -left-[17px] top-4 w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md transition-all ${
                    isActive
                      ? 'bg-[#B85C3A] text-white ring-4 ring-[#B85C3A]/30'
                      : 'bg-[#292825] text-white border border-[#D8C5B0]/40'
                  }`}
                >
                  {item.year.slice(2, 4)}
                </div>

                <div
                  onClick={() => setActiveHoverIndex(index)}
                  className={`bg-white rounded-2xl p-6 shadow-md border transition-all ${
                    isActive ? 'border-[#B85C3A] shadow-xl ring-2 ring-[#B85C3A]/20' : 'border-[#D8C5B0]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xl font-black text-[#292825] font-heading">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EEE3D4] text-[#292825] border border-[#D8C5B0]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#292825] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-[#B85C3A] mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-[#292825]/80 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Responsive inline preview image */}
                  <div className="rounded-xl overflow-hidden relative h-44 mb-3 border border-[#D8C5B0]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <p className="text-xs font-bold text-white">{item.caption}</p>
                      <p className="text-[11px] text-[#D8C5B0]">⚡ {item.metric}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-medium bg-[#EEE3D4] text-[#292825] border border-[#D8C5B0] px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
