import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/', isSection: false },
  { label: 'What is Startup Cell', path: '/#about', isSection: true, sectionId: 'about' },
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
            ? 'bg-[#072e2b]/95 backdrop-blur-md shadow-xl shadow-teal-950/25 py-3 border-b border-teal-700/30'
            : 'bg-[#072e2b]/85 backdrop-blur-sm py-4 border-b border-teal-600/20'
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Enhanced Modern Minimalist Brand Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavClick({ path: '/', isSection: false }, e)}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Startup Cell IIIT Bhagalpur Home"
          >
            {/* Modern Geometric Vector SVG Emblem */}
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0d4741] via-[#072e2b] to-[#031d1b] border border-amber-400/40 p-2 shadow-lg shadow-teal-950/40 group-hover:border-amber-400 group-hover:scale-105 transition-all duration-300">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                className="w-full h-full drop-shadow-md"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="navLogoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="50%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                {/* Geometric Precision Shield / Hexagon */}
                <path
                  d="M20 3L35 11.5V28.5L20 37L5 28.5V11.5L20 3Z"
                  stroke="url(#navLogoGrad)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="#072e2b"
                  fillOpacity="0.7"
                />
                {/* Ascending Innovation Spark / Rocket Falcon Core */}
                <path
                  d="M20 9L25 18H21.5V27L15 20H18.5L20 9Z"
                  fill="url(#navLogoGrad)"
                  stroke="#fbbf24"
                  strokeWidth="0.5"
                />
                {/* Luminous Micro Nodes */}
                <circle cx="20" cy="31.5" r="1.6" fill="#fbbf24" />
                <circle cx="11.5" cy="15.5" r="1.2" fill="#2dd4bf" />
                <circle cx="28.5" cy="15.5" r="1.2" fill="#2dd4bf" />
              </svg>
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-amber-400/20 to-teal-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Typography */}
            <div className="flex flex-col text-left">
              <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight leading-none group-hover:text-amber-300 transition-colors">
                Startup<span className="text-amber-400">Cell</span>
              </span>
              <span className="text-teal-300/90 text-[9.5px] tracking-[0.22em] uppercase font-bold mt-1">
                IIIT Bhagalpur
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {navItems.map((item) => {
              const active = isActive(item);
              return (
                <li key={item.label}>
                  {item.isSection ? (
                    <a
                      href={item.path}
                      onClick={(e) => handleNavClick(item, e)}
                      className={`text-sm font-medium tracking-wide transition-all duration-200 py-1.5 px-1 relative ${
                        active
                          ? 'text-amber-300 font-semibold after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:h-[2.5px] after:w-full after:bg-amber-400 after:rounded-full'
                          : 'text-slate-100/90 hover:text-amber-300 after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-amber-400/80 after:transition-all after:duration-300 hover:after:w-full'
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={(e) => handleNavClick(item, e)}
                      className={`text-sm font-medium tracking-wide transition-all duration-200 py-1.5 px-1 relative ${
                        active
                          ? 'text-amber-300 font-semibold after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:h-[2.5px] after:w-full after:bg-amber-400 after:rounded-full'
                          : 'text-slate-100/90 hover:text-amber-300 after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-amber-400/80 after:transition-all after:duration-300 hover:after:w-full'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop Action CTA: Register/Login */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => {
                setAuthMode('login');
                setAuthSubmitted(false);
                setIsAuthOpen(true);
              }}
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-teal-950 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 text-teal-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Register/Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="xl:hidden p-2 rounded-lg text-slate-100 hover:text-amber-400 hover:bg-teal-900/50 transition-colors focus:outline-none"
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
          <div className="xl:hidden bg-[#072e2b]/98 backdrop-blur-xl border-b border-teal-700/40 shadow-2xl px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
            <ul className="flex flex-col gap-4">
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
                            ? 'text-amber-300 font-semibold border-l-4 border-amber-400 pl-3'
                            : 'text-slate-100 hover:text-amber-300 pl-2'
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
                            ? 'text-amber-300 font-semibold border-l-4 border-amber-400 pl-3'
                            : 'text-slate-100 hover:text-amber-300 pl-2'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Mobile Action CTA: Register/Login */}
            <div className="mt-6 pt-5 border-t border-teal-800/60">
              <button
                onClick={() => {
                  setOpen(false);
                  setAuthMode('login');
                  setAuthSubmitted(false);
                  setIsAuthOpen(true);
                }}
                className="w-full py-3.5 text-center rounded-xl font-bold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-teal-950 shadow-md hover:from-amber-300 hover:to-amber-400 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Register/Login</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Interactive Register / Login Authentication Modal */}
      {isAuthOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in"
          onClick={() => setIsAuthOpen(false)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl border border-teal-900/10 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsAuthOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-red-100 hover:text-red-700 flex items-center justify-center transition-colors font-bold"
              aria-label="Close auth modal"
            >
              ✕
            </button>

            {authSubmitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-800 font-extrabold text-2xl flex items-center justify-center mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#072e2b] mb-2">
                  {authMode === 'login' ? 'Welcome Back!' : 'Registration Initiated!'}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {authMode === 'login'
                    ? 'Authenticated into Startup Cell portal. Accessing founder dashboard & cohort resources.'
                    : 'Your founder account has been created. Please check your institutional email to verify and access incubation tools.'}
                </p>
                <button
                  onClick={() => setIsAuthOpen(false)}
                  className="px-6 py-2.5 rounded-full font-bold bg-[#072e2b] text-white hover:bg-teal-900 transition-all text-sm"
                >
                  Go to Portal
                </button>
              </div>
            ) : (
              <div>
                {/* Header with Logo */}
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#072e2b] border border-amber-400/40 mx-auto flex items-center justify-center mb-3 shadow-md">
                    <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 3L35 11.5V28.5L20 37L5 28.5V11.5L20 3Z"
                        stroke="#fbbf24"
                        strokeWidth="2.5"
                        fill="#0d4741"
                      />
                      <path d="M20 9L25 18H21.5V27L15 20H18.5L20 9Z" fill="#fbbf24" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#072e2b]">
                    Startup Cell Portal
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">
                    IIIT Bhagalpur Innovation & Incubation Platform
                  </p>
                </div>

                {/* Tab Switcher: Login / Register */}
                <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
                  <button
                    type="button"
                    onClick={() => setAuthMode('login')}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                      authMode === 'login'
                        ? 'bg-white text-[#072e2b] shadow-sm'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthMode('register')}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                      authMode === 'register'
                        ? 'bg-white text-[#072e2b] shadow-sm'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Register
                  </button>
                </div>

                <form onSubmit={handleAuthSubmit} className="space-y-4 text-left">
                  {authMode === 'register' && (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Rahul Verma"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="student@iiitbh.ac.in"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Password *
                    </label>
                    <input
                      required
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20"
                    />
                  </div>

                  {authMode === 'register' && (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Role / Designation
                      </label>
                      <select className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/20 bg-white">
                        <option>Student Founder (IIITBH)</option>
                        <option>External Startup Founder</option>
                        <option>Faculty / Research Scholar</option>
                        <option>Alumni / Mentor / Angel Investor</option>
                      </select>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-teal-950 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all mt-2 cursor-pointer"
                  >
                    {authMode === 'login' ? 'Sign In to Dashboard →' : 'Create Account & Register →'}
                  </button>
                </form>

                <div className="mt-5 text-center text-xs text-slate-500">
                  {authMode === 'login' ? (
                    <p>
                      Don't have an account?{' '}
                      <button
                        type="button"
                        onClick={() => setAuthMode('register')}
                        className="text-teal-700 font-bold hover:underline"
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
                        className="text-teal-700 font-bold hover:underline"
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
