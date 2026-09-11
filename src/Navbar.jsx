import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/', isSection: false },

  { label: 'About', path: '/#about', isSection: true, sectionId: 'about' },
  { label: 'Incubation & Labs', path: '/incubation', isSection: false },
  { label: 'Startups', path: '/startups', isSection: false },
  { label: 'Events & Gallery', path: '/gallery', isSection: false },
  { label: 'Team', path: '/team', isSection: false },

  { label: 'Our Story', path: '/story', isSection: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isPitchModalOpen, setIsPitchModalOpen] = useState(false);
  const [pitchSubmitted, setPitchSubmitted] = useState(false);
  
  const [pitchForm, setPitchForm] = useState({
    name: '',
    email: '',
    phone: '',
    rollOrAffiliation: '',
    startupName: '',
    domain: 'Software / AI / SaaS',
    brief: '',
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (item, e) => {
    setOpen(false);
    if (item.isSection) {
      e?.preventDefault();
      if (location.pathname === '/') {
        const el = document.getElementById(item.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(`/#${item.sectionId}`);
      }
    } else if (item.path === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    }
  };

  const isActive = (item) => {
    if (item.isSection) {
      return location.pathname === '/' && location.hash === `#${item.sectionId}`;
    }
    if (item.path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    return location.pathname === item.path;
  };

  const handlePitchSubmit = (e) => {
    e.preventDefault();
    setPitchSubmitted(true);
  };

  const handleResetModal = () => {
    setPitchSubmitted(false);
    setIsPitchModalOpen(false);
    setPitchForm({
      name: '',
      email: '',
      phone: '',
      rollOrAffiliation: '',
      startupName: '',
      domain: 'Software / AI / SaaS',
      brief: '',
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#EEE3D4]/95 backdrop-blur-md shadow-sm py-2.5 border-b border-[#D8C5B0]'
            : 'bg-[#EEE3D4]/90 backdrop-blur-sm py-3.5 border-b border-[#D8C5B0]/50'
        }`}
      >
        <nav className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1850px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 2xl:px-12">
          {/* Institute Bilingual Brand Logo & Identity */}
          <Link
            to="/"
            onClick={(e) => handleNavClick({ path: '/', isSection: false }, e)}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Startup Cell IIIT Bhagalpur Home"
          >
            {/* Emblem */}
            
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl ">
  <img
    src="/Indian_Institute_of_Information_Technology,_Bhagalpur_logo.png"
    alt="IIIT Bhagalpur Logo"
    className="w-full h-full object-contain"
  />
</div>



            {/* Bilingual Institutional Typography */}
            <div className="flex flex-col text-left">
              <span className="text-[#292825] font-extrabold text-xs sm:text-sm md:text-base tracking-tight leading-none group-hover:text-[#B85C3A] transition-colors">
                IIIT Bhagalpur • Startup Cell
              </span>
              <span className="text-[#6F6B5E] text-[10px] sm:text-[11px] font-medium tracking-wide mt-0.5 hidden sm:inline">
                भारतीय सूचना प्रौद्योगिकी संस्थान भागलपुर • Incubation Centre
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden xl:flex items-center gap-5 2xl:gap-6">
            {navItems.map((item) => {
              const active = isActive(item);
              return (
                <li key={item.label}>
                  {item.isSection ? (
                    <a
                      href={item.path}
                      onClick={(e) => handleNavClick(item, e)}
                      className={`text-sm tracking-wide transition-all duration-200 py-1.5 px-1 relative cursor-pointer ${
                        active
                          ? 'text-[#292825] font-bold after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:h-[2.5px] after:w-full after:bg-[#B85C3A] after:rounded-full'
                          : 'text-[#292825]/80 hover:text-[#B85C3A] font-medium after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#B85C3A] after:transition-all after:duration-300 hover:after:w-full'
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={(e) => handleNavClick(item, e)}
                      className={`text-sm tracking-wide transition-all duration-200 py-1.5 px-1 relative ${
                        active
                          ? 'text-[#292825] font-bold after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:h-[2.5px] after:w-full after:bg-[#B85C3A] after:rounded-full'
                          : 'text-[#292825]/80 hover:text-[#B85C3A] font-medium after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#B85C3A] after:transition-all after:duration-300 hover:after:w-full'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop Action CTA: Apply for Incubation */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => {
                setPitchSubmitted(false);
                setIsPitchModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#B85C3A] text-white hover:bg-[#9E4E30] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 4v16m8-8H4" />
              </svg>
              <span>Apply for Incubation</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="xl:hidden p-2 rounded-lg text-[#292825] hover:text-[#B85C3A] hover:bg-[#D8C5B0]/30 transition-colors focus:outline-none cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Drawer Menu */}
        {open && (
          <div className="xl:hidden bg-[#EEE3D4] border-b border-[#D8C5B0] shadow-xl px-6 py-6 transition-all duration-300">
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => {
                const active = isActive(item);
                return (
                  <li key={item.label}>
                    {item.isSection ? (
                      <a
                        href={item.path}
                        onClick={(e) => handleNavClick(item, e)}
                        className={`block py-2 text-base font-medium transition-colors ${
                          active
                            ? 'text-[#292825] font-bold border-l-4 border-[#B85C3A] pl-3'
                            : 'text-[#292825]/80 hover:text-[#B85C3A] pl-2'
                        }`}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={(e) => handleNavClick(item, e)}
                        className={`block py-2 text-base font-medium transition-colors ${
                          active
                            ? 'text-[#292825] font-bold border-l-4 border-[#B85C3A] pl-3'
                            : 'text-[#292825]/80 hover:text-[#B85C3A] pl-2'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Mobile Action CTA */}
            <div className="mt-5 pt-4 border-t border-[#D8C5B0]">
              <button
                onClick={() => {
                  setOpen(false);
                  setPitchSubmitted(false);
                  setIsPitchModalOpen(true);
                }}
                className="w-full py-3 text-center rounded-full font-bold text-sm bg-[#B85C3A] text-white hover:bg-[#9E4E30] shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 4v16m8-8H4" />
                </svg>
                <span>Apply for Incubation</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Official Incubation Application Modal (Clean, authentic student application) */}
      {isPitchModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#292825]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setIsPitchModalOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-3xl p-7 sm:p-8 shadow-2xl border border-[#D8C5B0] my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPitchModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#EEE3D4] text-[#292825] hover:bg-[#D8C5B0] flex items-center justify-center transition-colors font-bold cursor-pointer"
              aria-label="Close pitch modal"
            >
              ✕
            </button>

            {pitchSubmitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#EEE3D4] text-[#B85C3A] font-extrabold text-2xl flex items-center justify-center mx-auto mb-4 border border-[#D8C5B0]">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#292825] mb-2">
                  Pitch Received!
                </h3>
                <p className="text-[#292825]/80 text-sm leading-relaxed mb-6">
                  Thank you for submitting your concept to the Startup Cell, IIIT Bhagalpur. Our Faculty Incubation Committee will review your submission and contact you regarding the upcoming Pitch Day.
                </p>
                <button
                  onClick={handleResetModal}
                  className="px-6 py-2.5 rounded-full font-bold bg-[#292825] text-white hover:bg-[#3D3B36] transition-all text-sm cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B85C3A] bg-[#EEE3D4] px-3 py-1 rounded-full border border-[#D8C5B0] inline-block mb-2">
                    Cohort 2026 Admissions
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#292825]">
                    Apply for Incubation Support
                  </h3>
                  <p className="text-[#6F6B5E] text-xs mt-1">
                    Startup Cell & Incubation Centre • IIIT Bhagalpur
                  </p>
                </div>

                <form onSubmit={handlePitchSubmit} className="space-y-3.5 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-[#292825] mb-1">
                      Applicant Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={pitchForm.name}
                      onChange={(e) => setPitchForm({ ...pitchForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.2 rounded-xl border border-[#D8C5B0] text-sm focus:border-[#B85C3A] focus:outline-none focus:ring-2 focus:ring-[#B85C3A]/20 text-[#292825] bg-[#F7F1E8]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#292825] mb-1">
                        College / Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="student@iiitbh.ac.in"
                        value={pitchForm.email}
                        onChange={(e) => setPitchForm({ ...pitchForm, email: e.target.value })}
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
                        value={pitchForm.phone}
                        onChange={(e) => setPitchForm({ ...pitchForm, phone: e.target.value })}
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
                        placeholder="e.g. 2101045CSE or Alumni"
                        value={pitchForm.rollOrAffiliation}
                        onChange={(e) => setPitchForm({ ...pitchForm, rollOrAffiliation: e.target.value })}
                        className="w-full px-3.5 py-2.2 rounded-xl border border-[#D8C5B0] text-sm focus:border-[#B85C3A] focus:outline-none focus:ring-2 focus:ring-[#B85C3A]/20 text-[#292825] bg-[#F7F1E8]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#292825] mb-1">
                        Venture Domain
                      </label>
                      <select
                        value={pitchForm.domain}
                        onChange={(e) => setPitchForm({ ...pitchForm, domain: e.target.value })}
                        className="w-full px-3.5 py-2.2 rounded-xl border border-[#D8C5B0] text-sm focus:border-[#B85C3A] focus:outline-none focus:ring-2 focus:ring-[#B85C3A]/20 text-[#292825] bg-[#F7F1E8]"
                      >
                        <option>DeepTech & AI</option>
                        <option>Hardware, IoT & Robotics</option>
                        <option>CleanTech & Energy</option>
                        <option>EdTech & SaaS</option>
                        <option>AgriTech / HealthTech</option>
                        <option>Other Open Track</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#292825] mb-1">
                      Startup / Project Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. NeuralDrone Systems"
                      value={pitchForm.startupName}
                      onChange={(e) => setPitchForm({ ...pitchForm, startupName: e.target.value })}
                      className="w-full px-3.5 py-2.2 rounded-xl border border-[#D8C5B0] text-sm focus:border-[#B85C3A] focus:outline-none focus:ring-2 focus:ring-[#B85C3A]/20 text-[#292825] bg-[#F7F1E8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#292825] mb-1">
                      Brief Problem & Solution Summary *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Briefly describe what problem you are solving, target users, and what support you need from the Startup Cell..."
                      value={pitchForm.brief}
                      onChange={(e) => setPitchForm({ ...pitchForm, brief: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#D8C5B0] text-sm focus:border-[#B85C3A] focus:outline-none focus:ring-2 focus:ring-[#B85C3A]/20 text-[#292825] bg-[#F7F1E8]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-sm bg-[#B85C3A] text-white hover:bg-[#9E4E30] border border-[#D8C5B0]/30 shadow-md transition-all mt-2 cursor-pointer"
                  >
                    Submit Pitch for Screening →
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
