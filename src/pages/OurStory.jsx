import { Link } from 'react-router-dom';

const milestones = [
  {
    year: '2021',
    title: 'The Inception & First Cohort',
    desc: 'Founded with a mandate to cultivate entrepreneurial thinking within IIIT Bhagalpur. Launched the inaugural pre-incubation cohort with 12 student teams and built our first Maker Lab.',
    badge: 'Foundation',
  },
  {
    year: '2022',
    title: 'Startup India & Grant Accreditations',
    desc: 'Recognized as an official institutional incubation partner under Startup India and MSME schemes, unlocking seed grant disbursements of up to ₹5 Lakhs per student team.',
    badge: 'Grants & Policy',
  },
  {
    year: '2023',
    title: 'First Angel Round & VC Pitch Days',
    desc: 'Hosted the inaugural Eastern India Student Startup Summit. Four student ventures secured institutional seed rounds from angel syndicates and marquee venture funds.',
    badge: 'VC Connect',
  },
  {
    year: '2024',
    title: 'Dedicated AI & Hardware Prototyping Center',
    desc: 'Expanded with a 5,000 sq. ft. dedicated incubation wing featuring high-performance GPU compute clusters, precision 3D fabrication, and an automated IoT testing sandbox.',
    badge: 'Infrastructure',
  },
  {
    year: '2025 - Present',
    title: 'Crossing $2.5M+ in Cumulative Capital',
    desc: 'Over 120 startups mentored, 32 patents filed, and our incubated alumni employing over 400+ engineers across the country.',
    badge: 'Global Scale',
  },
];

const values = [
  {
    title: 'Action-First Mentality',
    desc: 'We prioritize shipped code, functional prototypes, and real customer feedback over endless slide decks.',
    icon: '⚡',
  },
  {
    title: 'Student-Driven Energy',
    desc: 'Our initiatives, hackathons, and pitch fests are organized by passionate student leaders for students.',
    icon: '🎯',
  },
  {
    title: 'Deep-Tech & IP Focus',
    desc: 'We encourage defensible technology, proprietary algorithms, and patentable engineering innovations.',
    icon: '🔬',
  },
  {
    title: 'Inclusive Collaboration',
    desc: 'Cross-disciplinary teams combining software, hardware, design, and business strategy excel together.',
    icon: '🌐',
  },
];

export default function OurStory() {
  return (
    <div className="pt-24 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#072e2b] via-[#0a3a35] to-[#f4f8f6] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Our Heritage & Vision
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
            The Journey of <span className="text-amber-400">Startup Cell</span>
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            From humble beginnings in a small computer lab to a premier innovation launchpad in Eastern India. Here is the story of how we build tomorrow’s technology leaders.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-teal-900/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest uppercase text-teal-700 bg-teal-50 px-3 py-1 rounded-md mb-4 inline-block">
                Origin Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072e2b] tracking-tight mb-6">
                Bridging the Gap Between Code & Capital
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  At IIIT Bhagalpur, students were building remarkable algorithmic models, robotic drones, and web systems during late-night coding sessions. However, very few of those projects ever escaped the laboratory walls to reach market reality.
                </p>
                <p>
                  Recognizing this gap, faculty advisors and student innovators established the <strong>Startup Cell</strong> in 2021. The mandate was uncompromising: provide student founders with institutional seed funding, relentless mentorship, patent facilitation, and direct access to angel investors.
                </p>
                <p>
                  Today, the Startup Cell functions as a thriving ecosystem comprising incubation facilities, maker labs, legal advisory desks, and venture partnerships — serving as a bridge between classroom innovation and scalable business execution.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-teal-900/10">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85"
                  alt="Students brainstorming at Startup Cell IIIT Bhagalpur"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#072e2b]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-semibold">Innovation Sandbox</p>
                  <p className="text-xs text-teal-200/80">Collaborative workspace at IIIT Bhagalpur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full mb-3 inline-block">
            Chronology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072e2b] tracking-tight">
            Key Milestones in Our Evolution
          </h2>
        </div>

        <div className="relative border-l-2 border-teal-600/30 ml-4 sm:ml-32 space-y-12">
          {milestones.map((m) => (
            <div key={m.year} className="relative pl-8 sm:pl-10 group">
              {/* Year Marker on Left */}
              <div className="sm:absolute sm:-left-32 sm:top-1 text-teal-800 font-extrabold text-lg sm:text-xl font-heading mb-1 sm:mb-0">
                {m.year}
              </div>

              {/* Glowing Dot on Line */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-400 border-4 border-white shadow-md group-hover:scale-125 transition-transform" />

              {/* Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg border border-teal-900/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#072e2b]">
                    {m.title}
                  </h3>
                  <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/60">
                    {m.badge}
                  </span>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#f0f5f3] py-20 px-4 sm:px-6 lg:px-8 border-y border-teal-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-teal-700 bg-teal-100/60 px-3 py-1 rounded-full mb-3 inline-block">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072e2b] tracking-tight">
              Values That Drive Our Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-teal-900/5 transition-all duration-300"
              >
                <div className="text-3xl mb-4 p-3 w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-[#072e2b] mb-2">
                  {v.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="bg-gradient-to-r from-[#072e2b] via-[#093d37] to-[#072e2b] rounded-3xl p-10 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
              Ready to Write the Next Chapter With Us?
            </h2>
            <p className="text-teal-100/80 text-base sm:text-lg mb-8 leading-relaxed">
              Whether you have a napkin sketch or an active alpha product, the Startup Cell is here to back you with mentors, grants, and incubation space.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/incubation"
                className="px-8 py-3.5 rounded-full font-bold bg-amber-400 text-teal-950 hover:bg-amber-300 shadow-lg shadow-amber-400/20 transition-all"
              >
                Apply for Incubation →
              </Link>
              <Link
                to="/team"
                className="px-8 py-3.5 rounded-full font-semibold border border-teal-400/40 text-slate-100 hover:bg-teal-900/50 transition-all"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
