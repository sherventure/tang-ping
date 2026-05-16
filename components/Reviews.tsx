const reviews = [
  {
    name: "Mia T.",
    handle: "@miatastebuds",
    stars: 5,
    text: "Best night out I've had in ages. The food hit different and the karaoke room was UNREAL.",
  },
  {
    name: "Jordan K.",
    handle: "@jordankay",
    stars: 5,
    text: "We booked a private table for a birthday — staff went above and beyond. 10/10 vibes all night.",
  },
  {
    name: "Priya S.",
    handle: "@priyaout",
    stars: 5,
    text: "The cocktails are creative as hell. Loved every single sip. Will absolutely be back.",
  },
  {
    name: "Marcus L.",
    handle: "@marcuseats",
    stars: 5,
    text: "Tang Ping is the move. Good music, insane food, friends — what else do you need?",
  },
  {
    name: "Anika W.",
    handle: "@anikaw",
    stars: 5,
    text: "Came for dinner, stayed until closing. The energy in this place is just different.",
  },
  {
    name: "Chris B.",
    handle: "@cbfoodie",
    stars: 5,
    text: "The sharing plates are massive and packed with flavour. Brought 8 people and everyone was happy.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#FFDB4D]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#6DC5B9] px-6 md:px-12 py-24">
      {/* Header */}
      <div className="mb-14">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0D3330]/60">
          Real Talk
        </span>
        <h2 className="mt-3 font-[family-name:var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] leading-none text-white uppercase">
          The People
          <br />
          <span className="text-[#FFDB4D]">Love Us.</span>
        </h2>
      </div>

      {/* Review grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((r) => (
          <div
            key={r.handle}
            className="bg-white rounded-2xl p-6 border-2 border-white hover:border-[#FFDB4D] transition-colors"
          >
            <Stars count={r.stars} />
            <p className="mt-4 text-[#1A0808]/70 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#FF6B8A]/20 flex items-center justify-center text-sm font-bold text-[#8B1A1A]">
                {r.name[0]}
              </div>
              <div>
                <p className="text-[#1A0808] text-sm font-semibold">{r.name}</p>
                <p className="text-[#1A0808]/40 text-xs">{r.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social proof badge */}
      <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 justify-center text-center sm:text-left">
        <div className="flex -space-x-2">
          {["#FF6B8A", "#FFDB4D", "#4ade80", "#60a5fa", "#c084fc"].map((color, i) => (
            <div
              key={i}
              className="w-9 h-9 rounded-full border-2 border-[#6DC5B9]"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <p className="text-white/80 text-sm">
          <span className="text-white font-bold">2,000+</span> happy guests and counting
        </p>
      </div>
    </section>
  );
}
