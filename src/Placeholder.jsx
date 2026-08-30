export default function Placeholder({ id, title, alt }) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 px-6 ${alt ? 'bg-cream' : 'bg-teal-950'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`font-heading text-3xl md:text-5xl font-bold mb-4 ${alt ? 'text-teal-950' : 'text-cream'}`}>
          {title}
        </h2>
        <p className={`${alt ? 'text-teal-900/60' : 'text-cream/60'} text-lg`}>
          This section is coming soon — full design in the next iteration.
        </p>
      </div>
    </section>
  );
}
