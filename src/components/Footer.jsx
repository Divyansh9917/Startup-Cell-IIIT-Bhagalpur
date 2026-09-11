import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E1D1B] text-[#D8C5B0] border-t border-[#3D3B36] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B85C3A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#D8C5B0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1850px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-left">
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl">
  <img
    src="dist/assets/Indian_Institute_of_Information_Technology,_Bhagalpur_logo.png"
    alt="IIIT Bhagalpur Logo"
    className="w-full h-full object-contain"
  />
</div>
              <div className="flex flex-col text-left">
                <h3 className="text-white font-extrabold text-lg tracking-tight leading-none">
                  Startup<span className="text-[#B85C3A]">Cell</span>
                </h3>
                <p className="text-[#D8C5B0]/90 text-[10px] font-bold uppercase tracking-[0.15em] mt-1">
                  IIIT Bhagalpur
                </p>
              </div>
            </div>
            <p className="text-[#D8C5B0]/80 text-xs sm:text-sm leading-relaxed mb-6">
              Empowering student visionaries and tech researchers at IIIT Bhagalpur to transform lab curiosity into venture-backed scalable enterprises.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#292825] hover:bg-[#B85C3A] hover:text-white flex items-center justify-center text-[#D8C5B0] transition-all duration-200 border border-[#3D3B36]"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg bg-[#292825] hover:bg-[#B85C3A] hover:text-white flex items-center justify-center text-[#D8C5B0] transition-all duration-200 border border-[#3D3B36]"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-[#292825] hover:bg-[#B85C3A] hover:text-white flex items-center justify-center text-[#D8C5B0] transition-all duration-200 border border-[#3D3B36]"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B85C3A]" />
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-[#D8C5B0]/80 hover:text-[#B85C3A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-[#D8C5B0]/80 hover:text-[#B85C3A] transition-colors">
                  About the Cell
                </Link>
              </li>
              <li>
                <Link to="/incubation" className="text-[#D8C5B0]/80 hover:text-[#B85C3A] transition-colors">
                  Incubation Tracks & Labs
                </Link>
              </li>
              <li>
                <Link to="/startups" className="text-[#D8C5B0]/80 hover:text-[#B85C3A] transition-colors font-semibold text-white">
                  Incubated Startups (Portfolio)
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#D8C5B0]/80 hover:text-[#B85C3A] transition-colors">
                  Events & Hackathons
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-[#D8C5B0]/80 hover:text-[#B85C3A] transition-colors">
                  Leadership & Team
                </Link>
              </li>
              <li>
                <Link to="/story" className="text-[#D8C5B0]/80 hover:text-[#B85C3A] transition-colors">
                  Our Evolution & Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Government Affiliations & Policies */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B85C3A]" />
              Policy & Frameworks
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D8C5B0]/85">
              <li className="flex items-center gap-2">
                <span className="text-[#B85C3A]">✓</span> MoE Innovation Cell (MIC)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#B85C3A]">✓</span> Institution's Innovation Council (IIC)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#B85C3A]">✓</span> National Innovation & Startup Policy (NISP)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#B85C3A]">✓</span> Bihar Startup Policy 2022 (₹10L Grant)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#B85C3A]">✓</span> MeitY TIDE 2.0 Scheme
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#B85C3A]">✓</span> DST NIDHI-EIR Fellowship
              </li>
            </ul>
          </div>

          {/* Contact & Hub */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B85C3A]" />
              Incubation Hub Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#D8C5B0]/85">
              <p className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#B85C3A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>IIIT Bhagalpur, Sabour, Bhagalpur, Bihar - 813210</span>
              </p>
              <p className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#B85C3A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:startupcell@iiitbh.ac.in" className="hover:text-[#B85C3A] transition-colors">
                  startupcell@iiitbh.ac.in
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#B85C3A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Maker Lab: 24/7 for Incubatees</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-[#3D3B36] flex flex-col sm:flex-row items-center justify-between text-xs text-[#D8C5B0]/70 gap-4">
          <p>© {currentYear} Startup Cell & Incubation Centre, Indian Institute of Information Technology Bhagalpur. All rights reserved.</p>
          <p className="text-[#B85C3A]">An Institute of National Importance under Ministry of Education, Govt. of India</p>
        </div>
      </div>
    </footer>
  );
}
