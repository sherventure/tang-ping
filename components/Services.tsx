const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9h.01M16 9h.01M8 15h8" />
      </svg>
    ),
    title: "Food",
    desc: "Bold flavours, honest ingredients. Share plates and late-night bites that always hit.",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3h6l1 9H8L9 3zM8 12c0 2.21 1.79 4 4 4s4-1.79 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 21h12M12 16v5" />
      </svg>
    ),
    title: "Drinks",
    desc: "Creative cocktails, cold beers, and non-alcoholic options that don't taste like an afterthought.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13" />
        <circle cx="6" cy="19" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
        <circle cx="18" cy="16" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
      </svg>
    ),
    title: "Performance",
    desc: "Live acts, DJ sets, and shows that turn dinner into an experience you won't forget.",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#FFF0F3] px-6 md:px-12 py-24">
      {/* Section header */}
      <div className="mb-14">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8B1A1A]">
          What We Do
        </span>
        <h2 className="mt-3 font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] leading-none text-[#1A0808] uppercase">
          More Than Just
          <br />
          <span className="text-[#1A0808]/20">a Restaurant.</span>
        </h2>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((s) => (
          <div
            key={s.title}
            className={`relative rounded-2xl p-8 border-2 transition-all hover:-translate-y-1 ${
              s.highlight
                ? "bg-[#FFDB4D] border-[#FFDB4D] text-[#1A0808]"
                : "bg-white border-[#FFD0DA] text-[#1A0808] hover:border-[#FF6B8A]"
            }`}
          >
            <div className={`mb-4 ${s.highlight ? "text-[#8B1A1A]" : "text-[#FF6B8A]"}`}>
              {s.icon}
            </div>
            <h3 className="font-[family-name:var(--font-bebas)] text-3xl uppercase tracking-wide mb-3">
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#1A0808]/60">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
