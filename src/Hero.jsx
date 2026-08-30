export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center scroll-mt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('[images.unsplash.com](https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80)')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/80 via-teal-950/70 to-teal-950" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-24">
        <p className="uppercase tracking-[0.3em] text-gold-400 text-sm font-medium mb-6">
          College Startup Cell
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6">
          Fostering <span className="text-gold-400">Billion-Dollar</span> Dreams.
        </h1>
        <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          We empower student entrepreneurs with mentorship, funding access, hands-on
          innovation, and a thriving community — turning bold ideas into ventures that matter.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('incubation')}
            className="px-8 py-4 rounded-full bg-gold-500 text-teal-950 font-semibold tracking-wide hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore Incubator
          </button>
          <button
            onClick={() => scrollTo('team')}
            className="px-8 py-4 rounded-full border border-cream/30 text-cream font-semibold tracking-wide hover:bg-cream/10 hover:border-gold-400 hover:-translate-y-0.5 transition-all duration-300"
          >
            Join Community
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E3C08D" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
