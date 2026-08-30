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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#072e2b]/95 backdrop-blur-md shadow-lg shadow-teal-950/20 py-3 border-b border-teal-700/30'
          : 'bg-[#072e2b]/80 backdrop-blur-sm py-4 border-b border-teal-600/20'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={(e) => handleNavClick({ path: '/', isSection: false }, e)}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-teal-500 flex items-center justify-center font-bold text-teal-950 text-lg shadow-md group-hover:scale-105 group-hover:shadow-amber-500/20 transition-all duration-300">
            SC
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg sm:text-xl tracking-tight leading-none group-hover:text-amber-300 transition-colors">
              Startup Cell
            </span>
            <span className="text-teal-300/80 text-[10px] tracking-widest uppercase font-medium mt-0.5">
              IIIT Bhagalpur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden xl:flex items-center gap-6 2xl:gap-8">
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

        {/* Desktop Action CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/incubation"
            className="px-5 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-400 to-amber-500 text-teal-950 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            Apply for Incubation
          </Link>
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

          <div className="mt-6 pt-5 border-t border-teal-800/60">
            <Link
              to="/incubation"
              onClick={() => setOpen(false)}
              className="block w-full py-3 text-center rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-teal-950 shadow-md hover:from-amber-300 hover:to-amber-400 transition-all"
            >
              Apply for Incubation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
