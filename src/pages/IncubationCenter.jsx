import { useState } from 'react';

const incubationPrograms = [
  {
    title: 'Pre-Incubation (Ideation & MVP)',
    duration: '3 - 6 Months',
    target: 'Early-stage student teams with a validated problem statement',
    features: [
      'Dedicated ideation desks & high-speed internet',
      'Guidance on Lean Canvas & Product-Market Fit',
      'Maker Lab & 3D printer prototyping access',
      'Bi-weekly milestone check-ins with faculty mentors',
    ],
    grant: 'Up to ₹1,00,000 prototype micro-grant',
    badge: 'Stage 1',
  },
  {
    title: 'Full Incubation (Launch & Scale)',
    duration: '12 - 18 Months',
    target: 'Startups with a working MVP seeking initial market traction',
    features: [
      'Dedicated private cabin/cubicle in Incubation Hub',
      'Free patent specification drafting & trademark filing',
      '$100k+ AWS/GCP cloud & developer tooling credits',
      'Company incorporation (Pvt Ltd) & compliance support',
      'Direct introductions to VC funds & angel syndicates',
    ],
    grant: 'Up to ₹10,00,000 seed funding allocation',
    badge: 'Stage 2 (Flagship)',
    highlight: true,
  },
  {
    title: 'Scale & Acceleration Track',
    duration: '6 - 12 Months',
    target: 'Revenue-generating ventures raising institutional funding',
    features: [
      'Term sheet negotiation advisory & legal support',
      'Access to international alumni founder networks',
      'Demo Day pitch slots before Tier-1 VC funds',
      'Enterprise sales matchmaking & corporate pilots',
    ],
    grant: 'VC syndicate & follow-on co-investment',
    badge: 'Stage 3',
  },
];

const facilities = [
  {
    title: '24/7 Co-working & Private Pods',
    desc: 'Ergonomic seating, high-speed fiber internet, private conference booths, and round-the-clock lab access.',
    icon: '🏢',
  },
  {
    title: 'Rapid Prototyping & Maker Lab',
    desc: 'Industrial 3D printers, laser cutters, oscilloscope test benches, and SMD soldering stations.',
    icon: '🛠️',
  },
  {
    title: 'AI & GPU High-Compute Cluster',
    desc: 'On-premise NVIDIA GPU nodes for model training, computer vision benchmarking, and deep learning experiments.',
    icon: '⚡',
  },
  {
    title: 'Patent & Legal Advisory Clinic',
    desc: 'Free patent search, prior art analysis, and provisional patent filing with registered institutional attorneys.',
    icon: '⚖️',
  },
  {
    title: 'Seed Funding & Grant Facilitation',
    desc: 'Direct disbursement of institutional seed capital and fast-tracked government grants (TIDE 2.0, NIDHI-EIR).',
    icon: '💰',
  },
  {
    title: '$100K+ Cloud & SaaS Perks',
    desc: 'Generous credit packages from AWS Activate, Google for Startups, Microsoft Azure, MongoDB, and Stripe.',
    icon: '☁️',
  },
];

const faqs = [
  {
    q: 'Who is eligible to apply for incubation at Startup Cell?',
    a: 'Any current student, research scholar, alumnus, or faculty member of IIIT Bhagalpur (as well as collaborating external student teams with at least one IIITBH co-founder) can apply with an innovative concept.',
  },
  {
    q: 'Do I need a fully built product or company registered before applying?',
    a: 'No! You can apply at the Ideation/Pre-Incubation stage with a prototype concept. We assist you with MVP development, customer validation, and company incorporation when you are ready.',
  },
  {
    q: 'How does the seed funding grant evaluation work?',
    a: 'Selected incubatees present their business milestones and expenditure plans to our Incubation Advisory Committee during quarterly Pitch Days. Grants are milestone-disbursed.',
  },
  {
    q: 'Does the incubation center take equity in student ventures?',
    a: 'We operate on a student-first model. Pre-incubation is 100% zero-equity. For full incubation with substantial cash seed grants, standard nominal institutional equity policies (1-3%) apply according to institute incubation guidelines.',
  },
];

