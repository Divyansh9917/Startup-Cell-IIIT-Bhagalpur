export default function DirectorDesk() {
  return (
    <section id="director" className="scroll-mt-24 bg-[#EEE3D4] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#D8C5B0]">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D8C5B0]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#B85C3A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Director Photo with Subtle Warm Glow Border */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#B85C3A]/20 via-[#D8C5B0]/30 to-transparent blur-xl" />
          <div className="relative rounded-3xl overflow-hidden border border-[#D8C5B0] shadow-2xl bg-[#292825]">
            <img
              src="dist/assets/prof-madhusudan-singh.jpg"
              alt="Director, Startup Cell IIIT Bhagalpur"
              className="w-full h-[460px] object-cover object-top hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#292825] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#292825]/95 backdrop-blur-md border border-[#B85C3A]/40 shadow-lg">
              <p className="text-white font-bold text-lg">Prof. Madhusudan Singh</p>
              <p className="text-[#D8C5B0] text-xs font-semibold tracking-wider uppercase">Director</p>
            </div>
          </div>
        </div>

        {/* Message Content */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D8C5B0] text-[#B85C3A] text-xs font-bold tracking-widest uppercase mb-5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B85C3A]" />
            Leadership & Vision
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#292825] tracking-tight mb-8 leading-tight">
            Leadership That Inspires Innovation.
          </h2>

          <div className="relative mb-8">
            <svg className="absolute -top-3 -left-4 w-10 h-10 text-[#B85C3A]/20 pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
            </svg>
            <blockquote className="text-[#292825] text-lg md:text-xl leading-relaxed pl-6 border-l-4 border-[#B85C3A] italic font-medium">
              “At IIIT Bhagalpur, our vision is to create an environment where knowledge, innovation, and entrepreneurship come together to shape the leaders of tomorrow.”
              </blockquote>
          </div>

          <p className="text-[#292825]/80 text-sm sm:text-base leading-relaxed mb-8">
            The institute is committed to fostering a culture of curiosity, research, and innovation. With strong academic foundations and an emphasis on emerging technologies, IIIT Bhagalpur continues to empower students to transform ideas into meaningful solutions for society.
          </p>

          <div className="flex items-center gap-4 pt-4 border-t border-[#D8C5B0]">
            <div className="w-12 h-12 rounded-full bg-[#B85C3A] border border-[#D8C5B0] flex items-center justify-center text-white font-bold text-lg shadow-sm">
              MS
            </div>
            <div>
              <p className="text-[#292825] font-bold text-base">Prof. Madhusudan Singh</p>
              <p className="text-[#6F6B5E] text-xs">Professor of EE Department at DTU (Formerly Delhi College of Engineering), Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
