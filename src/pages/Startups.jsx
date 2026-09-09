import { useState } from 'react';
import { Link } from 'react-router-dom';

const startupCategories = [
  'All',
  'DeepTech & AI',
  'Hardware & IoT',
  'CleanTech & Energy',
  'EdTech & SaaS',
  'AgriTech',
];

const startupsData = [
  {
    id: 1,
    name: 'NeuralSight AI',
    tagline: 'AI-assisted ultrasound & radiographic anomaly detection for rural healthcare centers.',
    category: 'DeepTech & AI',
    stage: 'Seed Funded',
    funding: '₹25 Lakhs (TIDE 2.0 & Angel)',
    founders: 'Rahul Verma (CSE) & Dr. R. Verma (Faculty Mentor)',
    batch: 'Class of 2024',
    logoBg: 'bg-emerald-700',
    logoText: 'NS',
    summary: 'Built on proprietary computer vision models optimized for edge hardware, enabling instant radiological triage in tier-2/3 district clinics.',
    patents: '1 Patent Filed (Provisional)',
    website: 'https://neuralsight.example.com',
  },
  {
    id: 2,
    name: 'RoboKriti Dynamics',
    tagline: 'Autonomous precision rovers and modular sensor payloads for industrial warehouse inspection.',
    category: 'Hardware & IoT',
    stage: 'Incubated',
    funding: '₹10 Lakhs (Bihar Startup Policy)',
    founders: 'Aman Deep (Mechatronics) & Sneha Singh (ECE)',
    batch: 'Class of 2025',
    logoBg: 'bg-[#B85C3A]',
    logoText: 'RD',
    summary: 'Developed inside the Startup Cell Maker Lab using 3D-printed chassis and customized PCB telemetry for automated facility monitoring.',
    patents: '2 Utility Patents Applied',
    website: 'https://robokriti.example.com',
  },
  {
    id: 3,
    name: 'AuraWatt Energy',
    tagline: 'Intelligent IoT smart-grid switches and thermal management for EV charging hubs.',
    category: 'CleanTech & Energy',
    stage: 'Seed Funded',
    funding: '₹15 Lakhs (MSME Grant & Seed Fund)',
    founders: 'Vikramaditya Bose (AI-DS) & Priya N. (ECE)',
    batch: 'Class of 2024',
    logoBg: 'bg-amber-600',
    logoText: 'AW',
    summary: 'Algorithm-driven load balancing that cuts fast-charger power surges and prolongs lithium-ion battery lifespans by up to 28%.',
    patents: '1 Design Trademark Registered',
    website: 'https://aurawatt.example.com',
  },
  {
    id: 4,
    name: 'CodeCraft Labs',
    tagline: 'Autonomous AI code reviewing and vulnerability shielding for high-security DevOps pipelines.',
    category: 'EdTech & SaaS',
    stage: 'Scaling',
    funding: 'Bootstrapped + ₹5L Micro-Grant',
    founders: 'Kartik Aryan & Shreya Mishra (CSE)',
    batch: 'Class of 2025',
    logoBg: 'bg-blue-600',
    logoText: 'CC',
    summary: 'Developer tooling leveraging localized LLMs to catch dependency bugs and security loopholes before production deployment.',
    patents: 'Copyright on Core AST Engine',
    website: 'https://codecraft.example.com',
  },
  {
    id: 5,
    name: 'BioTerra AgroTech',
    tagline: 'Precision drone telemetry and multi-spectral soil moisture mapping for Eastern India farmers.',
    category: 'AgriTech',
    stage: 'Pre-Incubation',
    funding: '₹3 Lakhs (Ideathon First Prize & Seed)',
    founders: 'Rohan Sharma (Mechatronics) & Team',
    batch: 'Class of 2026',
    logoBg: 'bg-lime-700',
    logoText: 'BT',
    summary: 'Cost-effective multispectral sensor attachment for agricultural drones that forecasts pest attacks 7 days prior to visual symptoms.',
    patents: 'IP Drafting Stage',
    website: 'https://bioterra.example.com',
  },
  {
    id: 6,
    name: 'Kavach Endpoint Defense',
    tagline: 'Lightweight zero-trust cryptographic authentication for regional cooperative banks.',
    category: 'DeepTech & AI',
    stage: 'Incubated',
    funding: '₹10 Lakhs (Institute Seed Fund)',
    founders: 'Tanmay Saxena & Aditi Roy (CSE)',
    batch: 'Class of 2024',
    logoBg: 'bg-purple-700',
    logoText: 'KD',
    summary: 'Hardware-key integrated cryptographic layer designed to prevent phishing and unauthorized database modifications in financial nodes.',
    patents: '1 Patent Published',
    website: 'https://kavachdefense.example.com',
  },
];