export default function IncubationCenter() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const [formData, setFormData] = useState({
    founderName: '',
    email: '',
    phone: '',
    startupName: '',
    domain: 'Software / AI / SaaS',
    stage: 'Ideation / Prototype',
    pitchSummary: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setIsApplyModalOpen(false);
    setFormData({
      founderName: '',
      email: '',
      phone: '',
      startupName: '',
      domain: 'Software / AI / SaaS',
      stage: 'Ideation / Prototype',
      pitchSummary: '',
    });
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#2F4156] via-[#3D536D] to-[#F5EFEB] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#567C8D]/30 border border-[#C8D9E6]/40 text-[#C8D9E6] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C8D9E6]" />
            World-Class Infrastructure & Support
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
            Incubation <span className="text-[#C8D9E6]">Center</span>
          </h1>
          <p className="text-slate-100 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            The epicenter of startup creation at IIIT Bhagalpur. We provide seed grants up to ₹10 Lakhs, Maker Labs, legal backing, and institutional mentorship to scale your venture.
          </p>
          <button
            onClick={() => setIsApplyModalOpen(true)}
            className="px-8 py-4 rounded-full font-bold text-base bg-[#567C8D] text-white hover:bg-[#456573] border border-[#C8D9E6]/30 shadow-xl shadow-[#1E2B3A]/30 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            Apply for Cohort Incubation →
          </button>
        </div>
      </section>

      {/* Incubation Programs / Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-24 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#2F4156] bg-[#C8D9E6]/50 border border-[#567C8D]/20 px-3 py-1 rounded-full mb-3 inline-block">
            Tailored Incubation Tracks
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F4156] tracking-tight">
            Programs Designed for Every Stage
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {incubationPrograms.map((prog) => (
            <div
              key={prog.title}
              className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                prog.highlight
                  ? 'bg-gradient-to-b from-[#2F4156] to-[#3D536D] text-white shadow-2xl border-2 border-[#567C8D] scale-100 lg:-translate-y-2'
                  : 'bg-white text-[#2F4156] shadow-md border border-[#C8D9E6] hover:shadow-xl hover:border-[#567C8D]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      prog.highlight
                        ? 'bg-[#567C8D] text-white border border-[#C8D9E6]/40'
                        : 'bg-[#C8D9E6]/50 text-[#2F4156] border border-[#567C8D]/30'
                    }`}
                  >
                    {prog.badge}
                  </span>
                  <span
                    className={`text-xs font-medium ${
                      prog.highlight ? 'text-[#C8D9E6]' : 'text-[#567C8D]'
                    }`}
                  >
                    ⏱ {prog.duration}
                  </span>
                </div>

                <h3
                  className={`text-2xl font-bold mb-3 ${
                    prog.highlight ? 'text-white' : 'text-[#2F4156]'
                  }`}
                >
                  {prog.title}
                </h3>

                <p
                  className={`text-sm mb-6 ${
                    prog.highlight ? 'text-[#C8D9E6]/90' : 'text-[#2F4156]/75'
                  }`}
                >
                  {prog.target}
                </p>

                <div
                  className={`p-4 rounded-xl mb-6 font-semibold text-sm flex items-center gap-2 ${
                    prog.highlight
                      ? 'bg-[#1E2B3A] border border-[#567C8D]/50 text-[#C8D9E6]'
                      : 'bg-[#F5EFEB] border border-[#C8D9E6] text-[#2F4156]'
                  }`}
                >
                  <span>💵</span> {prog.grant}
                </div>

                <h4
                  className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                    prog.highlight ? 'text-[#C8D9E6]' : 'text-[#2F4156]'
                  }`}
                >
                  Program Offerings:
                </h4>
                <ul className="space-y-3 text-sm mb-8">
                  {prog.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className={`shrink-0 font-bold ${
                          prog.highlight ? 'text-[#C8D9E6]' : 'text-[#567C8D]'
                        }`}
                      >
                        ✓
                      </span>
                      <span className={prog.highlight ? 'text-slate-100' : 'text-[#2F4156]/80'}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setIsApplyModalOpen(true)}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                  prog.highlight
                    ? 'bg-[#567C8D] text-white hover:bg-[#456573] border border-[#C8D9E6]/30 shadow-lg shadow-[#1E2B3A]/50'
                    : 'bg-[#2F4156] text-white hover:bg-[#3D536D] shadow-md'
                }`}
              >
                Apply for this Track →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities & Perks Grid */}
      <section className="bg-[#ECE3DC] py-20 px-4 sm:px-6 lg:px-8 border-y border-[#C8D9E6] mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#2F4156] bg-[#C8D9E6]/50 border border-[#567C8D]/20 px-3 py-1 rounded-full mb-3 inline-block">
              State-of-the-Art Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F4156] tracking-tight">
              Incubation Facilities & Founder Perks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac) => (
              <div
                key={fac.title}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-[#C8D9E6] hover:border-[#567C8D] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-4 p-3.5 w-14 h-14 rounded-xl bg-[#F5EFEB] border border-[#C8D9E6] text-[#567C8D] flex items-center justify-center">
                    {fac.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#2F4156] mb-2">
                    {fac.title}
                  </h3>
                  <p className="text-[#2F4156]/75 text-sm leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#2F4156] bg-[#C8D9E6]/50 border border-[#567C8D]/20 px-3 py-1 rounded-full mb-3 inline-block">
            Seamless Onboarding
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F4156] tracking-tight">
            How to Get Incubated in 4 Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Submit Pitch', desc: 'Fill out the online application with your team info and concept summary.' },
            { step: '02', title: 'Internal Review', desc: 'Faculty and domain experts evaluate novelty, market potential, and tech feasibility.' },
            { step: '03', title: 'Pitch Day', desc: 'Present a 10-minute live demo and slide pitch before the incubation board.' },
            { step: '04', title: 'Onboarding & Grants', desc: 'Sign incubation MoU, claim your lab space, and receive initial grant tranches.' },
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm border border-[#C8D9E6] text-center relative">
              <span className="w-10 h-10 rounded-full bg-[#567C8D] text-white font-extrabold text-sm flex items-center justify-center mx-auto mb-4 shadow-md">
                {item.step}
              </span>
              <h3 className="text-base font-bold text-[#2F4156] mb-2">{item.title}</h3>
              <p className="text-[#2F4156]/75 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#2F4156] bg-[#C8D9E6]/50 border border-[#567C8D]/20 px-3 py-1 rounded-full mb-3 inline-block">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F4156] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#C8D9E6] overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left font-bold text-[#2F4156] text-base sm:text-lg flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#567C8D] text-xl font-bold shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-[#2F4156]/80 text-sm sm:text-base leading-relaxed border-t border-[#C8D9E6]/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Application Form Modal */}
      {isApplyModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#1E2B3A]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in"
          onClick={() => setIsApplyModalOpen(false)}
        >
          <div
            className="relative max-w-xl w-full bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#C8D9E6] my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F5EFEB] text-[#2F4156] hover:bg-[#C8D9E6] flex items-center justify-center transition-colors cursor-pointer font-bold"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#C8D9E6] text-[#2F4156] font-extrabold text-2xl flex items-center justify-center mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#2F4156] mb-2">Application Submitted!</h3>
                <p className="text-[#2F4156]/80 text-sm leading-relaxed mb-6">
                  Thank you for applying to the Incubation Center at IIIT Bhagalpur. Our incubation panel will review your pitch and reach out within 5-7 business days.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full font-bold bg-[#2F4156] text-white hover:bg-[#3D536D] transition-all text-sm cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2F4156] bg-[#C8D9E6]/50 border border-[#567C8D]/20 px-2.5 py-1 rounded-md mb-2 inline-block">
                    Official Incubation Cohort
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#2F4156]">
                    Apply for Incubation Support
                  </h3>
                  <p className="text-[#567C8D] text-xs mt-1">
                    Fill in your venture details to start your incubation review.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-[#2F4156] mb-1">
                      Lead Founder Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Aarav Sharma"
                      value={formData.founderName}
                      onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#C8D9E6] text-sm focus:border-[#567C8D] focus:outline-none focus:ring-2 focus:ring-[#567C8D]/20 text-[#2F4156]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2F4156] mb-1">
                        College / Institutional Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="name@iiitbh.ac.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#C8D9E6] text-sm focus:border-[#567C8D] focus:outline-none focus:ring-2 focus:ring-[#567C8D]/20 text-[#2F4156]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2F4156] mb-1">
                        Contact Phone *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#C8D9E6] text-sm focus:border-[#567C8D] focus:outline-none focus:ring-2 focus:ring-[#567C8D]/20 text-[#2F4156]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2F4156] mb-1">
                      Startup / Venture Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. QuantumNeural AI"
                      value={formData.startupName}
                      onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#C8D9E6] text-sm focus:border-[#567C8D] focus:outline-none focus:ring-2 focus:ring-[#567C8D]/20 text-[#2F4156]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2F4156] mb-1">
                        Venture Domain
                      </label>
                      <select
                        value={formData.domain}
                        onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#C8D9E6] text-sm focus:border-[#567C8D] focus:outline-none focus:ring-2 focus:ring-[#567C8D]/20 bg-white text-[#2F4156]"
                      >
                        <option>Software / AI / SaaS</option>
                        <option>Hardware / IoT / Robotics</option>
                        <option>CleanTech & Energy</option>
                        <option>FinTech / EdTech</option>
                        <option>BioTech / HealthTech</option>
                        <option>Other / Open Innovation</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2F4156] mb-1">
                        Current Stage
                      </label>
                      <select
                        value={formData.stage}
                        onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#C8D9E6] text-sm focus:border-[#567C8D] focus:outline-none focus:ring-2 focus:ring-[#567C8D]/20 bg-white text-[#2F4156]"
                      >
                        <option>Ideation / Concept</option>
                        <option>Prototype / Lab MVP</option>
                        <option>Beta Testing with Users</option>
                        <option>Early Revenue Traction</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2F4156] mb-1">
                      Brief Pitch & Problem Solved *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe what problem you are solving, target market, and technical advantage..."
                      value={formData.pitchSummary}
                      onChange={(e) => setFormData({ ...formData, pitchSummary: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#C8D9E6] text-sm focus:border-[#567C8D] focus:outline-none focus:ring-2 focus:ring-[#567C8D]/20 text-[#2F4156]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm bg-[#567C8D] text-white hover:bg-[#456573] border border-[#C8D9E6]/30 shadow-md transition-all mt-2 cursor-pointer"
                  >
                    Submit Application for Review →
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
