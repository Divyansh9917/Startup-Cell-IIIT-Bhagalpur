export default function Placeholder({ id, title, alt }) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 px-6 ${alt ? 'bg-[#F5EFEB]' : 'bg-[#2F4156]'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`font-heading text-3xl md:text-5xl font-bold mb-4 ${alt ? 'text-[#2F4156]' : 'text-white'}`}>
          {title}
        </h2>
        <p className={`${alt ? 'text-[#2F4156]/70' : 'text-[#C8D9E6]/80'} text-lg`}>
          This section is coming soon — full design in the next iteration.
        </p>
      </div>
    </section>
  );
}
