import { useState } from 'react';

const teamCategories = [
  'All',
  'Institutional Leadership',
  'Faculty Coordinators',
  'Student Executive Council',
  'Technical & Maker Lab',
];

const teamMembers = [
  {
    id: 1,
    name: 'Prof. (Dr.) Pradeep Kumar Jain',
    role: 'Director & Chief Patron',
    category: 'Institutional Leadership',
    department: 'Directorate • IIIT Bhagalpur',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    bio: 'Championing technology entrepreneurship, academic-industry convergence, and indigenous deep-tech venture creation at IIIT Bhagalpur.',
    email: 'director@iiitbh.ac.in',
  },
  {
    id: 2,
    name: 'Dr. Gaurav Kumar',
    role: 'Faculty In-Charge, Incubation & Startup Cell',
    category: 'Faculty Coordinators',
    department: 'Department of Computer Science & Engineering',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Spearheading institutional incubation policies, startup cohort admissions, and government grant schemes (TIDE 2.0 & Bihar Startup Policy).',
    email: 'incubation.head@iiitbh.ac.in',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 3,
    name: 'Dr. Rajesh Verma',
    role: 'Faculty Coordinator (IPR & Hardware Prototyping)',
    category: 'Faculty Coordinators',
    department: 'Electronics & Communication Engineering',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    bio: 'Guiding hardware robotics startups on embedded PCB design, sensor telemetry, and institutional patent drafting.',
    email: 'ipr.cell@iiitbh.ac.in',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 4,
    name: 'Aarav Sharma',
    role: 'President, Student Startup Cell',
    category: 'Student Executive Council',
    department: 'B.Tech CSE • Final Year',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: 'Founder of an AI dev-tool venture; coordinating campus startup initiatives, investor networking, and student founder mentorship.',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 5,
    name: 'Priya Nambiar',
    role: 'Vice President & Operations Lead',
    category: 'Student Executive Council',
    department: 'B.Tech ECE • Final Year',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'Managing cohort onboarding logistics, incubator desk allocations, and inter-collegiate innovation partnerships.',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 6,
    name: 'Rohan Deshmukh',
    role: 'Technical & Maker Lab Lead',
    category: 'Technical & Maker Lab',
    department: 'B.Tech Mechatronics • 3rd Year',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Supervising 3D printing equipment, laser cutters, oscilloscope benches, and embedded hardware MVP development for incubatees.',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 7,
    name: 'Sneha Roy',
    role: 'Seed Grants & Incubation Coordinator',
    category: 'Technical & Maker Lab',
    department: 'B.Tech CSE • 3rd Year',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80',
    bio: 'Assisting student teams with Bihar Startup Policy application drafting and milestone expense accounting.',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  {
    id: 8,
    name: 'Vikramaditya Bose',
    role: 'Head of Hackathons & E-Summit',
    category: 'Student Executive Council',
    department: 'B.Tech AI & Data Science • 3rd Year',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: 'Curating flagship 48-hour ideathons, founder fireside sessions, and the annual Eastern India E-Summit.',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
];

export default function OurTeam() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMembers =
    selectedCategory === 'All'
      ? teamMembers
      : teamMembers.filter((m) => m.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 bg-[#EEE3D4]">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#EEE3D4] via-[#E5D6C5] to-[#EEE3D4] text-[#292825] pt-16 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-b border-[#D8C5B0]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D8C5B0]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#B85C3A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D8C5B0] text-[#B85C3A] text-xs font-bold uppercase tracking-widest mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#B85C3A] animate-pulse" />
            Governance & Leadership
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#292825]">
            Minds Behind the <span className="text-[#B85C3A]">Startup Cell</span>
          </h1>
          <p className="text-[#292825]/85 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            A dedicated collective of institutional patrons, faculty coordinators, and student leaders committed to powering venture excellence at IIIT Bhagalpur.
          </p>
        </div>
      </section>

      {/* Category Tabs & Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 bg-white p-2.5 sm:p-3 rounded-2xl sm:rounded-full shadow-sm border border-[#D8C5B0] max-w-3xl mx-auto">
          {teamCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#B85C3A] text-white shadow-sm font-bold'
                    : 'text-[#292825]/80 hover:text-[#B85C3A] hover:bg-[#EEE3D4]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-[#D8C5B0] hover:border-[#B85C3A] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Member Avatar */}
                <div className="relative h-64 overflow-hidden bg-[#292825]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292825]/80 via-transparent to-transparent opacity-60" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-semibold bg-[#292825]/90 text-[#D8C5B0] border border-[#B85C3A]/30 px-2.5 py-1 rounded-full backdrop-blur-md">
                    {member.category}
                  </span>
                </div>

                {/* Profile Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#292825] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#B85C3A] font-bold text-xs mb-2">
                    {member.role}
                  </p>
                  <p className="text-[#6F6B5E] text-xs font-medium mb-3 pb-3 border-b border-[#D8C5B0]">
                    {member.department}
                  </p>
                  <p className="text-[#292825]/80 text-xs sm:text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Social / Contact Links */}
              <div className="px-6 py-4 bg-[#EEE3D4]/50 border-t border-[#D8C5B0] flex items-center justify-between">
                <span className="text-[11px] text-[#292825] font-semibold">Institutional Contact</span>
                <div className="flex items-center gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="text-[#6F6B5E] hover:text-[#B85C3A] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                      </svg>
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} GitHub`}
                      className="text-[#6F6B5E] hover:text-[#B85C3A] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                      </svg>
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`${member.name} Email`}
                      className="text-[#6F6B5E] hover:text-[#B85C3A] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the Cell Banner */}
        <div className="mt-20 bg-[#292825] rounded-3xl p-10 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-[#B85C3A]/30">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D8C5B0] bg-[#B85C3A]/20 border border-[#D8C5B0]/30 px-3 py-1 rounded-full mb-3 inline-block">
              Student Cell Volunteer Recruitment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">
              Want to Join the Startup Cell Student Team?
            </h2>
            <p className="text-[#D8C5B0] text-sm leading-relaxed">
              We recruit passionate student managers, technical leads, event organizers, and graphic designers each academic semester.
            </p>
          </div>
          <a
            href="mailto:startupcell@iiitbh.ac.in?subject=Application%20for%20Startup%20Cell%20Student%20Team"
            className="px-8 py-3.5 rounded-full font-bold bg-[#B85C3A] text-white hover:bg-[#9E4E30] border border-[#D8C5B0]/30 shadow-md whitespace-nowrap transition-all cursor-pointer"
          >
            Apply to Join Student Team →
          </a>
        </div>
      </section>
    </div>
  );
}
