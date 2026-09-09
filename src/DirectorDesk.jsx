import { Link } from 'react-router-dom';

export default function DirectorDesk() {
  return (
    <section id="director" className="scroll-mt-24 bg-[#EEE3D4] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#D8C5B0]">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D8C5B0]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#B85C3A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Leadership Portrait & Badge */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#B85C3A]/20 via-[#D8C5B0]/30 to-transparent blur-xl" />
          <div className="relative rounded-3xl overflow-hidden border border-[#D8C5B0] shadow-2xl bg-[#292825]">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85"
              alt="Prof. Pradeep Kumar Jain, Director, IIIT Bhagalpur"
              className="w-full h-[460px] object-cover object-top hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#292825] via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#292825]/95 backdrop-blur-md border border-[#B85C3A]/40 shadow-lg">
              <p className="text-white font-bold text-lg">Prof. (Dr.) Pradeep Kumar Jain</p>
              <p className="text-[#D8C5B0] text-xs font-semibold tracking-wider uppercase">Director & Chief Patron, IIIT Bhagalpur</p>
              <p className="text-white/60 text-[10px] mt-0.5">Ph.D., FNAE, FNASc • National Technology Leader</p>
            </div>
          </div>
        </div>

        {/* Message Content */}
        <div className="lg:col-span-7 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D8C5B0] text-[#B85C3A] text-xs font-bold tracking-widest uppercase mb-5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B85C3A]" />
            Director's Desk & Vision
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#292825] tracking-tight mb-6 leading-tight">
            Transforming Engineering Talent into Job Creators.
          </h2>

          <div className="relative mb-6">
            <blockquote className="text-[#292825] text-lg md:text-xl leading-relaxed pl-6 border-l-4 border-[#B85C3A] italic font-medium">
              "At IIIT Bhagalpur, our aspiration is not merely to train world-class software engineers and researchers, but to cultivate daring founders who solve indigenous challenges in healthcare, robotics, artificial intelligence, and clean energy. Innovation without execution remains an academic exercise; the Startup Cell provides the wings of seed capital, labs, and mentorship to make those ideas soar."
            </blockquote>
          </div>

          <p className="text-[#292825]/85 text-sm sm:text-base leading-relaxed mb-6">
            Aligned with the national vision of <em>Atmanirbhar Bharat</em> and <em>Viksit Bharat 2047</em>, our Incubation Centre provides complete institutional backing — from zero-equity pre-incubation grants to institutional patent filing and VC syndication. Every student with a defensible technological concept will find our doors open 24/7.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#D8C5B0] mb-6">
            <div className="bg-white/80 p-3.5 rounded-xl border border-[#D8C5B0]">
              <span className="block font-bold text-[#292825] text-sm">Institution's Innovation Council</span>
              <span className="text-xs text-[#6F6B5E]">Rated among top innovation hubs by MoE</span>
            </div>
            <div className="bg-white/80 p-3.5 rounded-xl border border-[#D8C5B0]">
              <span className="block font-bold text-[#292825] text-sm">State & Central Grant Backing</span>
              <span className="text-xs text-[#6F6B5E]">Bihar Startup Policy, MeitY TIDE 2.0 & DST</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/incubation"
              className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#B85C3A] text-white hover:bg-[#9E4E30] transition-colors shadow-sm"
            >
              Learn About Incubation Support →
            </Link>
            <Link
              to="/team"
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#292825] hover:text-[#B85C3A] transition-colors"
            >
              Meet Advisory Board
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