export default function Startups() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredStartups =
    selectedCategory === 'All'
      ? startupsData
      : startupsData.filter((s) => s.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 bg-[#EEE3D4]">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#EEE3D4] via-[#E5D6C5] to-[#EEE3D4] text-[#292825] pt-16 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-b border-[#D8C5B0]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D8C5B0]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#B85C3A]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D8C5B0] text-[#B85C3A] text-xs font-bold uppercase tracking-widest mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#B85C3A] animate-pulse" />
            Venture Portfolio & Success Stories
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#292825]">
            Startups Incubated at <span className="text-[#B85C3A]">IIIT Bhagalpur</span>
          </h1>
          <p className="text-[#292825]/85 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Discover student and faculty ventures solving real-world challenges across healthcare, robotics, clean energy, and artificial intelligence.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#D8C5B0]">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#B85C3A]">35+</div>
              <div className="text-xs font-semibold text-[#6F6B5E] mt-0.5">Startups Incubated</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#D8C5B0]">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#B85C3A]">₹3.2 Cr+</div>
              <div className="text-xs font-semibold text-[#6F6B5E] mt-0.5">Seed Grants & VC</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#D8C5B0]">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#B85C3A]">18+</div>
              <div className="text-xs font-semibold text-[#6F6B5E] mt-0.5">Patents & IPs</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#D8C5B0]">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#B85C3A]">400+</div>
              <div className="text-xs font-semibold text-[#6F6B5E] mt-0.5">Jobs Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 bg-white p-2.5 sm:p-3 rounded-2xl sm:rounded-full shadow-sm border border-[#D8C5B0] max-w-4xl mx-auto">
          {startupCategories.map((cat) => {
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

        {/* Startups Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStartups.map((startup) => (
            <div
              key={startup.id}
              className="bg-white rounded-3xl p-7 shadow-xs hover:shadow-xl border border-[#D8C5B0] hover:border-[#B85C3A] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with emblem badge and stage */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl ${startup.logoBg} text-white font-extrabold text-lg flex items-center justify-center shadow-md`}
                    >
                      {startup.logoText}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#292825] leading-tight">
                        {startup.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-[#B85C3A] bg-[#EEE3D4] px-2 py-0.5 rounded-md mt-1 inline-block">
                        {startup.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#292825] text-[#D8C5B0] border border-[#B85C3A]/30 shrink-0">
                    {startup.stage}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-[#292825] font-medium text-sm leading-snug mb-3">
                  {startup.tagline}
                </p>

                {/* Detailed Summary */}
                <p className="text-[#292825]/75 text-xs sm:text-sm leading-relaxed mb-5">
                  {startup.summary}
                </p>

                {/* Key Metrics / Highlights Box */}
                <div className="bg-[#EEE3D4]/50 rounded-xl p-3.5 border border-[#D8C5B0] space-y-1.5 mb-5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#6F6B5E] font-medium">Funding / Grants:</span>
                    <span className="font-bold text-[#292825]">{startup.funding}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6F6B5E] font-medium">Intellectual Property:</span>
                    <span className="font-semibold text-[#B85C3A]">{startup.patents}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6F6B5E] font-medium">Founders:</span>
                    <span className="font-medium text-[#292825]">{startup.founders}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6F6B5E] font-medium">Cohort / Batch:</span>
                    <span className="font-medium text-[#6F6B5E]">{startup.batch}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 border-t border-[#D8C5B0] flex items-center justify-between">
                <span className="text-xs text-[#6F6B5E] font-medium">IIITBH Incubatee</span>
                <Link
                  to="/incubation"
                  className="text-xs font-bold text-[#B85C3A] hover:text-[#9E4E30] flex items-center gap-1 group"
                >
                  <span>Explore Support</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Banner: Pitch Your Startup */}
        <div className="mt-20 bg-[#292825] rounded-3xl p-10 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-[#B85C3A]/30">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D8C5B0] bg-[#B85C3A]/20 border border-[#D8C5B0]/30 px-3 py-1 rounded-full mb-3 inline-block">
              For IIITBH Innovators
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">
              Building the Next Big Thing at IIIT Bhagalpur?
            </h2>
            <p className="text-[#D8C5B0] text-sm leading-relaxed">
              Get seed capital up to ₹10 Lakhs, Maker Lab equipment, patent filing assistance, and direct VC introductions through our incubation tracks.
            </p>
          </div>
          <Link
            to="/incubation"
            className="px-8 py-3.5 rounded-full font-bold bg-[#B85C3A] text-white hover:bg-[#9E4E30] border border-[#D8C5B0]/30 shadow-md whitespace-nowrap transition-all"
          >
            Apply for Incubation →
          </Link>
        </div>
      </section>
    </div>
  );
}
