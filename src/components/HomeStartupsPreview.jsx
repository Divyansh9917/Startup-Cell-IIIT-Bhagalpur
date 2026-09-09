import { Link } from 'react-router-dom';

const featuredStartups = [
  {
    id: 1,
    name: 'NeuralSight AI',
    tagline: 'AI-assisted medical imaging anomaly detection for rural healthcare clinics.',
    category: 'DeepTech & AI',
    funding: '₹25L Raised',
    badge: 'Seed Funded',
    founders: 'Rahul Verma & Dr. R. Verma',
    batch: 'Class of 2024',
    bg: 'bg-emerald-700',
    initials: 'NS',
  },
  {
    id: 2,
    name: 'RoboKriti Dynamics',
    tagline: 'Autonomous precision rovers and modular sensor payloads for warehouse inspection.',
    category: 'Hardware & IoT',
    funding: '₹10L Bihar Grant',
    badge: 'Incubated',
    founders: 'Aman Deep & Sneha Singh',
    batch: 'Class of 2025',
    bg: 'bg-[#B85C3A]',
    initials: 'RD',
  },
  {
    id: 3,
    name: 'AuraWatt Energy',
    tagline: 'Intelligent IoT micro-grid controllers reducing battery degradation in EV hubs.',
    category: 'CleanTech',
    funding: '₹15L Seed Grant',
    badge: 'Seed Funded',
    founders: 'Vikramaditya Bose & Priya N.',
    batch: 'Class of 2024',
    bg: 'bg-amber-600',
    initials: 'AW',
  },
];

export default function HomeStartupsPreview() {
  return (
    <section className="bg-[#EEE3D4] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D8C5B0]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D8C5B0] text-[#B85C3A] text-xs font-bold uppercase tracking-widest mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B85C3A]" />
              Student Ventures
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292825] tracking-tight">
              Featured Startups from IIIT Bhagalpur
            </h2>
            <p className="text-[#6F6B5E] text-sm sm:text-base mt-2 max-w-2xl">
              Real companies conceptualized in classrooms and scaled inside the Incubation Centre.
            </p>
          </div>

          <Link
            to="/startups"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-white text-[#292825] hover:text-[#B85C3A] border border-[#D8C5B0] shadow-xs hover:shadow-md transition-all self-start md:self-auto"
          >
            <span>View All 35+ Startups</span>
            <span>→</span>
          </Link>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredStartups.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-3xl p-7 shadow-xs hover:shadow-xl border border-[#D8C5B0] hover:border-[#B85C3A] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-2xl ${s.bg} text-white font-extrabold flex items-center justify-center text-base shadow-sm`}>
                    {s.initials}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#EEE3D4] text-[#292825] border border-[#D8C5B0]">
                    {s.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#292825] mb-1">{s.name}</h3>
                <span className="text-xs font-semibold text-[#B85C3A] mb-3 inline-block">
                  {s.category}
                </span>

                <p className="text-xs sm:text-sm text-[#292825]/80 leading-relaxed mb-6">
                  {s.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D8C5B0] flex items-center justify-between text-xs">
                <span className="font-bold text-[#292825]">{s.funding}</span>
                <span className="text-[#6F6B5E]">{s.founders}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
