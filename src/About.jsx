const pillars = [
  {
    title: 'Mentorship',
    desc: 'Direct access to founders, investors, and industry veterans who guide student ventures from idea to execution.',
  },
  {
    title: 'Innovation',
    desc: 'Dedicated labs, hackathons, and design sprints that turn classroom curiosity into real-world prototypes.',
  },
  {
    title: 'Ecosystem',
    desc: 'A connected network of alumni founders, VCs, and industry partners that opens doors long after graduation.',
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-teal-700 text-sm font-semibold mb-4">
            About Us
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-teal-950 mb-6">
            Empowering Tomorrow's Founders.
          </h2>
          <p className="text-teal-900/70 text-lg leading-relaxed">
            The Startup Cell exists to close the gap between a great idea and a great
            company. We believe every student carries the seed of a venture worth
            building — our job is mentorship, capital access, and a community that
            makes that leap possible. From first sketch to first funding round, we walk
            alongside founders at every stage of the entrepreneurial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-teal-900/5"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/15 flex items-center justify-center mb-6">
                <span className="w-3 h-3 rounded-full bg-gold-500" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-teal-950 mb-3">
                {p.title}
              </h3>
              <p className="text-teal-900/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
