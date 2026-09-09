import { useState } from 'react';

const incubationPrograms = [
  {
    title: 'Pre-Incubation (Ideation & MVP)',
    duration: '3 - 6 Months',
    target: 'Early-stage student & researcher teams with a validated technical problem statement',
    features: [
      '100% Zero-Equity student participation model',
      'Dedicated Maker Lab & 3D rapid-prototyping access',
      'Guidance on Lean Canvas, Market Validation & Product-Market Fit',
      'Bi-weekly advisory reviews with Faculty Coordinator & Mentors',
      'Free initial prior-art patent search & clearance assistance',
    ],
    grant: 'Up to ₹1,00,000 prototype micro-grant',
    badge: 'Stage 1 (Ideation)',
  },
  {
    title: 'Full Incubation (Launch & Scale)',
    duration: '12 - 18 Months',
    target: 'Registered or incorporable startups with a working MVP seeking initial market traction',
    features: [
      'Dedicated air-conditioned cubicle & 24/7 access in Incubation Wing',
      'Full legal support for Private Limited company incorporation',
      'Direct facilitation for ₹10 Lakhs Bihar Startup Policy seed fund',
      '$100k+ developer perks (AWS Activate, GCP, Azure, GitHub Enterprise)',
      'Free complete patent specification drafting by institutional patent attorneys',
      'Quarterly presentation before the Incubation Advisory Committee',
    ],
    grant: 'Up to ₹10,00,000 seed funding allocation',
    badge: 'Stage 2 (Flagship)',
    highlight: true,
  },
  {
    title: 'Scale & Acceleration Track',
    duration: '6 - 12 Months',
    target: 'Revenue-generating or funded ventures raising follow-on institutional VC rounds',
    features: [
      'Direct pitch access to angel networks, micro-VCs, and seed funds',
      'Assistance with term sheet negotiations and capitalization table advisory',
      'Global alumni mentor matching with US & Indian tech founders',
      'Corporate pilot matchmaking & enterprise government sales access',
    ],
    grant: 'VC syndicate & follow-on co-investment matching',
    badge: 'Stage 3 (Growth)',
  },
];

const facilities = [
  {
    title: '24/7 Co-Working & Private Pods',
    desc: 'High-speed gigabit fiber internet, ergonomic workstations, private conference meeting rooms, and round-the-clock secure lab access.',
    icon: '🏢',
  },
  {
    title: 'Maker Lab & Rapid Prototyping',
    desc: 'Industrial 3D printers, laser cutters, PCB micro-soldering stations, digital oscilloscopes, and robotics test beds.',
    icon: '🛠️',
  },
  {
    title: 'AI & GPU High-Compute Cluster',
    desc: 'NVIDIA GPU compute nodes available for deep learning training, computer vision benchmarking, and large algorithmic simulations.',
    icon: '⚡',
  },
  {
    title: 'Institutional IP & Legal Clinic',
    desc: 'Comprehensive prior-art search, provisional and full patent drafting, trademarking, and copyright facilitation at zero cost to students.',
    icon: '⚖️',
  },
  {
    title: 'Government Seed Grant Facilitation',
    desc: 'Assistance for Bihar Startup Policy (₹10L interest-free seed grant), MeitY TIDE 2.0, DST NIDHI-EIR (₹30,000/mo stipend), and SISFS.',
    icon: '💰',
  },
  {
    title: '$100K+ Cloud & Developer Perks',
    desc: 'Complimentary cloud credits from AWS Activate, Google for Startups, Microsoft for Startups, Stripe processing credits, and MongoDB Atlas.',
    icon: '☁️',
  },
];

