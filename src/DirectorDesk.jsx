export default function DirectorDesk() {
  return (
    <section id="director" className="scroll-mt-24 bg-teal-950 py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-gold-500/20 to-transparent blur-2xl" />
          <img
            src="[images.unsplash.com](https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80)"
            alt="Director portrait"
            className="relative rounded-[2rem] w-full h-[520px] object-cover shadow-2xl"
          />
        </div>

        <div>
          <p className="uppercase tracking-[0.3em] text-gold-400 text-sm font-semibold mb-4">
            Director's Desk
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-cream mb-8 leading-tight">
            Leading with Vision.
          </h2>
          <blockquote className="text-cream/80 text-lg md:text-xl leading-relaxed border-l-2 border-gold-500 pl-6 mb-8 italic">
            "Innovation without execution is just a daydream. We push our founders to
            pair bold ideas with disciplined execution — because passion fades, but
            resilience is what carries a company from a dorm room to a boardroom."
          </blockquote>
          <div>
            <p className="text-cream font-heading font-semibold text-lg">Dr. Anjali Mehra</p>
            <p className="text-gold-400/90 text-sm tracking-wide">Director, Startup Cell</p>
          </div>
        </div>
      </div>
    </section>
  );
}
