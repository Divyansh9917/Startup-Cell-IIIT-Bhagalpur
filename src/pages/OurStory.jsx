import { Link } from 'react-router-dom';
import VerticalTimeline from '../components/VerticalTimeline';

const values = [
  {
    title: 'Action-First Mentality',
    desc: 'We prioritize bench-tested prototypes, functional GitHub repositories, and real customer discovery interviews over abstract slide decks.',
    icon: '⚡',
  },
  {
    title: 'Student-Driven Ecosystem',
    desc: 'Our hackathons, workshops, and pitch days are organized by student builders for student innovators with faculty mentorship.',
    icon: '🎯',
  },
  {
    title: 'Deep-Tech & IP Focus',
    desc: 'We incentivize defensible engineering, patentable electronics/hardware innovations, and proprietary algorithmic architectures.',
    icon: '🔬',
  },
  {
    title: 'Cross-Disciplinary Synergy',
    desc: 'Teams combining Computer Science, Electronics, Mechatronics, and AI collaborate to create holistic, market-ready solutions.',
    icon: '🌐',
  },
];

export default function OurStory() {
  return (
    <div className="pt-24 pb-20 bg-[#EEE3D4]">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#EEE3D4] via-[#E5D6C5] to-[#EEE3D4] text-[#292825] pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#D8C5B0]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D8C5B0]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D8C5B0] text-[#B85C3A] text-xs font-bold uppercase tracking-widest mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#B85C3A]" />
            Heritage & Vision
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#292825]">
            The Journey of <span className="text-[#B85C3A]">Startup Cell</span>
          </h1>
          <p className="text-[#292825]/85 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            From a student-led robotics club and coding circles to a premier institutional incubation centre in Eastern India under the Ministry of Education.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#D8C5B0]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest uppercase text-[#B85C3A] bg-[#EEE3D4] border border-[#D8C5B0] px-3 py-1 rounded-md mb-4 inline-block">
                Origin Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292825] tracking-tight mb-6">
                Bridging the Gap Between Code & Commercialization
              </h2>
              <div className="space-y-4 text-[#292825]/80 text-base leading-relaxed">
                <p>
                  At Indian Institute of Information Technology Bhagalpur, students continually engineered groundbreaking algorithmic architectures, autonomous robotics systems, and edge IoT devices during hackathons and academic research projects.
                </p>
                <p>
                  Recognizing that brilliant prototypes frequently remained trapped within laboratory walls, the Institute Directorate and visionary faculty established the <strong>Startup Cell & Incubation Centre</strong> in 2021. Aligned with the National Innovation and Startup Policy (NISP), the mission was clear: equip student visionaries with seed capital, legal patent backing, maker lab machinery, and direct VC access.
                </p>
                <p>
                  Today, recognized by the Ministry of Education's Innovation Cell (MIC) and the Department of Industries (Govt. of Bihar), the cell has nurtured over 35+ ventures, facilitated 18+ patent specifications, and disbursed over ₹3.2 Crores in seed capital and grants.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D8C5B0]">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85"
                  alt="Students brainstorming at Startup Cell IIIT Bhagalpur"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-semibold text-white">Innovation Sandbox</p>
                  <p className="text-xs text-[#D8C5B0]">Collaborative maker workspace at IIIT Bhagalpur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-[#B85C3A] bg-[#E5D6C5] border border-[#D8C5B0] px-3 py-1 rounded-full mb-3 inline-block">
            Chronology & Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292825] tracking-tight mb-4">
            Key Milestones in Our Evolution
          </h2>
          <p className="text-[#292825]/75 text-sm sm:text-base">
            Hover or click on any milestone to view historic cohort highlights, laboratory expansions, and funding milestones.
          </p>
        </div>

        <VerticalTimeline />
      </section>

      {/* Core Values */}
      <section className="bg-[#E5D6C5] py-20 px-4 sm:px-6 lg:px-8 border-y border-[#D8C5B0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#B85C3A] bg-[#EEE3D4] border border-[#D8C5B0] px-3 py-1 rounded-full mb-3 inline-block">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292825] tracking-tight">
              Values That Drive Our Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-md border border-[#D8C5B0] transition-all duration-300"
              >
                <div className="text-3xl mb-4 p-3 w-14 h-14 rounded-xl bg-[#EEE3D4] border border-[#D8C5B0] text-[#B85C3A] flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-[#292825] mb-2">
                  {v.title}
                </h3>
                <p className="text-[#292825]/80 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="bg-[#292825] rounded-3xl p-10 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden border border-[#B85C3A]/30">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
              Ready to Build Your Venture With Us?
            </h2>
            <p className="text-[#D8C5B0] text-base sm:text-lg mb-8 leading-relaxed">
              Whether you have a proof-of-concept on breadboard or a tested alpha web platform, the Startup Cell provides seed grants, patent backing, and dedicated incubation space.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/incubation"
                className="px-8 py-3.5 rounded-full font-bold bg-[#B85C3A] text-white hover:bg-[#9E4E30] border border-[#D8C5B0]/30 shadow-lg shadow-[#141312]/30 transition-all"
              >
                Apply for Incubation →
              </Link>
              <Link
                to="/startups"
                className="px-8 py-3.5 rounded-full font-semibold border border-[#D8C5B0]/40 text-white hover:bg-[#3D3B36] transition-all"
              >
                Explore Incubated Startups
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
