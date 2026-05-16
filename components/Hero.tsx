export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FF6B8A] px-6 md:px-12 pt-20 md:pt-24">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FF8FA3]/50 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#FFDB4D]/30 blur-[100px] pointer-events-none" />

      {/* Eyebrow */}
      <div className="mb-6 inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-[#1A0808]/20 bg-white/20">
        <span className="w-2 h-2 rounded-full bg-[#1A0808] animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A0808]">
          Now Open in the City
        </span>
      </div>

      {/* Main headline */}
      <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(4rem,14vw,13rem)] leading-[0.9] text-white uppercase tracking-tight">
        A Place To
        <br />
        <span className="text-[#1A0808]">Take A Break.</span>
      </h1>

      {/* Sub */}
      <p className="mt-6 max-w-md text-base md:text-lg text-white/80 font-[family-name:var(--font-dm-sans)]">
        Tang Ping is your all-in-one spot — killer food, fire cocktails, and
        entertainment that keeps the night alive.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#services"
          className="px-8 py-4 bg-[#8B1A1A] text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[#1A0808] transition-colors text-center"
        >
          See What We Do
        </a>
        <a
          href="#contact"
          className="px-8 py-4 border-2 border-[#1A0808]/30 text-[#1A0808] font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[#1A0808]/10 transition-colors text-center"
        >
          Reserve a Table
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs uppercase tracking-widest text-[#1A0808]/30 font-semibold">Scroll</span>
        <svg className="w-4 h-4 text-[#1A0808]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Bold label strip */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-1 text-right">
        {["Restaurant", "Bar", "Entertainment"].map((tag) => (
          <span
            key={tag}
            className="font-[family-name:var(--font-bebas)] text-4xl text-[#1A0808]/10 tracking-wider uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