const faqs = [
  {
    q: 'Who is eligible to apply for incubation at IIIT Bhagalpur Startup Cell?',
    a: 'Any enrolled undergraduate, postgraduate, or doctoral student of IIIT Bhagalpur, faculty members, alumni, or external founding teams having at least one core co-founder from IIIT Bhagalpur are eligible to apply.',
  },
  {
    q: 'Do I need an already registered company to apply?',
    a: 'No! You can apply at the Ideation / Pre-Incubation stage with just a prototype concept or project. Once your solution shows market promise, our incubation team assists you with company incorporation (Private Limited).',
  },
  {
    q: 'What is the equity policy for student startups?',
    a: 'Pre-incubation is 100% zero-equity. For startups selected for full physical incubation and accessing substantial institutional seed capital/grants, a standard nominal equity policy (1% to 3%) applies in line with the National Innovation and Startup Policy (NISP).',
  },
  {
    q: 'How does seed funding disbursement work under Bihar Startup Policy?',
    a: 'IIIT Bhagalpur acts as a recognized institutional incubation center. Selected student startups are recommended to the Department of Industries, Govt. of Bihar for interest-free seed grants of up to ₹10 Lakhs disbursed in structured tranches upon achieving milestones.',
  },
  {
    q: 'Can hardware and robotics projects access testing equipment?',
    a: 'Yes! The Startup Cell Maker Lab is equipped with 3D printers, sensor test rigs, micro-soldering equipment, and electronics oscilloscopes, backed by mechatronics and ECE faculty coordinators.',
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
    rollOrAffiliation: '',
    startupName: '',
    domain: 'Software / AI / SaaS',
    stage: 'Pre-Incubation (Ideation & Prototype)',
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
      rollOrAffiliation: '',
      startupName: '',
      domain: 'Software / AI / SaaS',
      stage: 'Pre-Incubation (Ideation & Prototype)',
      pitchSummary: '',
    });
  };

  return (
    <div className="pt-24 pb-20 bg-[#EEE3D4]">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#EEE3D4] via-[#E5D6C5] to-[#EEE3D4] text-[#292825] pt-16 pb-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-b border-[#D8C5B0]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D8C5B0]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#B85C3A]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D8C5B0] text-[#B85C3A] text-xs font-bold uppercase tracking-widest mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#B85C3A] animate-pulse" />
            Incubation Centre • IIIT Bhagalpur
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#292825]">
            Incubation <span className="text-[#B85C3A]">Centre</span>
          </h1>
          <p className="text-[#292825]/85 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            The epicenter of venture creation at IIIT Bhagalpur. Offering seed grants up to ₹10 Lakhs, 24/7 Maker Labs, legal and patent backing, and institutional mentorship to scale your enterprise.
          </p>
          <button
            onClick={() => setIsApplyModalOpen(true)}
            className="px-8 py-4 rounded-full font-bold text-base bg-[#B85C3A] text-white hover:bg-[#9E4E30] border border-[#D8C5B0]/30 shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Apply for Incubation Support</span>
            <span>→</span>
          </button>
        </div>
      </section>

      {/* Incubation Tracks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-24 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#292825] bg-[#EEE3D4] border border-[#D8C5B0] px-3.5 py-1 rounded-full mb-3 inline-block shadow-2xs">
            Structured Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292825] tracking-tight">
            Incubation Tracks Tailored for Founders
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {incubationPrograms.map((prog) => (
            <div
              key={prog.title}
              className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                prog.highlight
                  ? 'bg-[#292825] text-white shadow-2xl border-2 border-[#B85C3A] scale-100 lg:-translate-y-2'
                  : 'bg-white text-[#292825] shadow-xs hover:shadow-xl border border-[#D8C5B0] hover:border-[#B85C3A]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      prog.highlight
                        ? 'bg-[#B85C3A] text-white border border-[#D8C5B0]/30'
                        : 'bg-[#EEE3D4] text-[#292825] border border-[#D8C5B0]'
                    }`}
                  >
                    {prog.badge}
                  </span>
                  <span
                    className={`text-xs font-medium ${
                      prog.highlight ? 'text-[#D8C5B0]' : 'text-[#6F6B5E]'
                    }`}
                  >
                    ⏱ {prog.duration}
                  </span>
                </div>

                <h3
                  className={`text-2xl font-bold mb-3 ${
                    prog.highlight ? 'text-white' : 'text-[#292825]'
                  }`}
                >
                  {prog.title}
                </h3>

                <p
                  className={`text-sm mb-6 ${
                    prog.highlight ? 'text-[#D8C5B0]/90' : 'text-[#292825]/80'
                  }`}
                >
                  {prog.target}
                </p>

                <div
                  className={`p-4 rounded-xl mb-6 font-semibold text-sm flex items-center gap-2 ${
                    prog.highlight
                      ? 'bg-[#1E1D1B] border border-[#B85C3A]/40 text-[#D8C5B0]'
                      : 'bg-[#EEE3D4]/50 border border-[#D8C5B0] text-[#292825]'
                  }`}
                >
                  <span>💵</span> {prog.grant}
                </div>

                <h4
                  className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                    prog.highlight ? 'text-[#D8C5B0]' : 'text-[#292825]'
                  }`}
                >
                  Key Program Offerings:
                </h4>
                <ul className="space-y-3 text-sm mb-8">
                  {prog.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="shrink-0 font-bold text-[#B85C3A]">
                        ✓
                      </span>
                      <span className={prog.highlight ? 'text-[#D8C5B0]/90' : 'text-[#292825]/80'}>
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
                    ? 'bg-[#B85C3A] text-white hover:bg-[#9E4E30] border border-[#D8C5B0]/30 shadow-md'
                    : 'bg-[#292825] text-white hover:bg-[#3D3B36] shadow-sm'
                }`}
              >
                Apply for this Track →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities & Perks Grid */}
      <section className="bg-[#E5D6C5] py-20 px-4 sm:px-6 lg:px-8 border-y border-[#D8C5B0] mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#292825] bg-[#EEE3D4] border border-[#D8C5B0] px-3.5 py-1 rounded-full mb-3 inline-block shadow-2xs">
              Campus Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292825] tracking-tight">
              State-of-the-Art Incubation Facilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac) => (
              <div
                key={fac.title}
                className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-xl border border-[#D8C5B0] hover:border-[#B85C3A] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-4 p-3.5 w-14 h-14 rounded-xl bg-[#EEE3D4] border border-[#D8C5B0] text-[#B85C3A] flex items-center justify-center">
                    {fac.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#292825] mb-2">
                    {fac.title}
                  </h3>
                  <p className="text-[#292825]/80 text-sm leading-relaxed">
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
          <span className="text-xs font-bold tracking-widest uppercase text-[#292825] bg-[#EEE3D4] border border-[#D8C5B0] px-3.5 py-1 rounded-full mb-3 inline-block shadow-2xs">
            Selection Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292825] tracking-tight">
            How to Get Incubated in 4 Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Submit Concept', desc: 'Complete the online application form summarizing your team background and value proposition.' },
            { step: '02', title: 'Technical Screening', desc: 'Faculty coordinators evaluate problem validity, novelty, and technical feasibility.' },
            { step: '03', title: 'Advisory Pitch Day', desc: 'Present a 10-minute live demo and slide presentation to the Incubation Advisory Committee.' },
            { step: '04', title: 'MoU & Grant Tranche', desc: 'Sign institutional incubation MoU, claim dedicated lab workspace, and receive grant tranches.' },
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-2xl p-6 shadow-xs border border-[#D8C5B0] text-center relative">
              <span className="w-10 h-10 rounded-full bg-[#B85C3A] text-white font-extrabold text-sm flex items-center justify-center mx-auto mb-4 shadow-sm">
                {item.step}
              </span>
              <h3 className="text-base font-bold text-[#292825] mb-2">{item.title}</h3>
              <p className="text-[#292825]/80 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#292825] bg-[#EEE3D4] border border-[#D8C5B0] px-3.5 py-1 rounded-full mb-3 inline-block shadow-2xs">
            Clarifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292825] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#D8C5B0] overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left font-bold text-[#292825] text-base sm:text-lg flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#B85C3A] text-xl font-bold shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-[#292825]/80 text-sm sm:text-base leading-relaxed border-t border-[#D8C5B0]/50 pt-4">
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
          className="fixed inset-0 z-50 bg-[#292825]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setIsApplyModalOpen(false)}
        >
          <div
            className="relative max-w-xl w-full bg-white rounded-3xl p-7 sm:p-9 shadow-2xl border border-[#D8C5B0] my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#EEE3D4] text-[#292825] hover:bg-[#D8C5B0] flex items-center justify-center transition-colors cursor-pointer font-bold"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#EEE3D4] text-[#B85C3A] font-extrabold text-2xl flex items-center justify-center mx-auto mb-4 border border-[#D8C5B0]">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#292825] mb-2">Application Submitted!</h3>
                <p className="text-[#292825]/80 text-sm leading-relaxed mb-6">
                  Thank you for applying to the Incubation Centre at IIIT Bhagalpur. Our incubation panel will review your pitch and reach out via institutional email within 5 business days.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full font-bold bg-[#292825] text-white hover:bg-[#3D3B36] transition-all text-sm cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6 text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B85C3A] bg-[#EEE3D4] border border-[#D8C5B0] px-2.5 py-1 rounded-md mb-2 inline-block">
                    Official Incubation Application
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#292825]">
                    Apply for Incubation Support
                  </h3>
                  <p className="text-[#6F6B5E] text-xs mt-1">
                    Startup Cell & Incubation Centre • IIIT Bhagalpur
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-[#292825] mb-1">
                      Lead Founder Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Aarav Sharma"
                      value={formData.founderName}
                      onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                      className="w-full px-3.5 py-2.2 rounded-xl border border-[#D8C5B0] text-sm focus:border-[#B85C3A] focus:outline-none focus:ring-2 focus:ring-[#B85C3A]/20 text-[#292825] bg-[#F7F1E8]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#292825] mb-1">
                        Institutional Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="name@iiitbh.ac.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.2 rounded-xl border border-[#D8C5B0] text-sm focus:border-[#B85C3A] focus:outline-none focus:ring-2 focus:ring-[#B85C3A]/20 text-[#292825] bg-[#F7F1E8]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#292825] mb-1">
                        Contact Phone *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.2 rounded-xl border border-[#D8C5B0] text-sm focus:border-[#B85C3A] focus:outline-none focus:ring-2 focus:ring-[#B85C3A]/20 text-[#292825] bg-[#F7F1E8]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#292825] mb-1">
                        Roll No. / Affiliation
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2201010ECE / Alum"
                        value={formData.rollOrAffiliation}
                        onChange={(e) => setFormData({ ...formData, rollOrAffiliation: e.target.value })}
                        className="w-full px-3.5 py-2.2 rounded-xl border border-[#D8C5B0] text-sm focus:border-[#B85C3A] focus:outline-none focus:ring-2 focus:ring-[#B85C3A]/20 text-[#292825] bg-[#F7F1E8]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#292825] mb-1">
                        Target Track
                      </label>
                      <select
                        value={formData.stage}
                        onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                        className="w-full px-3.5 py-2.2 rounded-xl border border-[#D8C5B0] text-sm focus:border-[#B85C3A] focus:outline-none focus:ring-2 focus:ring-[#B85C3A]/20 bg-[#F7F1E8] text-[#292825]"
                      >
                        <option>Pre-Incubation (Ideation & Prototype)</option>
                        <option>Full Incubation (Launch & Seed Fund)</option>
                        <option>Scale & Acceleration Track</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#292825] mb-1">
                      Startup / Venture Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. RoboKriti Dynamics"
                      value={formData.startupName}
                      onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
                      className="w-full px-3.5 py-2.2 rounded-xl border border-[#D8C5B0] text-sm focus:border-[#B85C3A] focus:outline-none focus:ring-2 focus:ring-[#B85C3A]/20 text-[#292825] bg-[#F7F1E8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#292825] mb-1">
                      Brief Pitch & Problem Solved *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe the problem, target audience, technology used, and required incubation support..."
                      value={formData.pitchSummary}
                      onChange={(e) => setFormData({ ...formData, pitchSummary: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#D8C5B0] text-sm focus:border-[#B85C3A] focus:outline-none focus:ring-2 focus:ring-[#B85C3A]/20 text-[#292825] bg-[#F7F1E8]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm bg-[#B85C3A] text-white hover:bg-[#9E4E30] border border-[#D8C5B0]/30 shadow-md transition-all mt-2 cursor-pointer"
                  >
                    Submit Application for Screening →
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
