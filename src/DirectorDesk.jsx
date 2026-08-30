export default function DirectorDesk() {
  return (
    <section id="director" className="scroll-mt-24 bg-[#072e2b] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Director Photo with Gold Glow Border */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-400/30 via-teal-400/20 to-transparent blur-xl" />
          <div className="relative rounded-2xl overflow-hidden border border-teal-500/30 shadow-2xl bg-[#093a35]">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85"
              alt="Director, Startup Cell IIIT Bhagalpur"
              className="w-full h-[460px] object-cover object-top hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#072e2b] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#072e2b]/90 backdrop-blur-md border border-teal-600/40">
              <p className="text-white font-bold text-lg">Dr. Anjali Mehra</p>
              <p className="text-amber-400 text-xs font-medium tracking-wider uppercase">Director & Head of Incubation</p>
            </div>
          </div>
        </div>

        {/* Message Content */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Leadership & Vision
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Nurturing Groundbreaking Ideas into Enduring Enterprises.
          </h2>

          <div className="relative mb-8">
            <svg className="absolute -top-3 -left-4 w-10 h-10 text-amber-400/20 pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
            </svg>
            <blockquote className="text-slate-200 text-lg md:text-xl leading-relaxed pl-6 border-l-4 border-amber-400 italic">
              "Innovation without execution is merely a daydream. At IIIT Bhagalpur, our mission is to empower student innovators with the discipline, capital, and relentless mentorship required to transform technical curiosity into world-class market solutions."
            </blockquote>
          </div>

          <p className="text-teal-100/80 text-sm sm:text-base leading-relaxed mb-8">
            The modern economy rewards agility and technological depth. Whether you are building an AI-driven SaaS platform, hardware IoT automation, or next-generation sustainable mobility, our incubation infrastructure and investor network ensure you never walk the entrepreneurial journey alone.
          </p>

          <div className="flex items-center gap-4 pt-4 border-t border-teal-800/60">
            <div className="w-12 h-12 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold text-lg">
              AM
            </div>
            <div>
              <p className="text-white font-bold text-base">Dr. Anjali Mehra</p>
              <p className="text-teal-300/80 text-xs">Ph.D. in Computer Science & Entrepreneurial Systems • IIIT Bhagalpur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
