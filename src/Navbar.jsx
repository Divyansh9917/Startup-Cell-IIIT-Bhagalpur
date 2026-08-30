import { useState, useEffect } from 'react';

const navItems = [
  { label: 'About Us', id: 'about' },
  { label: 'Director', id: 'director' },
  { label: 'Our Story', id: 'story' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Our Team', id: 'team' },
  { label: 'Incubation Center', id: 'incubation' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-teal-950/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <button onClick={() => scrollTo('home')} className="flex items-center gap-3 group">
          <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center font-heading font-bold text-teal-950 text-lg shadow-md group-hover:scale-105 transition-transform">
            SC
          </span>
          <span className="text-cream font-heading font-semibold text-xl tracking-wide">
            Startup Cell
          </span>
        </button>

        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="relative text-cream/85 text-sm font-medium tracking-wide hover:text-gold-400 transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="lg:hidden text-cream" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="lg:hidden flex flex-col items-center gap-6 bg-teal-950/95 backdrop-blur-md py-8 mt-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="text-cream/90 text-base font-medium hover:text-gold-400 transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
