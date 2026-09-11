import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/', isSection: false },
  { label: 'About Us', path: '/#about', isSection: true, sectionId: 'about' },
  { label: 'Director', path: '/#director', isSection: true, sectionId: 'director' },
  { label: 'Our Story', path: '/story', isSection: false },
  { label: 'Gallery', path: '/gallery', isSection: false },
  { label: 'Our Team', path: '/team', isSection: false },
  { label: 'Incubation Center', path: '/incubation', isSection: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [authSubmitted, setAuthSubmitted] = useState(false);
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

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setAuthSubmitted(true);
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
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Institute Bilingual Brand Logo & Identity */}
          <Link
            to="/"
            onClick={(e) => handleNavClick({ path: '/', isSection: false }, e)}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Startup Cell IIIT Bhagalpur Home"
          >
            {/* Geometric Vector Emblem */}
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl">
  <img
    src="dist/assets/Indian_Institute_of_Information_Technology,_Bhagalpur_logo.png"
    alt="IIIT Bhagalpur Logo"
    className="w-full h-full object-contain"
  />
</div>

            {/* Bilingual Institutional Typography Matching Reference Hierarchy */}
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-[#292825] font-extrabold text-sm sm:text-base tracking-tight leading-none group-hover:text-[#B85C3A] transition-colors">
                  Indian Institute of Information Technology Bhagalpur
                </span>
              </div>
              <span className="text-[#6F6B5E] text-[10px] sm:text-[11px] font-medium tracking-wide mt-0.5">
                भारतीय सूचना प्रौद्योगिकी संस्थान भागलपुर • Startup Cell
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
                      className={`text-sm tracking-wide transition-all duration-200 py-1.5 px-1 relative ${
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

          {/* Desktop Action CTA: Register/Login in Terracotta */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => {
                setAuthMode('login');
                setAuthSubmitted(false);
                setIsAuthOpen(true);
              }}
              className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#B85C3A] text-white hover:bg-[#9E4E30] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Register Now</span>
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
          <div className="xl:hidden bg-[#EEE3D4] border-b border-[#D8C5B0] shadow-xl px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
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
                  setAuthMode('login');
                  setAuthSubmitted(false);
                  setIsAuthOpen(true);
                }}
                className="w-full py-3 text-center rounded-full font-bold text-sm bg-[#B85C3A] text-white hover:bg-[#9E4E30] shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Register Now</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Interactive Register / Login Authentication Modal */}
      {isAuthOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#292825]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in"
          onClick={() => setIsAuthOpen(false)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl border border-[#D8C5B0] my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsAuthOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#EEE3D4] text-[#292825] hover:bg-[#D8C5B0] flex items-center justify-center transition-colors font-bold cursor-pointer"
              aria-label="Close auth modal"
            >
              ✕
            </button>

            {authSubmitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#D8C5B0] text-[#292825] font-extrabold text-2xl flex items-center justify-center mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#292825] mb-2">
                  {authMode === 'login' ? 'Welcome Back!' : 'Registration Initiated!'}
                </h3>
                <p className="text-[#292825]/80 text-sm leading-relaxed mb-6">
                  {authMode === 'login'
                    ? 'Authenticated into Startup Cell portal. Accessing founder dashboard & cohort resources.'
                    : 'Your founder account has been created. Please check your institutional email to verify and access incubation tools.'}
                </p>
                <button
                  onClick={() => setIsAuthOpen(false)}
                  className="px-6 py-2.5 rounded-full font-bold bg-[#292825] text-white hover:bg-[#3D3B36] transition-all text-sm cursor-pointer"
                >
                  Go to Portal
                </button>
              </div>
            ) : (
              <div>
                {/* Header with Logo */}
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#292825] border border-[#B85C3A]/40 mx-auto flex items-center justify-center mb-3 shadow-md">
                    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 3L35 11.5V28.5L20 37L5 28.5V11.5L20 3Z"
                        stroke="#D8C5B0"
                        strokeWidth="2.5"
                        fill="#1E1D1B"
                      />
                      <path d="M20 9L25 18H21.5V27L15 20H18.5L20 9Z" fill="#D8C5B0" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#292825]">
                    Startup Cell Portal
                  </h3>
                  <p className="text-[#6F6B5E] text-xs mt-1">
                    IIIT Bhagalpur Innovation & Incubation Platform
                  </p>
                </div>

                {/* Tab Switcher: Login / Register */}
                <div className="flex bg-[#EEE3D4] p-1 rounded-xl mb-6">
                  <button
                    type="button"
                    onClick={() => setAuthMode('login')}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      authMode === 'login'
                        ? 'bg-[#292825] text-white shadow-sm'
                        : 'text-[#6F6B5E] hover:text-[#292825]'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthMode('register')}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      authMode === 'register'
                        ? 'bg-[#292825] text-white shadow-sm'
                        : 'text-[#6F6B5E] hover:text-[#292825]'
                    }`}
                  >
                    Register
                  </button>
                </div>

                <form onSubmit={handleAuthSubmit} className="space-y-4 text-left">
                  {authMode === 'register' && (
                    <div>
                      <label className="block text-xs font-semibold text-[#292825] mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Rahul Verma"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D8C5B0] text-sm focus:border-[#B85C3A] focus:outline-none focus:ring-2 focus:ring-[#B85C3A]/20 text-[#292825] bg-[#F7F1E8]"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-[#292825] mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="student@iiitbh.ac.in"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8C5B0] text-sm focus:border-[#B85C3A] focus:outline-none focus:ring-2 focus:ring-[#B85C3A]/20 text-[#292825] bg-[#F7F1E8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#292825] mb-1">
                      Password *
                    </label>
                    <input
                      required
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D8C5B0] text-sm focus:border-[#B85C3A] focus:outline-none focus:ring-2 focus:ring-[#B85C3A]/20 text-[#292825] bg-[#F7F1E8]"
                    />
                  </div>

                  {authMode === 'register' && (
                    <div>
                      <label className="block text-xs font-semibold text-[#292825] mb-1">
                        Role / Designation
                      </label>
                      <select className="w-full px-4 py-2.5 rounded-xl border border-[#D8C5B0] text-sm focus:border-[#B85C3A] focus:outline-none focus:ring-2 focus:ring-[#B85C3A]/20 bg-[#F7F1E8] text-[#292825]">
                        <option>Student Founder (IIITBH)</option>
                        <option>External Startup Founder</option>
                        <option>Faculty / Research Scholar</option>
                        <option>Alumni / Mentor / Angel Investor</option>
                      </select>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm bg-[#B85C3A] text-white hover:bg-[#9E4E30] border border-[#D8C5B0]/30 shadow-md transition-all mt-2 cursor-pointer"
                  >
                    {authMode === 'login' ? 'Sign In to Dashboard →' : 'Create Account & Register →'}
                  </button>
                </form>

                <div className="mt-5 text-center text-xs text-[#292825]/70">
                  {authMode === 'login' ? (
                    <p>
                      Don't have an account?{' '}
                      <button
                        type="button"
                        onClick={() => setAuthMode('register')}
                        className="text-[#B85C3A] font-bold hover:underline cursor-pointer"
                      >
                        Register here
                      </button>
                    </p>
                  ) : (
                    <p>
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={() => setAuthMode('login')}
                        className="text-[#B85C3A] font-bold hover:underline cursor-pointer"
                      >
                        Sign in
                      </button>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
