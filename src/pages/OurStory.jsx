import { Link } from 'react-router-dom';
import VerticalTimeline from '../components/VerticalTimeline';

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
    <div className="pt-24 pb-20 bg-[#EEE3D4]">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#EEE3D4] via-[#E5D6C5] to-[#EEE3D4] text-[#292825] pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#D8C5B0]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D8C5B0]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D8C5B0] text-[#B85C3A] text-xs font-bold uppercase tracking-widest mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#B85C3A]" />
            Our Heritage & Vision
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#292825]">
            The Journey of <span className="text-[#B85C3A]">Startup Cell</span>
          </h1>
          <p className="text-[#292825]/80 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            From humble beginnings in a small computer lab to a premier innovation launchpad in Eastern India. Here is the story of how we build tomorrow’s technology leaders.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#D8C5B0]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest uppercase text-[#292825] bg-[#EEE3D4] border border-[#D8C5B0] px-3 py-1 rounded-md mb-4 inline-block">
                Origin Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292825] tracking-tight mb-6">
                Bridging the Gap Between Code & Capital
              </h2>
              <div className="space-y-4 text-[#292825]/80 text-base leading-relaxed">
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D8C5B0]">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85"
                  alt="Students brainstorming at Startup Cell IIIT Bhagalpur"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-semibold text-white">Innovation Sandbox</p>
                  <p className="text-xs text-[#D8C5B0]">Collaborative workspace at IIIT Bhagalpur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-[#292825] bg-[#E5D6C5] border border-[#D8C5B0] px-3 py-1 rounded-full mb-3 inline-block">
            Chronology & Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292825] tracking-tight mb-4">
            Key Milestones in Our Evolution
          </h2>
          <p className="text-[#292825]/75 text-sm sm:text-base">
            Hover over any milestone card to preview historic cohort moments, incubator upgrades, and funding milestones.
          </p>
        </div>

        <VerticalTimeline />
      </section>

      {/* Core Values */}
      <section className="bg-[#E5D6C5] py-20 px-4 sm:px-6 lg:px-8 border-y border-[#D8C5B0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#292825] bg-[#EEE3D4] border border-[#D8C5B0] px-3 py-1 rounded-full mb-3 inline-block">
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
              Ready to Write the Next Chapter With Us?
            </h2>
            <p className="text-[#D8C5B0] text-base sm:text-lg mb-8 leading-relaxed">
              Whether you have a napkin sketch or an active alpha product, the Startup Cell is here to back you with mentors, grants, and incubation space.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/incubation"
                className="px-8 py-3.5 rounded-full font-bold bg-[#B85C3A] text-white hover:bg-[#9E4E30] border border-[#D8C5B0]/30 shadow-lg shadow-[#141312]/30 transition-all"
              >
                Apply for Incubation →
              </Link>
              <Link
                to="/team"
                className="px-8 py-3.5 rounded-full font-semibold border border-[#D8C5B0]/40 text-white hover:bg-[#3D3B36] transition-all"
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
